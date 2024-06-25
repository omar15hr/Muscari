'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return !!user; // Devuelve true si se encontró un usuario con ese correo electrónico
  } catch (error) {
    console.error('Error al verificar el correo electrónico:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
