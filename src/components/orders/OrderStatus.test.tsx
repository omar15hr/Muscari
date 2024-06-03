import { render } from '@testing-library/react';
import { OrderStatus } from './OrderStatus';

describe('OrderStatus component', () => {
  test('displays "Pagada" when isPaid is true', () => {
    const { getByText } = render(<OrderStatus isPaid={true} />);
    const paidElement = getByText('Pagada');
    expect(paidElement).toBeInTheDocument();
  });

  test('displays "No pagada" when isPaid is false', () => {
    const { getByText } = render(<OrderStatus isPaid={false} />);
    const notPaidElement = getByText('No pagada');
    expect(notPaidElement).toBeInTheDocument();
  });

  test('displays correct background color when isPaid is true', () => {
    const { container } = render(<OrderStatus isPaid={true} />);
    const orderStatusElement = container.firstChild;
    expect(orderStatusElement).toHaveClass('bg-green-700');
  });

  test('displays correct background color when isPaid is false', () => {
    const { container } = render(<OrderStatus isPaid={false} />);
    const orderStatusElement = container.firstChild;
    expect(orderStatusElement).toHaveClass('bg-red-500');
  });
});
