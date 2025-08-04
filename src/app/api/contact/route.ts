import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // xneelo mail server
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER, // Your email address (where you want to receive the message)
      replyTo: email, // Reply to the sender's email address
      subject: 'Carina Pereira Contact Form Submission', // Subject line
      text: `You have received a new contact form submission:\n\n
             First Name: ${firstName}\n
             Last Name: ${lastName}\n
             Email: ${email}\n
             Message: ${message}\n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

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
