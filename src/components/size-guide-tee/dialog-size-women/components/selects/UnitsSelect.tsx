import { useState } from 'react'

const countries = [
  { id: 1, sigla: "CM" },
  { id: 2, sigla: "IN" },
]

export default function UnitSelect({ onUnitChange }: any) {

  const [selected, setSelected] = useState('');

  const handleChange = (event: any) => {
    if (event === 'Selecciona un tipo de talla') return;
    
    setSelected(event);
    onUnitChange(event);
  }


  return (
    <select
      className='relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6'
      value={selected} 
      onChange={(event) => handleChange(event.target.value)}
    >
      {
        countries.map((country) => (
          <option 
            key={country.id}
            value={country.sigla}
          >
            {country.sigla}
          </option>
        ))
      }
    </select>
  )
}
