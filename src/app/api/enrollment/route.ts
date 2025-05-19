import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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
  console.log('Received data:', body);

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
    port: 465,
    secure: true,
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
    subject: 'Enrollment Received - Thank You!',
    text: `Hi ${fullName},\n\nThank you for submitting your enrollment form for the ${program}. We have received your information and will be in touch soon!\n\nWith love,\nThe Team`,
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
