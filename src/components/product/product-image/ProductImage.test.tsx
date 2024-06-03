import { render } from '@testing-library/react';
import { ProductImage } from './ProductImage';

describe('ProductImage component', () => {
  test('renders image correctly', () => {
    const altText = 'Example product image';
    const src = 'example.jpg';
    const { getByAltText } = render(
      <ProductImage
        alt={altText}
        width={400}
        height={400}
        src={src}
      />
    );
    const imageElement = getByAltText(altText);
    expect(imageElement).toBeInTheDocument();
    // Verificar si la URL de la imagen contiene la parte "/_next/image?url=%2Fproducts%2Fexample.jpg"
    expect(imageElement.getAttribute('src')).toContain('/_next/image?url=%2Fproducts%2Fexample.jpg');
  });
});
