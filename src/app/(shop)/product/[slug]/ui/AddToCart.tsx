"use client";

import { useState } from "react";

import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { IoCartOutline } from "react-icons/io5";
import { Toaster, toast } from "sonner";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  let productByStock =
    size === "XS"
      ? product.inStock_XS
      : size === "S"
      ? product.inStock_S
      : size === "M"
      ? product.inStock_M
      : size === "L"
      ? product.inStock_L
      : size === "XL"
      ? product.inStock_XL
      : size === "XXL"
      ? product.inStock_XXL
      : "";

  const addToCart = () => {
    setPosted(true);

    if (!size) return;
    if (productByStock === 0) {
      toast.error("Este producto no tiene sufiente inventario");
    }
    if (productByStock === 0) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {size ? (
        <span className="font-bold mb-4">{`Stock para la talla ${size}: ${productByStock}`}</span>
      ) : (
        ""
      )}

      {posted && !size && (
        <span className="mt-2 font-bold text-xl text-red-500 fade-in">
          Debe de seleccionar una talla
        </span>
      )}

      {/* Selector de Tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Button para carrito */}
      <button
        onClick={addToCart}
        className="flex w-30 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5"
      >
        <IoCartOutline size={20} />{" "}
        <span className="mx-2">Agregar al carrito</span>
      </button>

      <Toaster />
    </>
  );
};
