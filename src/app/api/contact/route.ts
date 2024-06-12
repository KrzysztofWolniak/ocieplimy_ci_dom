// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, tel, company, subject, message } = data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Formularz kontaktowy - ${subject}`,
      text: `
        Imię i nazwisko: ${name}
        Email: ${email}
        Telefon: ${tel}
        Firma: ${company}
        
        Wiadomość:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Wiadomość wysłana pomyślnie!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Coś poszło nie tak. Spróbuj ponownie później.' }, { status: 500 });
  }
}
