import { NextResponse } from 'next/server';
import { SendMailClient } from 'zeptomail';

import logger from '@/lib/logger';

// app/api/subscribe/route.ts

export async function POST(req: Request) {
  const { fullName, email } = await req.json();

  if (!email || !fullName) {
    logger.warn('Newsletter subscription failed - missing fields', {
      hasEmail: !!email,
      hasFullName: !!fullName,
    });
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  logger.info('Newsletter subscription received', { fullName, email });

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
    logger.error('Mailchimp environment variables not configured');
    return NextResponse.json(
      { message: 'Missing Mailchimp env vars' },
      { status: 500 }
    );
  }

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed', // or "pending" for double opt-in
    merge_fields: {
      FNAME: fullName, // Make sure your audience has this merge field set up
    },
  };

  const auth = Buffer.from(`anystring:${API_KEY}`).toString('base64');

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.status === 200 || res.status === 201) {
      logger.info('Mailchimp subscription successful', { email });

      // Send notification email to admin(s)
      await sendAdminNotification(fullName, email);

      return NextResponse.json({ message: 'Successfully subscribed!' });
    } else if (json.title === 'Member Exists') {
      logger.info('Newsletter subscription - user already subscribed', {
        email,
      });
      return NextResponse.json(
        { message: "You're already subscribed." },
        { status: 200 }
      );
    } else {
      logger.error('Mailchimp error', { error: json });
      return NextResponse.json(
        { message: json.detail ?? 'Mailchimp error' },
        { status: 500 }
      );
    }
  } catch (err) {
    logger.error('Newsletter subscription API error', {
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    });
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

async function sendAdminNotification(fullName: string, email: string) {
  try {
    const zeptoUrl =
      process.env.ZEPTOMAIL_API_URL || 'https://api.zeptomail.com/v1.1/email';
    const token = process.env.ZEPTOMAIL_SEND_MAIL_TOKEN;

    if (!token) {
      logger.warn(
        'ZeptoMail token not configured - skipping admin notification'
      );
      return;
    }

    const client = new SendMailClient({ url: zeptoUrl, token });

    // Determine recipient based on environment
    const recipientEmail =
      process.env.ZEPTOMAIL_RECIPIENT_EMAIL || 'info@carinapereira.com';
    const recipients = [
      {
        email_address: {
          address: recipientEmail,
          name: 'Carina Pereira',
        },
      },
    ];

    logger.info('Newsletter notification - email recipient configured', {
      recipient: recipientEmail,
    });

    const emailContent = `New newsletter subscription received:

Name: ${fullName}
Email: ${email}

This subscriber has been added to your Mailchimp mailing list.`;

    await client.sendMail({
      from: {
        address: process.env.ZEPTOMAIL_FROM_EMAIL || 'info@carinapereira.com',
        name: process.env.ZEPTOMAIL_FROM_NAME || 'Carina Pereira International',
      },
      to: recipients,
      subject: 'New Newsletter Subscription',
      textbody: emailContent,
    });

    logger.info('Newsletter admin notification sent successfully', {
      subscriber: email,
    });
  } catch (error) {
    logger.error('Failed to send newsletter admin notification', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      subscriber: email,
    });
    // Don't throw - we don't want to fail the subscription if notification fails
  }
}
