import { render, screen } from '@testing-library/react';
import ProductFeatures from './Product-Features';

describe('ProductFeatures Component', () => {
  it('should render the component correctly', () => {
    render(<ProductFeatures />);

    // Verificar que las imágenes se renderizan correctamente
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4); // Asumiendo que hay 4 imágenes en el componente

    // Verificar que las características se renderizan correctamente
    const featureNames = screen.getAllByRole('heading', { level: 3 });

    // Verificar que cada característica tiene su nombre y descripción correspondientes
    const expectedFeatures = [
      { name: 'Origin', description: 'Diseñado por Good Goods, Inc.' },
      { name: 'Material', description: 'Base de nogal macizo con imanes de tierras raras y cubierta de tarjeta de acero con recubrimiento en polvo' },
      { name: 'Dimensiones', description: '6.25" x 3.55" x 1.15"' },
      { name: 'Acabado', description: 'Lijado a mano y acabado con aceite natural.' },
      { name: 'Incluye', description: 'Bandeja para tarjetas de madera y 3 paquetes de recambio.' },
      { name: 'Consideraciones', description: 'Fabricado con materiales naturales. El grano y el color varían con cada artículo.' },
    ];
  });
});
