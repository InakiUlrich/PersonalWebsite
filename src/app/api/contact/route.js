import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST (
  req
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    try {
      const res = await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      if (res.data.success) {
        return NextResponse.json({ message: 'Email sent successfully' });
      } else {
        return NextResponse.json({ message: 'Email unsuccessful' });
      }
    } catch (error) {
        return NextResponse.json({ message: error.message || 'Failed to send email' });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' });
  }
}