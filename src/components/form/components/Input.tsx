'use client'

import { useContext } from 'react'
import { FormContext } from '..'

interface InputProps {
  type?: 'text' | 'password'
  name: string
  label: string
  placeholder?: string
}

export function Input ({ label, name, placeholder, type }: InputProps) {
  const { formValues, setFormValues } = useContext(FormContext)!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  };

  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formValues[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
        className="block w-full mb-5 rounded-md border-0 py-2 pl-7 bg-gray-300 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  )
}