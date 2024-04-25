'use client';



import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, mappedPlans } from "../validations/userSchema";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { Toaster, toast } from 'sonner';



type Inputs = {
  name: string;
  lastName: string;
  email: string;
  contactReason: string;
  comment: string;
};



export default function ContactForm() {

  const authFetch = useAuthFetch();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const contactReasons = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={key} className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      {value}
    </option>
  ));

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {

    await authFetch({
      endpoint: 'contact',
      formData
    });

    if(formData) {
      toast.success('Ticket de contacto enviado exitosamente');
    }

  };



  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12 mt-3">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Ticket de contacto</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Envía la información de contacto. Nosotros responderemos a la brevedad
            </p>

          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Información del usuario</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="block w-80 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.name?.message && <p className="text-sm mt-2 text-red-500">{errors.name?.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    className="block w-80 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.lastName?.message && <p className="text-sm mt-2 text-red-500">{errors.lastName?.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && <p className="text-sm mt-2 text-red-500">{errors.email?.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Motivo de contacto
                </label>
                <div className="mt-2">
                  <select
                    id="contactReason"
                    {...register("contactReason")}
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {contactReasons}
                  </select>
                  {errors.contactReason?.message && <p className="text-sm mt-2 text-red-500">{errors.contactReason?.message}</p>}
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Comentarios.
                </label>
                <div className="mt-2">
                  <textarea
                    id="comment"
                    rows={7}
                    maxLength={300}
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    {...register("comment")}
                  />
                  {errors.comment?.message && <p className="text-sm mt-2 text-red-500">{errors.comment?.message}</p>}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Describe tu consulta.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>

      <Toaster />
    </div>
  )
}