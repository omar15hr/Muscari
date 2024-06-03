import { render } from '@testing-library/react';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton component', () => {
  test('renders correctly', () => {
    const buttonText = 'Submit';
    const isLoading = false;

    const { getByText } = render(
      <SubmitButton buttonText={buttonText} isLoading={isLoading} />
    );

    // Verificar si el botón se renderiza correctamente con el texto adecuado
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  test('disables button when isLoading is true', () => {
    const buttonText = 'Submit';
    const isLoading = true;

    const { getByRole } = render(
      <SubmitButton buttonText={buttonText} isLoading={isLoading} />
    );

    const buttonElement = getByRole('button');

    // Verificar si el botón está deshabilitado cuando isLoading es true
    expect(buttonElement).toBeDisabled();
  });
});
