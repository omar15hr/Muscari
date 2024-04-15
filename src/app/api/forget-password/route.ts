import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import jwt from 'jsonwebtoken';
import { EmailTemplate } from "@/components";
import prisma from "@/lib/prisma";
import { messages } from "@/utils/messages";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: { email: string } = await request.json();

    const { email } = body;

    const userFind = await prisma.user.findUnique({
      where: {
        email
      }
    });

    // Validar que exista el usuario
    if (!userFind) {
      return NextResponse.json(
        { message: messages.error.userNotFound },
        { status: 400 }
      );
    }

    const tokenData = {
      email: userFind.email,
      userId: userFind.id,
    };

    const token = jwt.sign({ data: tokenData }, "secreto", {
      expiresIn: 86400,
    });

    const forgetUrl = `http://localhost:3000/auth/change-password?token=${token}`;

    // @ts-ignore
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: "Cambio de Contraseña",
      react: EmailTemplate({ buttonUrl: forgetUrl }),
    });

    return NextResponse.json(
      { message: messages.success.emailSent },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 500 }
    );
  }
}