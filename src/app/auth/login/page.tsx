
import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/loginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32">

      <h1 className={ `${ titleFont.className } text-4xl mb-5 text-center` }>Ingresar</h1>

      <LoginForm />
      <Link href='/' className='text-center mt-5 hover:underline'>Volver a la página principal</Link>
    </div>
  );
}