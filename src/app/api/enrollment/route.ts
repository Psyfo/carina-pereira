import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import logger from '@/lib/logger';

export async function POST(req: Request) {
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
  logger.info('Received enrollment data:', body);

  if (
    !fullName ||
    !email ||
    !countryCode ||
    !cellphone ||
    !address ||
    !program ||
    !paymentMethod
  ) {
    return NextResponse.json(
      { success: false, message: 'Please fill in all fields.' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Enrollment Submission',
    text: `
      New enrollment received:

      Name: ${fullName}
      Email: ${email}
      Phone: ${countryCode} ${cellphone}
      Address: ${address}
      Program: ${program}
      Payment Method: ${paymentMethod}
    `,
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `You’re In! 💇‍♀️ Let’s Get You Ready for the ${program} Course ✨`,
    text: `Hi ${fullName},

Yay! We’re so excited to have you join our ${program} — it’s going to be such a fun and transformative experience 💁‍♀️✨

Here’s what happens next:

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
- If your payment isn't completed on time, we’ll need to give your seat to someone else 😢
- Classes start on time — latecomers will need to catch up independently.
- Public holidays? No worries — we’ll add on extra days to make up for it.
- Sometimes your lecturer may need to postpone class for last-minute shoots — but don’t stress, top students get to tag along for real-world experience 🫶

We can’t wait to meet you and start this journey together. You're going to learn so much, and we’re here to support you every step of the way.

With love,  
The Carina Pereira Team ✨`,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({
      success: true,
      message: 'Enrollment submitted successfully.',
    });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails.' },
      { status: 500 }
    );
  }
}
