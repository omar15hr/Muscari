
import { titleFont } from '@/config/fonts';
import ContactForm from './ui/ContactForm';


export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className={ `${ titleFont.className } text-4xl mb-10` }>Formulario de contacto</h1>
      <ContactForm />

    </div>
  );
}