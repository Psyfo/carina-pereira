import { NextResponse } from 'next/server';

// app/api/subscribe/route.ts

export async function POST(req: Request) {
  const { fullName, email } = await req.json();

  if (!email || !fullName) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
    return NextResponse.json(
      { message: 'Missing Mailchimp env vars' },
      { status: 500 }
    );
  }

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed', // or "pending" for double opt-in
    merge_fields: {
      FNAME: fullName, // Make sure your audience has this merge field set up
    },
  };

  const auth = Buffer.from(`anystring:${API_KEY}`).toString('base64');

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.status === 200 || res.status === 201) {
      return NextResponse.json({ message: 'Successfully subscribed!' });
    } else if (json.title === 'Member Exists') {
      return NextResponse.json(
        { message: "You're already subscribed." },
        { status: 200 }
      );
    } else {
      console.error('Mailchimp error:', json);
      return NextResponse.json(
        { message: json.detail ?? 'Mailchimp error' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
