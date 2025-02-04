import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

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

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com', // Zoho SMTP server
      port: 465, // SSL port
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER, // Your email address (where you want to receive the message)
      subject: 'New Contact Form Submission', // Subject line
      text: `You have received a new contact form submission:\n\n
             First Name: ${firstName}\n
             Last Name: ${lastName}\n
             Email: ${email}\n
             Message: ${message}\n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Received form data:', { firstName, lastName, email, message });

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
