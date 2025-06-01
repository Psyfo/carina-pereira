import { NextResponse } from 'next/server';

const IG_API_URL =
  process.env.NEXT_PUBLIC_IG_GRAPH_API_URL ?? 'https://graph.facebook.com';
const IG_API_VERSION = process.env.NEXT_PUBLIC_IG_GRAPH_API_VERSION ?? 'v23.0';
const IG_ACCOUNT_ID = process.env.IG_ACCOUNT_ID!;
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN!;
const MEDIA_FIELDS =
  process.env.NEXT_PUBLIC_IG_GRAPH_API_MEDIA_FIELDS ??
  'id,media_type,media_url,thumbnail_url,permalink,timestamp,caption';

export async function GET() {
  try {
    const url = `${IG_API_URL}/${IG_API_VERSION}/${IG_ACCOUNT_ID}/media?fields=${MEDIA_FIELDS}&access_token=${IG_ACCESS_TOKEN}`;

    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch Instagram feed' },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Optionally limit number of posts sent to client, e.g., top 20
    const media = data.data?.slice(0, 20) ?? [];

    return NextResponse.json({ media });
  } catch (error) {
    console.error('Instagram API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
