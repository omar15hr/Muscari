import { render, fireEvent } from '@testing-library/react';
import { SizeSelector } from './SizeSelector';
import { Size } from '@/interfaces';

describe('SizeSelector component', () => {
  test('displays size buttons and calls onSizeChanged correctly', () => {
    // Tamaño seleccionado y tallas disponibles
    const selectedSize = 'M';
    const availableSizes: Size[] = ['S', 'M', 'L', 'XL', 'XXL'];

    // Función simulada para manejar cambios de tamaño
    const mockOnSizeChanged = jest.fn();

    // Renderizar el componente
    const { getByText } = render(
      <SizeSelector
        selectedSize={selectedSize}
        availableSizes={availableSizes}
        onSizeChanged={mockOnSizeChanged}
      />
    );

    // Verificar si se muestran correctamente los botones de tamaño y si están en el documento
    availableSizes.forEach((size) => {
      const sizeButton = getByText(size);
      expect(sizeButton).toBeInTheDocument();

      // Verificar si el botón de tamaño seleccionado tiene la clase 'underline'
      if (size === selectedSize) {
        expect(sizeButton).toHaveClass('underline');
      } else {
        expect(sizeButton).not.toHaveClass('underline');
      }

      // Simular hacer clic en el botón de tamaño
      fireEvent.click(sizeButton);

      // Verificar si se llamó a onSizeChanged con el tamaño correcto
      expect(mockOnSizeChanged).toHaveBeenCalledWith(size);
    });
  });
});
