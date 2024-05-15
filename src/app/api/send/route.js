import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;

  // Check if environment variables are defined
  if (!apiKey || !fromEmail) {
    console.error('Environment variables RESEND_API_KEY or FROM_EMAIL are not defined.');
    return NextResponse.json({ error: 'Environment variables not defined' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { email, subject, message } = await req.json();

    console.log('Sending email to:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us! I'll get back to you as soon as possible!</p>
          <br />
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }
}
