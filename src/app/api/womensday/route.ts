import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, countryCode, cellphone, address } = body;

  console.log('Received data:', body);
  console.log('Environment variables:', {
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  });

  if (!fullName || !email || !countryCode || !cellphone || !address) {
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
    subject: 'New Women’s Day Booking Submission',
    text: `
      New booking received for the Women’s Day Event:

      Name: ${fullName}
      Email: ${email}
      Phone: ${countryCode} ${cellphone}
      Address: ${address}
    `,
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `You're Booked! 🌸 Women’s Day Celebration Awaits ✨`,
    text: `Hi ${fullName},

Thank you for booking your spot for our Women’s Day Event! 🌷✨  
We’re so thrilled to have you join us for this beautiful celebration of women, connection, and empowerment.

Here’s what to do next:

💳 Make Your Payment  
To secure your seat, please make the **full payment of R450** to the account below:

Bank Name: Capitec  
Account Name: Carina Pereira  
Account Type: Savings  
Account Number: 1485816058  
Branch Code: 470010  

Use your full name + “Women’s Day” as the payment reference.

📩 Once paid, kindly email your **proof of payment** and this booking confirmation to: makeup@carinapereira.com

📌 A Few Important Notes:
- All payments are non-refundable.
- Please arrive on time — the event is curated to flow beautifully from start to finish.
- If you’re unable to attend without prior notice, your seat may be given away.
- Come as you are — this is a day to relax, recharge, and celebrate YOU 💖

We can’t wait to share this incredible experience with you. Let’s make magic together!

With love,  
The Carina Pereira Team ✨`,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({
      success: true,
      message: 'Booking submitted successfully.',
    });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails.' },
      { status: 500 }
    );
  }
}
