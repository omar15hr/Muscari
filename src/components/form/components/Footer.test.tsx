import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  test('renders correctly', () => {
    const description = 'This is a footer description';
    const textLink = 'Click here';
    const link = '/example';

    const { getByText } = render(
      <Footer description={description} textLink={textLink} link={link} />
    );

    // Verificar si se muestra la descripción y el enlace
    expect(getByText(description)).toBeInTheDocument();
    expect(getByText(textLink)).toBeInTheDocument();

    // Verificar si el enlace tiene el atributo href correcto
    const anchorElement = getByText(textLink).closest('a');
    expect(anchorElement).toHaveAttribute('href', link);
  });
});
