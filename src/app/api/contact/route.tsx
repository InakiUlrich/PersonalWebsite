/* eslint-disable */
import cors from 'cors';
import express from 'express';
import { SESClient, SendEmailCommand, SendEmailCommandInput } from "@aws-sdk/client-ses";

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

            const sesClient = new SESClient({
                region: process.env.AWS_REGION,
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
                },
            });

            const params: SendEmailCommandInput = {
                Destination: {
                    ToAddresses: [process.env.GMAIL_USER!],
                },
                Message: {
                    Body: {
                        Html: {
                            Data: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
                        },
                    },
                    Subject: {
                        Data: `Message from ${name}`,
                    },
                },
                Source: process.env.IONOS_USER!,
            };

            async function sendEmail() {
                try {
                    const command = new SendEmailCommand(params);
                    const response = await sesClient.send(command);
                    console.log("Email sent successfully:", response);
                } catch (error) {
                    console.error("Error sending email:", error);
                }
            }

            await sendEmail();

            return new Response(JSON.stringify('Email sent successfully'), { status: 200 });
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify('Failed to send email'), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify('Method Not Allowed'), { status: 405 });
    }
}