'use client'

import { Form } from '@/components/form';
import { useAuthFetch } from '@/hooks/useAuthFetch';
import { useLoading } from '@/hooks/useLoading';
import { Toaster, toast } from 'sonner';
import { checkEmailExists } from '@/actions';

export default function ResetPasswordForm() {

  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }


  const forgetPassword = async (formData: any) => {

    if (!formData.email) {
      toast.error('Por favor ingresa tu correo electrónico');
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error('Por favor ingresa un correo electrónico válido');
      return;
    }

    startLoading();

    try {
      // Verificar si el correo existe en la base de datos usando Prisma
      const emailExists = await checkEmailExists(formData.email);

      if (!emailExists) {
        toast.error('El correo electrónico ingresado no está registrado');
        return;
      }

      // Si el correo existe, proceder con el envío de la solicitud de recuperación de contraseña
      await authFetch({
        endpoint: 'forget-password',
        formData
      });
      toast.success('Correo enviado exitosamente');
    } catch (error) {
      toast.error(`Error`);
    } finally {
      finishLoading();
    }
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
          description=''
          textLink='Volver a inicio de sesión'
          link='/auth/login'
        />
      </Form>
      <Toaster />
    </>
  )
}