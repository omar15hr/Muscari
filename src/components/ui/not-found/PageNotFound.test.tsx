// __tests__/PageNotFound.test.jsx
import { render, screen } from '@testing-library/react';
import {PageNotFound} from './PageNotFound'; // Asegúrate de que la ruta sea correcta

describe('PageNotFound', () => {
  it('renders correctly and displays all elements', () => {
    render(<PageNotFound />);

    // Verifica que el texto '404' esté en el documento
    expect(screen.getByText('404')).toBeInTheDocument();

    // Verifica que el texto 'Whoops! Lo sentimos mucho.' esté en el documento
    expect(screen.getByText(/Whoops! Lo sentimos mucho./i)).toBeInTheDocument();

    // Verifica que el texto 'Puedes regresar al' esté en el documento
    expect(screen.getByText(/Puedes regresar al/i)).toBeInTheDocument();

    // Verifica que el enlace 'inicio' esté en el documento y apunte a la URL correcta
    const linkElement = screen.getByText(/inicio/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/');

    // Verifica que la imagen esté en el documento con los atributos correctos
    const imageElement = screen.getByAltText('Starman') as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
    
    // Verifica que el src de la imagen contiene la ruta esperada
    expect(imageElement.src).toContain('http://localhost/_next/image?url=%2Fimgs%2Fstarman_750x750.png&w=1200&q=75');

    // Verifica que la imagen tiene los atributos de tamaño correctos
    expect(imageElement).toHaveAttribute('width', '550');
    expect(imageElement).toHaveAttribute('height', '550');
  });
});
