'use client';

import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';
import { useState } from 'react';
import { Filters } from '@/components/filters/Filters';

interface Props {
  products: Product[];
}


export const ProductGrid = ( { products }: Props ) => {

  const [ filters, setFilters ] = useState({
    title: `all`,
    minPrice: 0
  });


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

  return (
    <div className='grid grid-col'>
        <Filters onChangeFilters={setFilters} />
      <h1 className='text-center mb-6'>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
          filteredProducts.map( product => (
            <ProductGridItem
              key={ product.slug }
              product={ product }
            />
          ) )
        }

      </div>
    </div>
  );
};