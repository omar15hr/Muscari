import { Loader } from "@/components/loader";


interface SubmitButtonProps {
  buttonText: string
  isLoading?: boolean
}

export function SubmitButton ({ buttonText, isLoading }: SubmitButtonProps) {

  return (
    <button 
      type='submit' 
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : buttonText}
    </button>
  )
}