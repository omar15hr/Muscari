'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  const isCloudinaryUrl = (url: string) => {
    return url.startsWith('https://res.cloudinary.com/');
  };

  return (
    <motion.div 
      className="group relative rounded-lg overflow-hidden bg-background shadow-sm border border-border hover:shadow-md transition-all duration-300 fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Link href={`/product/${product.slug}`} className="block overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image
              src={isCloudinaryUrl(displayImage) ? displayImage : `/products/${displayImage}`}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
              width={500}
              height={500}
              priority={true}
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
        </Link>
      </div>

      <div className="p-4 space-y-2">
        <Link
          className="block font-medium text-foreground hover:text-primary transition-colors duration-200 line-clamp-1"
          href={`/product/${product.slug}`}
        >
          {product.title}
        </Link>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${product.price}</span>
          <motion.button 
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Add to cart"
          >
            Ver detalles
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};