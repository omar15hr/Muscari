import type { FavoriteProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  favorite: FavoriteProduct[];

  getTotalItems: () => number;
  addProductToFavorites: (product: FavoriteProduct) => void;
  removeProduct: (product: FavoriteProduct) => void;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<State>()(
  persist(
    (set, get) => ({
      favorite: [],

      // Methods
      getTotalItems: () => {
        const { favorite } = get();
        return favorite.reduce((total, item) => total, 0);
      },

      addProductToFavorites: (product: FavoriteProduct) => {
        const { favorite } = get();

        // 1. Revisar si el producto existe en el carrito con la talla seleccionada
        const productInFavorite = favorite.some(
          (item) => item.id === product.id
        );

        if (!productInFavorite) {
          set({ favorite: [...favorite, product] });
          return;
        }

        // 2. Se que el producto existe por talla... tengo que incrementar
        const updatedFavoriteProducts = favorite.map((item) => {
          if (item.id === product.id ) {
            return { ...item };
          }

          return item;
        });

        set({ favorite: updatedFavoriteProducts });
      },

      removeProduct: (product: FavoriteProduct) => {
        const { favorite } = get();
        const updatedFavoriteProducts = favorite.filter(
          (item) => item.id !== product.id
        );

        set({ favorite: updatedFavoriteProducts });
      },

      clearFavorites: () => {
        set({ favorite: [] });
      },
    }),

    {
      name: "shopping-favorite",
    }
  )
);
