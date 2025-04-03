import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import * as aws from '@aws-sdk/client-ses';

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

            // Create a SES client
            /*const ses = new SES({
                region: process.env.AWS_SMTP_REGION,
                credentials: {
                    accessKeyId: process.env.AWS_SMTP_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_SMTP_SECRET_ACCESS_KEY,
                },
                apiVersion: '2010-12-01',
                defaultProvider,
            });*/

            /*const transporter = nodemailer.createTransport({
                host: process.env.IONOS_HOST,
                port: 465,
                secure: true,
                auth: {
                    user: process.env.IONOS_USER,
                    pass: process.env.IONOS_PASSWORD,
                },
            });*/

            /*const SES_CONFIG = { 
                accessKeyId: process.env.AWS_ACCESS_KEY, 
                secretAccesskey: process.env.AWS_SECRET_ACCESS_KEY, 
                region: process.env.AWS_SES_REGION 
            };*/

            const config: aws.SESClientConfig = {
                credentials: { 
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID!, 
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
                },
                region: process.env.AWS_REGION,
            };
            const ses = new aws.SES(config);
            const transporter = nodemailer.createTransport({ SES: { ses, aws } });

            /*const transporter = nodemailer.createTransport({
                SES: {
                    ses: ses,
                    aws: {
                        region: process.env.AWS_SMTP_REGION,
                        accessKeyId: process.env.AWS_SMTP_ACCESS_KEY,
                        secretAccessKey: process.env.AWS_SMTP_SECRET_ACCESS_KEY,
                    },
                },
            });*/

            /*const transporter = nodemailer.createTransport({
                SES: {
                    aws: {
                        accessKeyId: process.env.AWS_SMTP_ACCESS_KEY,
                        secretAccessKey: process.env.AWS_SMTP_SECRET_ACCESS_KEY,
                        region: process.env.AWS_SMTP_REGION
                    }
                }
            });*/

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