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

    logger.info('Contact form - email recipient configured', {
      recipient: recipientEmail,
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
        address: process.env.ZEPTOMAIL_FROM_EMAIL || 'info@carinapereira.com',
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
