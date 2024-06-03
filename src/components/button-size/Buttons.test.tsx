import { render, fireEvent } from '@testing-library/react';
import { Buttons } from './Buttons';

describe('Buttons', () => {
  it('renders buttons correctly', () => {
    const { getByText } = render(<Buttons onTypeOfMeasur={() => {}} />);
    expect(getByText('Medidas del Producto')).toBeInTheDocument();
    expect(getByText('Medidas del Cuerpo')).toBeInTheDocument();
  });

  it('calls onTypeOfMeasur with the correct argument when buttons are clicked', () => {
    const mockOnTypeOfMeasur = jest.fn();
    const { getByText } = render(<Buttons onTypeOfMeasur={mockOnTypeOfMeasur} />);

    fireEvent.click(getByText('Medidas del Producto'));
    expect(mockOnTypeOfMeasur).toHaveBeenCalledWith('product');

    fireEvent.click(getByText('Medidas del Cuerpo'));
    expect(mockOnTypeOfMeasur).toHaveBeenCalledWith('body');
  });

  it('toggles button styles correctly on click', () => {
    const { getByText } = render(<Buttons onTypeOfMeasur={() => {}} />);
    const buttonProduct = getByText('Medidas del Producto');
    const buttonBody = getByText('Medidas del Cuerpo');

    // Initial styles
    expect(buttonProduct).toHaveClass('bg-blue-200');
    expect(buttonBody).toHaveClass('bg-blue-800');

    // Click on "Medidas del Producto"
    fireEvent.click(buttonProduct);
    expect(buttonProduct).toHaveClass('bg-blue-800');
    expect(buttonBody).toHaveClass('bg-blue-200');

    // Click on "Medidas del Cuerpo"
    fireEvent.click(buttonBody);
    expect(buttonProduct).toHaveClass('bg-blue-200');
    expect(buttonBody).toHaveClass('bg-blue-800');
  });
});
