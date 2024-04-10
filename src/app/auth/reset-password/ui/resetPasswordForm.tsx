'use client';

import Link from "next/link";
import { useFormStatus } from "react-dom";

import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';

export const ResetPasswordForm = () => {


  return (
    <form className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-primary text-center mb-5">
        Enviar correo electrónico
      </Link>

      <Link href="/auth/login" className="btn-secondary text-center">
        Volver a Login
      </Link>
    </form>
  );
};
