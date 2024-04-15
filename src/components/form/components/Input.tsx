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
  const { formValues, setFormValues } = useContext(FormContext)!

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formValues[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
        className="px-5 py-2 border bg-gray-300 rounded"
      />
    </div>
  )
}