import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

export async function POST(
    req: Request,
) {
    if (req.method === 'POST') {
        try {
            const body = await req.json();
            const { name, email, message } = body;

            const transporter = nodemailer.createTransport({
                host: process.env.IONOS_HOST,
                port: Number(process.env.PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.IONOS_USER,
                    pass: process.env.IONOS_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.IONOS_USER,
                to: process.env.IONOS_USER,
                subject: `Message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
            };

            await transporter.sendMail(mailOptions);

            return new Response(JSON.stringify('Email sent successfully'), { status: 200 });
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify('Failed to send email'), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify('Method Not Allowed'), { status: 405 });
    }
}