'use client'

import { Form } from '@/components/form';
import { useAuthFetch } from '@/hooks/useAuthFetch';
import { useLoading } from '@/hooks/useLoading';

export default function ResetPasswordForm() {

  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();


  const forgetPassword = async (formData: any) => {
    startLoading();
    await authFetch({
      endpoint: 'forget-password',
      formData
    });
    finishLoading();
  }

  return (
    <>
      <Form
        title=''
        description='Ingresa el correo de tu cuenta'
        onSubmit={forgetPassword}
      >
        <div className='my-[8px] flex flex-col gap-4'>
          <Form.Input
            label='Correo electrónico:'
            name='email'
            placeholder='Ingresa tu correo...'
          />
        </div>
        <Form.SubmitButton
          buttonText='Recuperar Contraseña'
          isLoading={isLoading}
        />
        <Form.Footer
          description='Volver al inicio'
          textLink='Inicio'
          link='/auth/login'
        />
      </Form>
    </>
  )
}