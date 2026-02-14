import { NextResponse } from 'next/server';

import { getZeptoMailClient } from '@/lib/email/client';
import { contactAdminTemplate } from '@/lib/email/templates';
import logger from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Validate the input
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 },
      );
    }

    const { client, from, recipientEmail } = getZeptoMailClient();

    const recipients = [
      {
        email_address: {
          address: recipientEmail,
          name: 'Carina Pereira',
        },
      },
    ];

    logger.info('Contact form - sending notification', {
      recipient: recipientEmail,
    });

    // Build branded HTML template
    const htmlbody = contactAdminTemplate({
      firstName,
      lastName,
      email,
      message,
    });

    // Plain-text fallback
    const textbody = `New contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;

    // Send email using ZeptoMail
    await client.sendMail({
      from,
      to: recipients,
      subject: 'New Contact Form Submission',
      htmlbody,
      textbody,
      track_opens: false,
      track_clicks: false,
      client_reference: `contact_${Date.now()}`,
    });

    logger.info('Contact form email sent successfully', {
      firstName,
      lastName,
      email,
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!' },
      { status: 200 },
    );
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : JSON.stringify(error, null, 2);
    logger.error('Error processing contact form submission', {
      error: errMsg,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 },
    );
  }
}
