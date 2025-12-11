import { NextResponse } from 'next/server';
import { SendMailClient } from 'zeptomail';

import logger from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      countryCode,
      cellphone,
      address,
      program,
      paymentMethod,
    } = body;

    logger.info('Received enrollment data:', {
      fullName,
      email,
      countryCode,
      cellphone,
      program,
      paymentMethod,
    });

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !countryCode ||
      !cellphone ||
      !address ||
      !program ||
      !paymentMethod
    ) {
      logger.warn('Enrollment validation failed - missing required fields', {
        missingFields: {
          fullName: !fullName,
          email: !email,
          countryCode: !countryCode,
          cellphone: !cellphone,
          address: !address,
          program: !program,
          paymentMethod: !paymentMethod,
        },
      });
      return NextResponse.json(
        { success: false, message: 'Please fill in all fields.' },
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

    logger.info('Initializing ZeptoMail client', { url });
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

    logger.info('Email recipients configured', {
      environment: isDevelopment ? 'development' : 'production',
      recipientCount: recipients.length,
      recipients: recipients.map((r) => r.email_address.address),
    });

    // Prepare admin notification email content
    const adminEmailContent = `
New enrollment received:

Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${cellphone}
Address: ${address}
Program: ${program}
Payment Method: ${paymentMethod}
    `.trim();

    // Prepare confirmation email content for student
    const studentEmailContent = `Hi ${fullName},

Yay! We're so excited to have you join our ${program} — it's going to be such a fun and transformative experience 💁‍♀️✨

Here's what happens next:

🔒 Secure Your Spot
To confirm your place, a 50% deposit of the course fee is required. The remaining balance is due one week before the course begins.

Please make your payment to:

Bank Name: Capitec
Account Name: Carina Pereira
Account Type: Savings
Account Number: 1485816058
Branch Code: 470010

Use your full name + the course title as your payment reference.
📩 Then email us both your proof of payment and this enrolment form to: makeup@carinapereira.com

📌 Important Notes (aka the grown-up stuff)
- All payments are non-refundable.
- Missing more than 5 classes without a medical note and not catching up will result in failing the course.
- If your payment isn't completed on time, we'll need to give your seat to someone else 😢
- Classes start on time — latecomers will need to catch up independently.
- Public holidays? No worries — we'll add on extra days to make up for it.
- Sometimes your lecturer may need to postpone class for last-minute shoots — but don't stress, top students get to tag along for real-world experience 🫶

We can't wait to meet you and start this journey together. You're going to learn so much, and we're here to support you every step of the way.

With love,  
The Carina Pereira Team ✨`;

    // Send admin notification email to configured recipients
    logger.info(
      `Sending admin notification email to ${recipients.length} recipient(s)`
    );
    try {
      await client.sendMail({
        from: {
          address: process.env.ZEPTOMAIL_FROM_EMAIL || 'info@carinapereira.com',
          name:
            process.env.ZEPTOMAIL_FROM_NAME || 'Carina Pereira International',
        },
        to: recipients,
        reply_to: [
          {
            address: email,
            name: fullName,
          },
        ],
        subject: 'New Enrollment Submission',
        textbody: adminEmailContent,
      });
      logger.info('Admin notification email sent successfully');
    } catch (error) {
      logger.error('Failed to send admin notification email', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }

    // Send confirmation email to the student
    logger.info('Sending confirmation email to student', {
      studentEmail: email,
    });
    try {
      await client.sendMail({
        from: {
          address: process.env.ZEPTOMAIL_FROM_EMAIL || 'info@carinapereira.com',
          name:
            process.env.ZEPTOMAIL_FROM_NAME || 'Carina Pereira International',
        },
        to: [
          {
            email_address: {
              address: email,
              name: fullName,
            },
          },
        ],
        subject: `You're In! 💇‍♀️ Let's Get You Ready for the ${program} Course ✨`,
        textbody: studentEmailContent,
      });
      logger.info('Student confirmation email sent successfully', {
        studentEmail: email,
      });
    } catch (error) {
      logger.error('Failed to send student confirmation email', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        studentEmail: email,
      });
      throw error;
    }

    logger.info('Enrollment process completed successfully', {
      fullName,
      email,
      program,
    });

    return NextResponse.json({
      success: true,
      message: 'Enrollment submitted successfully.',
    });
  } catch (error) {
    logger.error('Enrollment submission failed', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { success: false, message: 'Failed to send emails.' },
      { status: 500 }
    );
  }
}
