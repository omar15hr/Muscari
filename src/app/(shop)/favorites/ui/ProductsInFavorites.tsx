'use client';
import { useEffect, useState } from 'react';

import { useFavoriteStore } from '@/store';
import { ProductImage, QuantitySelector } from '@/components';
import Link from 'next/link';



export const ProductsInFavorites = () => {

  const removeProduct = useFavoriteStore( state => state.removeProduct );

  const [loaded, setLoaded] = useState(false);
  const productsInFavorites = useFavoriteStore( state => state.favorite );


  // useEffect(() => {
  //   setLoaded(true) ;
  // }, []);




  if( !loaded ) {
    return <p>Loading...</p>
  }

  return (
    <div className='grid grid-cols- sm:grid-cols-3 gap-10 mb-10'>
      {productsInFavorites.map((product) => (
        <div key={ `${ product.slug }`  } className="relative w-80 rounded-xl bg-gray-100 bg-clip-border text-gray-600 shadow-md">
          <ProductImage
            src={ product.image }
            width={200}
            height={200}
            style={{
              width: "200px",
              height: "200px",
              marginLeft: '60px'}}
            alt={product.title}
            className="relative mx-5 mt-5 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          />

          <div className='mt-5 p-6 text-center'>
            <Link 
              className="hover:underline cursor-pointer mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
              href={ `/product/${ product.slug } ` }>
                {product.title}
            </Link>

            
          </div>
        </div>
      ))}
    </div>
  );
};
