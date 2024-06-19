import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';
import Link from 'next/link';

export default function NewAccountPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Nueva cuenta</h1>

      <RegisterForm />
      <Link href='/' className='text-center mt-5 hover:underline mb-5'>Volver al inicio</Link>
    </div>
  );
}