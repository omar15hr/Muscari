import { create } from 'zustand';

interface useFiltersState {
    filters: {
      // title: string,
      minPrice: number
    };
    setFilters: ( newMinPrice: number) => void;
  }
  
  export const useFiltersStore = create<useFiltersState>((set) => ({
    filters: {
      minPrice: 0
    },  
    setFilters: ( newMinPrice ) => set({ filters:{ minPrice: newMinPrice } }),
  }));