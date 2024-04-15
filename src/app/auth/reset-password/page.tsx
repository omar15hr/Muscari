
import { titleFont } from '@/config/fonts';
import ResetPasswordForm from './ui/ResetPasswordForm';


export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Correo de recuperación</h1>
      <ResetPasswordForm />

    </div>
  );
}