import clsx from "clsx";
import { useFormStatus } from "react-dom";


export function SubmitButton () {

  const { pending } = useFormStatus();


  return (
    <button type='submit' className={ clsx({
      "btn-primary my-5": !pending,
      "btn-disabled my-5": pending
    })}
    >
      Recuperar contraseña
    </button>
  )
}