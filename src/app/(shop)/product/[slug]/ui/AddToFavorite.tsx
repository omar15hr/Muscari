"use client";

import { useState } from "react";

import type { FavoriteProduct, Product, Size } from "@/interfaces";
import { useFavoriteStore } from '@/store';
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  product: Product;
}

export const AddToFavorite = ({ product }: Props) => {

  const addProductToFavorites = useFavoriteStore(state => state.addProductToFavorites);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToFavorite = () => {
    setPosted(true);


    const favoriteProduct: FavoriteProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      image: product.images[0]
    }

    addProductToFavorites(favoriteProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);


  };


  return (
    <>
      {/* Button para favoritos */}
      <button onClick={addToFavorite} className="flex w-30 justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5">
        <IoHeartOutline size={20} /> <span className="mx-2">Agregar a Favoritos</span>
      </button>
    </>
  );
};






