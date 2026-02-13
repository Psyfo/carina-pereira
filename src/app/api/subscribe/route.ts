import { NextResponse } from 'next/server';

import { getZeptoMailClient } from '@/lib/email/client';
import { subscribeAdminTemplate } from '@/lib/email/templates';
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
      { status: 500 },
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
        { status: 200 },
      );
    } else {
      logger.error('Mailchimp error', { error: json });
      return NextResponse.json(
        { message: json.detail ?? 'Mailchimp error' },
        { status: 500 },
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
    const { client, from, recipientEmail } = getZeptoMailClient();

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

    const htmlbody = subscribeAdminTemplate({ fullName, email });

    const textbody = `New newsletter subscription received:\n\nName: ${fullName}\nEmail: ${email}\n\nThis subscriber has been added to your Mailchimp mailing list.`;

    await client.sendMail({
      from,
      to: recipients,
      subject: 'New Newsletter Subscriber',
      htmlbody,
      textbody,
      track_opens: false,
      track_clicks: false,
      client_reference: `newsletter_sub_${Date.now()}`,
    });

    logger.info('Newsletter admin notification sent successfully', {
      subscriber: email,
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : JSON.stringify(error, null, 2);
    logger.error('Failed to send newsletter admin notification', {
      error: errMsg,
      stack: error instanceof Error ? error.stack : undefined,
      subscriber: email,
    });
    // Don't throw - we don't want to fail the subscription if notification fails
  }
}
