
import { titleFont } from '@/config/fonts';
import ContactForm from './ui/ContactForm';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="p-2 mx-4 mb-4 text-black self-start">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-lg">
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg">formulario de contacto</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className={ `${ titleFont.className } text-4xl mb-10` }>Formulario de contacto</h1>
      <ContactForm />

    </div>
  );
}