import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ProductGrid } from './ProductGrid';
import { Product } from '@/interfaces';

// Mock de productos para las pruebas
const products: Product[] = [
  {
    title: 'Red Shirt', price: 20, slug: 'Red-Shirt',
    id: '',
    description: '',
    images: ['/logo/muscari-logo.jpg'],
    inStock_XS: 0,
    inStock_S: 0,
    inStock_M: 0,
    inStock_L: 0,
    inStock_XL: 0,
    inStock_XXL: 0,
    sizes: [],
    tags: [],
    gender: 'men'
  },
  {
    title: 'Blue Jacket', price: 50, slug: 'Blue-Jacket',
    id: '',
    description: '',
    images: ['/logo/muscari-logo.jpg'],
    inStock_XS: 0,
    inStock_S: 0,
    inStock_M: 0,
    inStock_L: 0,
    inStock_XL: 0,
    inStock_XXL: 0,
    sizes: [],
    tags: [],
    gender: 'men'
  },
];

describe('ProductGrid', () => {
  it('should filter products by minimum price', () => {
    render(<ProductGrid products={products} />);

    // 1. Obtener el input de rango de precio
    const priceRangeInput = screen.getByLabelText('Precio a partir de:');

    // 2. Simular un cambio en el input de rango de precio
    fireEvent.change(priceRangeInput, { target: { value: '30' } });

    // 3. Verificar que solo se muestra el producto 'Chaqueta Azul' después de aplicar el filtro
    expect(screen.queryByText('Red Shirt')).not.toBeInTheDocument();
    expect(screen.queryByText('Blue Jacket')).toBeInTheDocument();
  });

  it('should filter products by title', () => {
    render(<ProductGrid products={products} />);

    // 1. Obtener el select del título por su label "Filtrar por título:"
    const titleSelect = screen.getByLabelText('Filtrar por título:');

    // 2. Simular un cambio en el select del título a 'Chaqueta'
    fireEvent.change(titleSelect, { target: { value: 'Jacket' } });

    // 3. Verificar que solo se muestra el producto 'Chaqueta Azul' después de aplicar el filtro
    expect(screen.queryByText('Red Shirt')).not.toBeInTheDocument();
    expect(screen.queryByText('Blue Jacket')).toBeInTheDocument();
  });


});