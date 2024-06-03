import { render, fireEvent } from '@testing-library/react';
import { QuantitySelector } from './QuantitySelector';

describe('QuantitySelector component', () => {
  test('increments and decrements quantity correctly', () => {
    const mockOnQuantityChanged = jest.fn();
    const { getByLabelText, getByText } = render(
      <QuantitySelector quantity={3} onQuantityChanged={mockOnQuantityChanged} />
    );

    // Verificar que la cantidad inicial es 3
    expect(getByText('3')).toBeInTheDocument();

    // Simular hacer clic en el botón de incremento
    fireEvent.click(getByLabelText('Increment'));
    expect(mockOnQuantityChanged).toHaveBeenCalledWith(4);

    // Simular hacer clic en el botón de decremento
    fireEvent.click(getByLabelText('Decrement'));
    expect(mockOnQuantityChanged).toHaveBeenCalledWith(2);
  });
});
