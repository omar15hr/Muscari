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
    <select value={selected} onChange={(event) => handleChange(event.target.value)}>
      {
        countries.map((country) => (
          <option key={country.id} value={country.sigla}>
            {country.sigla}
          </option>
        ))
      }
    </select>
  )
}
