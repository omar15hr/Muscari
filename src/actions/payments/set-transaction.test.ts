import { setTransactionId } from './set-transaction-id';
import prisma from '@/lib/prisma';

jest.mock('../../lib/prisma', () => ({
  order: {
    update: jest.fn(),
  },
}));

describe('setTransactionId', () => {
  const orderId = 'testOrderId';
  const transactionId = 'testTransactionId';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns an error if the order is not found', async () => {
    (prisma.order.update as jest.Mock ).mockResolvedValue(null);

    const result = await setTransactionId(orderId, transactionId);

    expect(result).toEqual({
      ok: false,
      message: `No se encontró una orden con el ${orderId}`,
    });
  });

  test('returns ok if the transaction id is set successfully', async () => {
    (prisma.order.update as jest.Mock ).mockResolvedValue({ id: orderId, transactionId });

    const result = await setTransactionId(orderId, transactionId);

    expect(result).toEqual({
      ok: true,
    });
  });

  test('returns an error if updating the transaction id fails', async () => {
    (prisma.order.update as jest.Mock ).mockRejectedValue(new Error('Update failed'));

    const result = await setTransactionId(orderId, transactionId);

    expect(result).toEqual({
      ok: false,
      message: 'No se pudo actualizar el id de la transacción',
    });
  });
});
