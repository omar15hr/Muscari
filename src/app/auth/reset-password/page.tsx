import { ResetPasswordForm } from "./ui/resetPasswordForm";
import { titleFont } from '@/config/fonts';


export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

    <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Cambio de contraseña</h1>

      <ResetPasswordForm />
    </div>
  );
}