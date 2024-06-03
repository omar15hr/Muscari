import { render, screen } from '@testing-library/react';
import FirstPromo from './FirstPromo';

describe('FirstPromo Component', () => {
  it('should render the component correctly', () => {
    render(<FirstPromo />);

    // Verifica que el título esté presente
    expect(screen.getByText('Los estilos de verano ya están aquí')).toBeInTheDocument();

    // Verifica que el texto descriptivo esté presente
    expect(screen.getByText('Enfrenta los elementos con estilo este verano con nuestra nueva colección. Regístrate y adquiere nuestros diseños.')).toBeInTheDocument();

    // Verifica que el botón de registro esté presente
    expect(screen.getByText('Regístrate ya')).toBeInTheDocument();

    // Verifica que las imágenes estén presentes usando el atributo alt
    const images = [
      {
        alt: "",
        src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
      },
      {
        alt: "",
        src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
      },
      // Agrega los objetos para las otras imágenes
    ];
    
  });
});
