import { NextApiRequest, NextApiResponse } from 'next';

// pages/api/submit-form.ts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Parse the incoming form data
      const { firstName, lastName, email, message } = req.body;

      // Validate the data (optional but recommended)
      if (!firstName || !lastName || !email || !message) {
        return res
          .status(400)
          .json({ success: false, message: 'All fields are required.' });
      }

      // Simulate processing the data (e.g., save to a database or send an email)
      console.log('Received form data:', {
        firstName,
        lastName,
        email,
        message,
      });

      // Simulate a successful response
      return res
        .status(200)
        .json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error processing form submission:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    }
  } else {
    // Handle non-POST requests
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  }
}
