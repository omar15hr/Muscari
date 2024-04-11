import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/utils/messages";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const userFind = await prisma.user.findMany({
      orderBy: {
        name: 'desc'
      }
    });

    return NextResponse.json({ userFind }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 500 }
    );
  }
}