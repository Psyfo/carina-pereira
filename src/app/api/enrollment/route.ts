import { NextResponse } from 'next/server';

import { getZeptoMailClient } from '@/lib/email/client';
import {
  enrollmentAdminTemplate,
  enrollmentStudentTemplate,
} from '@/lib/email/templates';
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

    logger.info('Email recipient configured', { recipient: recipientEmail });

    // ── Admin notification ────────────────────────────────────────
    const adminHtml = enrollmentAdminTemplate({
      fullName,
      email,
      countryCode,
      cellphone,
      address,
      program,
      paymentMethod,
    });

    const adminText = `New enrollment received:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${countryCode} ${cellphone}\nAddress: ${address}\nProgram: ${program}\nPayment Method: ${paymentMethod}`;

    logger.info(
      `Sending admin notification email to ${recipients.length} recipient(s)`,
    );
    try {
      await client.sendMail({
        from,
        to: recipients,
        reply_to: [{ address: email, name: fullName }],
        subject: 'New Enrollment Submission',
        htmlbody: adminHtml,
        textbody: adminText,
        track_opens: false,
        track_clicks: false,
        client_reference: `enrollment_admin_${Date.now()}`,
      });
      logger.info('Admin notification email sent successfully');
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : JSON.stringify(error, null, 2);
      logger.error('Failed to send admin notification email', {
        error: errMsg,
        stack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }

    // ── Student confirmation ──────────────────────────────────────
    const studentHtml = enrollmentStudentTemplate({ fullName, program });

    const studentText = `Hi ${fullName},\n\nWe're so excited to have you join our ${program}!\n\nTo confirm your place, a 50% deposit of the course fee is required. The remaining balance is due one week before the course begins.\n\nPlease make your payment to:\nBank: Capitec\nAccount Name: Carina Pereira\nAccount Type: Savings\nAccount Number: 1485816058\nBranch Code: 470010\n\nUse your full name + course title as your payment reference.\nThen email your proof of payment to: makeup@carinapereira.com\n\nWith love,\nThe Carina Pereira Team`;

    logger.info('Sending confirmation email to student', {
      studentEmail: email,
    });
    try {
      await client.sendMail({
        from,
        to: [
          {
            email_address: {
              address: email,
              name: fullName,
            },
          },
        ],
        subject: `Welcome to the ${program} Course — Next Steps Inside`,
        htmlbody: studentHtml,
        textbody: studentText,
        track_opens: false,
        track_clicks: false,
        client_reference: `enrollment_student_${Date.now()}`,
      });
      logger.info('Student confirmation email sent successfully', {
        studentEmail: email,
      });
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : JSON.stringify(error, null, 2);
      logger.error('Failed to send student confirmation email', {
        error: errMsg,
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
    const errMsg =
      error instanceof Error ? error.message : JSON.stringify(error, null, 2);
    logger.error('Enrollment submission failed', {
      error: errMsg,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { success: false, message: 'Failed to send emails.' },
      { status: 500 },
    );
  }
}
