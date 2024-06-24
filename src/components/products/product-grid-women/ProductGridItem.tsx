'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

   // Proveer una URL por defecto si product.images[0] es undefined
   const defaultImage = '/imgs/placeholder.jpg';
   const initialImage = product.images[0] || defaultImage;

  const [ displayImage, setDisplayImage ] = useState(initialImage);

  const isCloudinaryUrl = (url: string) => {
    return url.startsWith('https://res.cloudinary.com/');
  };


  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `/product/${ product.slug }` }>
        <Image
          src={isCloudinaryUrl(displayImage) ? displayImage : `/products/${displayImage}`}
          alt={ product.title }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
          priority={true}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
        <span className="font-bold">${ product.price }</span>
      </div>

    </div>
  );
};