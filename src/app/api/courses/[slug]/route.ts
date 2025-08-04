/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

// Handler for GET requests to fetch course details by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // TODO: Fetch course details from your data source using the slug
  // Example placeholder response
  const course = {
    slug,
    title: 'Sample Course',
    description: 'This is a sample course description.',
  };

  return NextResponse.json(course);
}

// Handler for other HTTP methods (optional)
export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // TODO: Implement POST logic if needed
  return NextResponse.json(
    { message: 'POST not implemented' },
    { status: 405 }
  );
}
