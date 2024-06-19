import { getOrdersByUser } from './get-orders-by-user';
import prisma from '@/lib/prisma';
import { auth } from '@/auth.config';

// Mock de prisma
jest.mock('../../lib/prisma', () => ({
  order: {
    findMany: jest.fn(),
  },
}));

// Mock de auth
jest.mock('../../auth.config', () => ({
  auth: jest.fn(),
}));

describe('getOrdersByUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return orders when user is authenticated', async () => {
    // Simular que el usuario está autenticado
    (auth as jest.Mock).mockResolvedValue({ user: { id: 'user-id' } });

    // Mockear la respuesta de la base de datos
    const mockOrders = [
      {
        id: 'order-id-1',
        userId: 'user-id',
        itemsInOrder: 2,
        subTotal: 300,
        tax: 45,
        total: 345,
        OrderAddress: {
          firstName: 'John',
          lastName: 'Doe',
        },
      },
      {
        id: 'order-id-2',
        userId: 'user-id',
        itemsInOrder: 1,
        subTotal: 150,
        tax: 22.5,
        total: 172.5,
        OrderAddress: {
          firstName: 'Jane',
          lastName: 'Smith',
        },
      },
    ];

    (prisma.order.findMany as jest.Mock).mockResolvedValue(mockOrders);

    const result = await getOrdersByUser();

    expect(auth).toHaveBeenCalled();
    expect(prisma.order.findMany).toHaveBeenCalledWith({
      where: { userId: 'user-id' },
      include: {
        OrderAddress: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    expect(result).toEqual({
      ok: true,
      orders: mockOrders,
    });
  });

  it('should return error when user is not authenticated', async () => {
    // Simular que el usuario no está autenticado
    (auth as jest.Mock).mockResolvedValue({ user: null });

    const result = await getOrdersByUser();

    expect(auth).toHaveBeenCalled();
    expect(result).toEqual({
      ok: false,
      message: 'Debe de estar autenticado',
    });
    // No debe llamar a prisma.order.findMany en este caso
    expect(prisma.order.findMany).not.toHaveBeenCalled();
  });
});
