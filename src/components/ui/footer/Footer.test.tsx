// __tests__/Footer.test.jsx
import { render, screen } from '@testing-library/react';
import {Footer} from './Footer'; // Asegúrate de que la ruta sea correcta

describe('Footer', () => {
  it('renders correctly and displays all elements', () => {
    render(<Footer />);

    // Verifica que el texto 'Muscari' esté en el documento
    expect(screen.getByText(/Muscari/i)).toBeInTheDocument();

    // Verifica que el texto 'Clothing' esté en el documento
    expect(screen.getByText(/Clothing/i)).toBeInTheDocument();

    // Verifica que el texto de privacidad y legal esté en el documento
    expect(screen.getByText(/Privacidad & Legal/i)).toBeInTheDocument();

    // Verifica que el texto de ubicaciones esté en el documento
    expect(screen.getByText(/Ubicaciones/i)).toBeInTheDocument();

    // Verifica que el año actual esté en el documento
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear, 'i'))).toBeInTheDocument();
  });
});
