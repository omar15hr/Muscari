'use client';

import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';
import { useState } from 'react';
import { useFiltersStore } from '@/store';

interface Props {
  products: Product[];
}


export const ProductGrid = ({ products }: Props) => {


  const [ filters, setFilters ] = useState({
    title: `all`,
    minPrice: 0
  });

  const [ minPrice, setMinPrice ] = useState(0);


  const filterProducts = (products: Product[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.title === 'all' ||
          product.title.includes(filters.title)
        )
      )
    })
  };

  const filteredProducts = filterProducts(products);

  const handleChangeMinPrice = (event:any) => {
    setMinPrice(event.target.value);

    setFilters((prevState: any) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeTitle = (event:any) => {
    setFilters((prevState: any) => ({
      ...prevState,
      title: event.target.value
    }));
  }

  return (
    <div className='grid grid-col'>
      <section >

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
          <span>${filters.minPrice}</span>
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

      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
          filteredProducts.map(product => (
            <ProductGridItem
              key={product.slug}
              product={product}
            />
          ))
        }
      </div>
    </div>
  );
};

{/* className={styles.filters} */ }