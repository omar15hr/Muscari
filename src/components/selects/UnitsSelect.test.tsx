import { render, fireEvent, screen } from '@testing-library/react';
import UnitSelect from './UnitsSelect'; 

describe('UnitSelect component', () => {
  test('renders select options correctly', () => {
    render(<UnitSelect />);
    
    // Verifica que el componente esté presente en el documento
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    
    // Verifica que las opciones del select estén presentes y sean las correctas
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2); // Cambiado a 2 para reflejar la cantidad correcta de opciones
    
    // Verifica que las opciones coincidan con las del array countries
    const countrySiglas = ['CM', 'IN'];
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(countrySiglas[index]);
    });
  });

  test('calls onUnitChange callback when a unit is selected', () => {
    const mockOnUnitChange = jest.fn();
    render(<UnitSelect onUnitChange={mockOnUnitChange} />);

    // Simula seleccionar una unidad
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'IN' } });

    // Verifica que se haya llamado a la función onUnitChange con el valor correcto
    expect(mockOnUnitChange).toHaveBeenCalledWith('IN');
  });
});
