import { NextResponse } from 'next/server';
import { SendMailClient } from 'zeptomail';

import logger from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Validate the input
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Initialize ZeptoMail client
    const url =
      process.env.ZEPTOMAIL_API_URL || 'https://api.zeptomail.com/v1.1/email';
    const token = process.env.ZEPTOMAIL_SEND_MAIL_TOKEN;

    if (!token) {
      logger.error('ZeptoMail API token is not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured properly.',
        },
        { status: 500 }
      );
    }

    const client = new SendMailClient({ url, token });

    // Determine recipients based on environment
    const isDevelopment = process.env.NODE_ENV === 'development';
    const recipients = [];

    // Always add info@ email
    const infoEmail =
      process.env.ZEPTOMAIL_RECIPIENT_EMAIL_INFO || 'info@carinapereira.com';
    recipients.push({
      email_address: {
        address: infoEmail,
        name: 'Carina Pereira - Info',
      },
    });

    // In production, also add makeup@ email
    if (!isDevelopment) {
      const makeupEmail =
        process.env.ZEPTOMAIL_RECIPIENT_EMAIL_MAKEUP ||
        'makeup@carinapereira.com';
      recipients.push({
        email_address: {
          address: makeupEmail,
          name: 'Carina Pereira - Makeup',
        },
      });
    }

    logger.info('Contact form - email recipients configured', {
      environment: isDevelopment ? 'development' : 'production',
      recipientCount: recipients.length,
      recipients: recipients.map((r) => r.email_address.address),
    });

    // Prepare email content
    const emailContent = `You have received a new contact form submission:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Message: ${message}`;

    // Send email using ZeptoMail
    await client.sendMail({
      from: {
        address:
          process.env.ZEPTOMAIL_FROM_EMAIL || 'no-reply@carinapereira.com',
        name: process.env.ZEPTOMAIL_FROM_NAME || 'Carina Pereira International',
      },
      to: recipients,
      reply_to: [
        {
          address: email,
          name: `${firstName} ${lastName}`,
        },
      ],
      subject: 'Carina Pereira Contact Form Submission',
      textbody: emailContent,
    });

    logger.info('Received form data:', { firstName, lastName, email, message });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
