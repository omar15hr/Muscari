
import { titleFont } from '@/config/fonts';
import { ResetPasswordForm } from './ui/ResetPasswordForm';


export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

    <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Cambio de contraseña</h1>

  
    <ResetPasswordForm />
    <p className="my-5">Ingresa tu correo electrónico para recibir información del cambio de contraseña.</p>
    </div>
  );
}