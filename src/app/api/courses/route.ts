/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

// Handler for GET requests to /api/courses
export async function GET(req: NextRequest) {
  // Example: return a list of courses (mock data)

  const courses = [
    { id: 1, name: 'Introduction to TypeScript' },
    { id: 2, name: 'Advanced JavaScript' },
  ];
  return NextResponse.json(courses);
}

// Handler for POST requests to /api/courses
export async function POST(req: NextRequest) {
  const data = await req.json();
  // Example: echo back the received course data
  return NextResponse.json({ message: 'Course created', course: data });
}
