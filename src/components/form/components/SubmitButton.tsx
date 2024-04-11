import { Loader } from "@/components/loader";


interface SubmitButtonProps {
  buttonText: string
  isLoading?: boolean
}

export function SubmitButton ({ buttonText, isLoading }: SubmitButtonProps) {



  return (
    <button 
      type='submit' 
      className="btn-primary my-5" 
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : buttonText}
    </button>
  )
}