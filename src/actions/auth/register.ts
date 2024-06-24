'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs'


export const registerUser = async( name: string, email: string, password: string ) => {


  try {
    // Creamos el usuario con prisma
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync( password ),
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })

    // Devolvemos el mensaje y el usuario correctamente
    return {
      ok: true,
      user: user,
      message: 'Usuario creado'
    }

    // Obtenemos el error en caso de
  } catch (error) {
    return {
      ok: false,
      message: 'No se pudo crear el usuario'
    }
  }
}