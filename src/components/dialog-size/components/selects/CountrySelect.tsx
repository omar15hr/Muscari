import { useState } from 'react'

const countries = [
  { id: 0, sigla: "Selecciona un tipo de talla" },
  { id: 1, sigla: "BR" },
  { id: 2, sigla: "EU" },
  { id: 3, sigla: "DE" },
  { id: 4, sigla: "SG" },
  { id: 5, sigla: "AU" },
  { id: 6, sigla: "JP" },
  { id: 7, sigla: "UK" },
  { id: 8, sigla: "IT" },
  { id: 9, sigla: "MX" },
  { id: 10, sigla: "FR" },
  { id: 11, sigla: "US" }
]

export default function CountrySelect({ onCountryChange }: any) {

  const [selected, setSelected] = useState('');

  const handleChange = (event: any) => {
    if (event === 'Selecciona un tipo de talla') return;
    
    setSelected(event);
    onCountryChange(event);
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
