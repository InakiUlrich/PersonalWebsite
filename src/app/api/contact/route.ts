import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export async function POST (
  req: NextApiRequest
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      name: 'http://localhost:3000/contact',
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'inaki.ulrich@outlook.com',
        pass: 'Lilblue89!',
      },
    });

    try {
      const res = await transporter.sendMail({
        from: 'inaki.ulrich@outlook.com',
        to: 'inaki.ulrich@gmail.com',
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      if (res.data.success) {
        return NextResponse.json({ message: 'Email sent successfully' });
      } else {
        return NextResponse.json({ message: 'Email unsuccessful' });
      }
      //return NextResponse.json({ message: 'Email sent successfully' });
      //res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || 'Failed to send email' });
      //res.status(500).json({ message: error.message || 'Failed to send email' });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' });
    //res.status(405).json({ message: 'Method Not Allowed' });
  }
}