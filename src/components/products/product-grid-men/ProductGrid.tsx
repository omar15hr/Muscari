"use client";

import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";
import { useState } from "react";
import styles from "@/components/filters/styles.module.scss";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  const [filters, setFilters] = useState({
    title: `all`,
    minPrice: 0,
  });

  const [minPrice, setMinPrice] = useState(0);

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.title === "all" || product.title.includes(filters.title))
      );
    });
  };

  const filteredProducts = filterProducts(products);

  const handleChangeMinPrice = (event: any) => {
    setMinPrice(event.target.value);

    setFilters((prevState: any) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeTitle = (value: string) => {
    setFilters((prevState: any) => ({
      ...prevState,
      title: value,
    }));
  };

  return (
    <div className="grid grid-col">
      <section className={styles.filters}>
        <div className="mb-10 mx-5">
          <label htmlFor="filters-price">Precio a partir de:</label>
          <input
            type="range"
            id="filters-price"
            defaultValue={0}
            min="0"
            max="300"
            className="bg-gray-300"
            onChange={handleChangeMinPrice}
          />
          <span>${filters.minPrice}</span>
        </div>

        <div className="mb-10 mr-5">
          <Select onValueChange={handleChangeTitle}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Todos los productos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="Tee">Polera</SelectItem>
              <SelectItem value="Hoodie">Poleron</SelectItem>
              <SelectItem value="Sweatshirt">Sweater</SelectItem>
              <SelectItem value="Jacket">Chaqueta</SelectItem>
              <SelectItem value="Hat">Jockey</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 mb-10">
        {filteredProducts.map((product) => (
          <ProductGridItem key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};
