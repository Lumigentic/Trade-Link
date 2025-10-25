import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
    // For now, log the form submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    /*
    DEPLOYMENT NOTE: To enable email functionality, add one of these integrations:

    Option 1 - SendGrid:
    npm install @sendgrid/mail
    Set SENDGRID_API_KEY in .env.local

    Option 2 - Nodemailer:
    npm install nodemailer
    Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS in .env.local

    Option 3 - Resend:
    npm install resend
    Set RESEND_API_KEY in .env.local

    See implementation examples in the comments below.
    */

    // SendGrid Example:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'info@trade-link.co.uk',
    //   from: 'noreply@trade-link.co.uk',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
