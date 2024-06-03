import { render, screen } from '@testing-library/react';
import SocialMedia from './SocialMedia';

describe('SocialMedia Component', () => {
  it('should render the component correctly', () => {
    render(<SocialMedia />);

    // Verificar que el título y la descripción se renderizan correctamente
    const title = screen.getByText('Síguenos en nuestras redes sociales');
    const description = screen.getByText('Ofrecemos nuestros productos por redes sociales, te brindamos una calidad atención y te permitirá conocernos un poco más.');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();

    // Verificar que se renderizan los enlaces a las redes sociales con las imágenes correctas
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks).toHaveLength(4); // Asumiendo que hay 4 enlaces

    const socialNames = screen.getAllByRole('heading', { level: 3 });
    expect(socialNames).toHaveLength(4); // Asumiendo que hay 4 nombres de redes sociales

    const expectedPeople = [
      { url: 'https://facebook.com', imageUrl: '/social-media/facebook.png' },
      { url: 'https://instagram.com', imageUrl: '/social-media/instagram.png' },
      { url: 'https://tiktok.com', imageUrl: '/social-media/tiktok.png' },
      { url: 'https://twitter.com', imageUrl: '/social-media/twitter.png' },
    ];

    socialLinks.forEach((socialLink, index) => {
      expect(socialLink).toHaveAttribute('href', expectedPeople[index].url);

      // Buscar la imagen dentro del enlace
      const image = socialLink.querySelector('img');
      expect(image).toBeInTheDocument();
    });

  });
});
