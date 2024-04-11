import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/utils/messages";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

interface BodyProps {
  newPassword: string;
  confirmPassword: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BodyProps = await request.json();

    const { newPassword, confirmPassword } = body;

    // Validamos que esten todos los campos
    if (!newPassword || !confirmPassword) {
      return NextResponse.json(
        { message: messages.error.needProps },
        { status: 400 }
      );
    }


    const headersList = headers();
    const token = headersList.get("token");

    // Verificar que haya token
    if (!token) {
      return NextResponse.json(
        {
          message: messages.error.notAuthorized,
        },
        {
          status: 400,
        }
      );
    }

    try {
      const isTokenValid = jwt.verify(token, "secreto");
      
      // @ts-ignore
      const { data } = isTokenValid;

      // Conseguimos al usuario por su id
      const userFind = await prisma.user.findUnique({
        where:{
          id: data.userId
        }
      });

      // Validamos que exista el usuario
      if (!userFind) {
        return NextResponse.json(
          { message: messages.error.userNotFound },
          { status: 400 }
        );
      }

      // Validamos que la nueva contraseña sea igual a la confirmacion
      if (newPassword !== confirmPassword) {
        return NextResponse.json(
          { message: messages.error.passwordsNotMatch },
          { status: 400 }
        );
      }

      const password = await bcrypt.hashSync(newPassword, 10);

      userFind.password = password;

      await prisma.user.update({
        where: {
            id: userFind.id
        },
        data: {
            password,
        }
    })

      return NextResponse.json(
        { message: messages.success.passwordChanged },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: messages.error.tokenNotValid, error },
        { status: 400 }
        
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 400 }
    );
  }
}