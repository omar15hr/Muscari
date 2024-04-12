import { useState } from "react";
import styles from "./styles.module.scss";

export function Filters({onChangeFilters}:any) {

  const [ minPrice, setMinPrice ] = useState(0);

  const handleChangeMinPrice = (event:any) => {
    setMinPrice(event.target.value);

    onChangeFilters((prevState: any) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeTitle = (event:any) => {
    onChangeFilters((prevState: any) => ({
      ...prevState,
      title: event.target.value
    }));
  }

  return (
    <section className={styles.filters}>

      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input 
          type='range'
          id='filters-price'
          min='0'
          max='300'
          className="bg-gray-300"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="title">Título</label>
        <select id="filters-title" className="bg-gray-200" onChange={handleChangeTitle} >
          <option className="bg-gray-300" value="all">Todos</option>
          <option className="bg-gray-300" value="Shirts">Shirts</option>
          <option className="bg-gray-300" value="Hoodie">Hoodie</option>
          <option className="bg-gray-300" value="Jacket">Jacket</option>
          <option className="bg-gray-300" value="Hat">Hat</option>
        </select>
      </div>
    </section> 
  )
}