import { create } from "zustand";

interface FilterState {
  title: string;
  minPrice: number;
}


export const useFiltersStore = create<FilterState>((set) => ({
    
  title: 'all',
  minPrice: 0,
}));