import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailContent = {
      to: process.env.CONTACT_EMAIL || 'enquiries@trade-link.co.uk',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@trade-link.co.uk',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2B8A99, #005B97); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #2B8A99; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #E6A636; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📧 New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0;">Trade-Link Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                ${company ? `<div class="field"><span class="label">Company:</span> ${company}</div>` : ''}
                ${phone ? `<div class="field"><span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a></div>` : ''}
                <div class="field">
                  <span class="label">Message:</span>
                  <p style="background: white; padding: 15px; border-left: 4px solid #2B8A99; margin: 10px 0;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="footer">
                  <p>Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
                  <p>Reply directly to this inquiry at: <a href="mailto:${email}">${email}</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}

Message:
${message}

---
Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
      `,
    };

    // Send email via SendGrid
    await sgMail.send(emailContent);

    console.log('Contact form email sent successfully:', {
      to: emailContent.to,
      from: name,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Message sent successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    // Handle SendGrid specific errors
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
