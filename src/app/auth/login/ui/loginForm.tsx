'use client';


import { authenticate } from "@/actions";
import { Toaster, toast } from 'sonner';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from "react-dom";
import clsx from 'clsx';
import Link from "next/link";




export const LoginForm = () => {

  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if ( state === 'Success' ) {
      window.location.replace('/');
    }

  },[state]);


  state === "CredentialsSignin" && (toast.error('Credenciales no son correctas'))

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-300 rounded mb-5"
        type="email"
        name="email"
        placeholder='Ingrese su correo electrónico'
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-300 rounded mb-5"
        type="password"
        name="password"
        placeholder='Ingrese su contraseña'
      />

      <Link 
        href="/auth/reset-password" 
        className="text-center hover:underline decoration-1 underline-offset-2'"
      >
        ¿Olvidaste tu contraseña?
      </Link>

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        
      </div>

        <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 text-center">
        Crear una nueva cuenta
      </Link>

      <Toaster />

    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      className={ clsx({
        "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600": !pending,
        "flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600": pending
      })}
      disabled={ pending }
      >
      Ingresar
    </button>
  );
}