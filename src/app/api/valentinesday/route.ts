import { NextResponse } from 'next/server';

import { getZeptoMailClient } from '@/lib/email/client';
import {
  valentinesAdminTemplate,
  valentinesUserTemplate,
} from '@/lib/email/templates';
import logger from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, countryCode, cellphone, address } = body;

    logger.info("Valentine's Day booking received", {
      fullName,
      email,
      countryCode,
      cellphone,
    });

    if (!fullName || !email || !countryCode || !cellphone || !address) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all fields.' },
        { status: 400 },
      );
    }

    const { client, from, recipientEmail } = getZeptoMailClient();

    // ── Admin notification ──────────────────────────────────────
    const adminHtml = valentinesAdminTemplate({
      fullName,
      email,
      countryCode,
      cellphone,
      address,
    });

    const adminText = `New Valentine's Day Booking:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${countryCode} ${cellphone}\nAddress: ${address}`;

    await client.sendMail({
      from,
      to: [
        {
          email_address: {
            address: recipientEmail,
            name: 'Carina Pereira',
          },
        },
      ],
      reply_to: [{ address: email, name: fullName }],
      subject: "New Valentine's Day Booking",
      htmlbody: adminHtml,
      textbody: adminText,
    });

    logger.info("Valentine's admin notification sent");

    // ── User confirmation ───────────────────────────────────────
    const userHtml = valentinesUserTemplate({ fullName });

    const userText = `Hi ${fullName},\n\nThank you for booking your spot for our Valentine's Day Makeup Masterclass!\n\nTo secure your seat, please make the full payment of R600 to:\nBank: Capitec\nAccount Name: Carina Pereira\nAccount Type: Savings\nAccount Number: 1485816058\nBranch Code: 470010\n\nUse your full name + "Valentine's Day" as the reference.\nOnce paid, email your proof of payment to: makeup@carinapereira.com\n\nEvent Details:\nDate: Saturday, 21st February 2026\nTime: 1pm - 4pm\nVenue: 13 Drama Street, Somerset West, Cape Town, 7130\n\nWith love,\nThe Carina Pereira Team`;

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
      subject: "You're Booked — Valentine's Day Makeup Masterclass",
      htmlbody: userHtml,
      textbody: userText,
    });

    logger.info("Valentine's user confirmation sent", { email });

    return NextResponse.json({
      success: true,
      message: 'Booking submitted successfully.',
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : JSON.stringify(error, null, 2);
    logger.error("Valentine's Day booking failed", {
      error: errMsg,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { success: false, message: 'Failed to send emails.' },
      { status: 500 },
    );
  }
}
