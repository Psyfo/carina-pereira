import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET() {
  try {
    const res = await fetch(
      'https://rsshub.app/instagram/user/carinapereirainternational'
    );
    const data = await res.json();

    // Extract images from RSS feed
    const images = data.items.map((item: any) => item.enclosure.url);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error fetching Instagram images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram images' },
      { status: 500 }
    );
  }
}
