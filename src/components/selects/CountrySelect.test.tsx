import { render, fireEvent, screen } from '@testing-library/react';
import CountrySelect from './CountrySelect';

describe('CountrySelect component', () => {
  test('renders select options correctly', () => {
    render(<CountrySelect />);
    
    // Verifica que el componente esté presente en el documento
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    
    // Verifica que las opciones del select estén presentes y sean las correctas
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(12); // Verifica que haya 12 opciones
    
    // Verifica que la primera opción sea "Selecciona un tipo de talla"
    expect(options[0]).toHaveTextContent('Selecciona un tipo de talla');
    
    // Verifica que las opciones restantes coincidan con las del array countries
    const countrySiglas = ['BR', 'EU', 'DE', 'SG', 'AU', 'JP', 'UK', 'IT', 'MX', 'FR', 'US'];
    options.slice(1).forEach((option, index) => {
      expect(option).toHaveTextContent(countrySiglas[index]);
    });
  });

  test('calls onCountryChange callback when a country is selected', () => {
    const mockOnCountryChange = jest.fn();
    render(<CountrySelect onCountryChange={mockOnCountryChange} />);

    // Simula seleccionar un país
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'US' } });

    // Verifica que se haya llamado a la función onCountryChange con el valor correcto
    expect(mockOnCountryChange).toHaveBeenCalledWith('US');
  });
});
