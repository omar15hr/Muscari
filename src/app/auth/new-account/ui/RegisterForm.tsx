"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { login, registerUser } from '@/actions';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';



type FormInputs = {
  name: string;
  email: string;
  password: string;  
}



export const RegisterForm = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();




  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    
    // Server action
    const resp = await registerUser( name, email, password );

    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      toast.error('No se pudo crear el usuario');
      return;
    } else {
      toast.success('Cuenta creada exitosamente');
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');
  };


  return (
    <form onSubmit={ handleSubmit( onSubmit ) }  className="flex flex-col">

      {/* {
        errors.name?.type === 'required' && (
          <span className="text-red-500">* El nombre es obligatorio</span>
        )
      } */}


      <label htmlFor="email">Nombre completo</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-300 rounded mb-5",
            {
              'border-red-500': errors.name
            }
          )
        }
        type="text"
        autoFocus
        { ...register('name', { required: true }) }
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-300 rounded mb-5",
            {
              'border-red-500': errors.email
            }
          )
        }
        type="email"
        { ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-300 rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        type="password"
        { ...register('password', { required: true, minLength: 6 }) }
      />
        
      

      <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
        Volver a inicio de sesión
      </Link>

      <Toaster />
    </form>
  );
};
