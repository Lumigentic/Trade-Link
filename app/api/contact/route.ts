import { NextRequest, NextResponse } from 'next/server';
import { createContactSubmission } from '@/lib/supabase';

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

    // Get client info for tracking
    const ip_address = request.headers.get('x-forwarded-for') ||
                      request.headers.get('x-real-ip') ||
                      'unknown';
    const user_agent = request.headers.get('user-agent') || 'unknown';

    // Save to Supabase
    const submission = await createContactSubmission({
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      message,
      ip_address,
      user_agent,
    });

    console.log('Contact form submission saved to Supabase:', {
      id: submission.id,
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    // TODO: Optional - Send email notification via SendGrid/Resend
    // You can add email notification here later if needed

    return NextResponse.json(
      {
        message: 'Thank you for your message! We will get back to you soon.',
        success: true,
        submissionId: submission.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    // Handle Supabase specific errors
    if (error.code) {
      console.error('Supabase error code:', error.code);
      console.error('Supabase error message:', error.message);
    }

    return NextResponse.json(
      {
        error: 'Failed to submit your message. Please try again or contact us directly at enquiries@trade-link.co.uk',
        success: false,
      },
      { status: 500 }
    );
  }
}
