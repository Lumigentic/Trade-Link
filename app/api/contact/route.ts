import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission (in production, you can add SendGrid/Resend here)
    console.log('Contact form submission received:', {
      name,
      email,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    // TODO: Add email service integration (SendGrid, Resend, etc.)
    // For now, we'll just log and return success

    return NextResponse.json(
      {
        message: 'Thank you for your message! We will get back to you soon at ' + email,
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Failed to submit your message. Please contact us directly at enquiries@trade-link.co.uk',
        success: false,
      },
      { status: 500 }
    );
  }
}
