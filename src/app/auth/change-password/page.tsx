
import { titleFont } from '@/config/fonts';
import ChangePasswordForm from './ui/ChangePasswordForm';


export default function ChangePasswordPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Cambio de contraseña</h1>
      <ChangePasswordForm />

    </div>
  );
}