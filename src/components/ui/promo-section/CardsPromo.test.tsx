// __tests__/CardsPromo.test.tsx
import { render, screen } from '@testing-library/react';
import CardsPromo from './CardsPromo';
import '@testing-library/jest-dom';

// Mock de Next.js Image para pruebas
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) {
    return <img src={src} alt={alt} width={width} height={height} />;
  },
}));


describe('CardsPromo Component', () => {
  it('should render the product cards correctly', () => {
    render(<CardsPromo />);

    // Verifica que el título del componente esté presente
    expect(screen.getByText('Productos más vendidos')).toBeInTheDocument();

    // Verifica que todos los productos estén presentes en el DOM
    const products = [
      "Polera deportiva manga larga para hombre",
      "Chaqueta para hombre",
      "Chaqueta ligera con cierre para hombre",
      "Polera manga larga para hombre",
    ];

    products.forEach(product => {
      expect(screen.getByText(product)).toBeInTheDocument();
    });

    // Verifica que los precios de los productos estén presentes
    const prices = ["$75", "$200", "$130", "$45"];
    prices.forEach(price => {
      expect(screen.getByText(price)).toBeInTheDocument();
    });

    // Verifica que las imágenes de los productos estén presentes usando el atributo alt
    const images = [
      {
        alt: "Polera deportiva manga larga para hombre",
        src: '/products/1740176-00-A_0_2000.jpg',
      },
      {
        alt: "Chaqueta para hombre",
        src: '/products/1740507-00-A_0_2000.jpg',
      },
      {
        alt: "Chaqueta ligera con cierre para hombre",
        src: '/products/1740250-00-A_0_2000.jpg',
      },
      {
        alt: "Polera manga larga para hombre",
        src: '/products/1740280-00-A_0_2000.jpg',
      },
    ];

    images.forEach(({ alt, src }) => {
      const img = screen.getByAltText(alt) as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toContain(src);
    });
  });
});
