'use client';

import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';
import { useState } from 'react';

import styles from "@/components/filters/styles.module.scss";

interface Props {
  products: Product[];
}


export const ProductGrid = ({ products }: Props) => {


  const [filters, setFilters] = useState({
    title: `all`,
    minPrice: 0
  });

  const [minPrice, setMinPrice] = useState(0);


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

  const handleChangeMinPrice = (event: any) => {
    setMinPrice(event.target.value);

    setFilters((prevState: any) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeTitle = (event: any) => {
    setFilters((prevState: any) => ({
      ...prevState,
      title: event.target.value
    }));
  }

  return (
    <div className='grid grid-col'>
      <section className={styles.filters} >

        <div className='mb-10'>
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

        <div className='mb-10'>
          <select id="filters-title" className='btn btn-secondary dropdown-toggle' onChange={handleChangeTitle} >
            <option value="all">Todos</option>
            <option value="Polera">Polera</option>
            <option value="Poleron">Poleron</option>
            <option value="Chaqueta">Chaqueta</option>
            <option value="Jockey">Jockey</option>
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