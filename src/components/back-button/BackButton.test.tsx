import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import {BackButton} from './BackButton'
 
describe('BackButton', () => {
  it('should navigate to the correct path', () => {
    const path = '/test-path';
    const { getByText, container } = render(<BackButton path={path} />);
    const linkElement = getByText('Volver').closest('a');

    expect(linkElement).toHaveAttribute('href', path);

    // Check if the IoArrowBack icon is present
    const iconElement = container.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });
});