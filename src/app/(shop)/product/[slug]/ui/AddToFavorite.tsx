"use client";

import { useState } from "react";

import type { FavoriteProduct, Product, Size } from "@/interfaces";
import { useFavoriteStore } from '@/store';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface Props {
  product: Product;
}

export const AddToFavorite = ({ product }: Props) => {

  const addProductToFavorites = useFavoriteStore(state => state.addProductToFavorites);
  const removeProductToFavorites = useFavoriteStore(state => state.removeProduct);
  const productsInFavorites = useFavoriteStore(state => state.favorite);



  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  let selectProductInFavorite = productsInFavorites.filter((favorite) => favorite.id === product.id);
  let uniqueProductInFavorite = selectProductInFavorite[0];

  // Función para añadir el favorito
  const addToFavorite = () => {
    setPosted(true);

    const favoriteProduct: FavoriteProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    }

    addProductToFavorites(favoriteProduct);


    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };



  // Función para remover el favorito
  const removeToFavorite = () => {
    setPosted(true);

    const favoriteProduct: FavoriteProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    }

    removeProductToFavorites(favoriteProduct);


    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };




  return (
    <>
      {
        productsInFavorites.includes(uniqueProductInFavorite)
          ? <button onClick={removeToFavorite} className="flex w-30 justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5">
          <IoHeartSharp size={20} /> <span className="mx-2">Quitar de favoritos</span>
        </button>
        : <button onClick={addToFavorite} className="flex w-30 justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5">
        <IoHeartOutline size={20} /> <span className="mx-2">Agregar a favoritos</span>
      </button>
      }
    </>
  );
};

