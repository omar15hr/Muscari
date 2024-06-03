import { placeOrder } from './place-order';
import prisma from '@/lib/prisma';
import { auth } from '@/auth.config';
import type { Address, Size } from '@/interfaces';

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size;
}


jest.mock('../../lib/prisma', () => ({
  product: {
    findMany: jest.fn(),
    update: jest.fn(),
  },
  order: {
    create: jest.fn(),
  },
  orderAddress: {
    create: jest.fn(),
  },
  $transaction: jest.fn((fn) => fn({
    product: {
      update: prisma.product.update,
    },
    order: {
      create: prisma.order.create,
    },
    orderAddress: {
      create: prisma.orderAddress.create,
    },
  })),
}));

jest.mock('../../auth.config', () => ({
  auth: jest.fn(),
}));

describe('placeOrder', () => {
  let originalConsoleLog: any;

  beforeAll(() => {
    // Guarda el original console.log para restaurarlo después
    originalConsoleLog = console.log;
    // Mockea console.log
    console.log = jest.fn();
  });

  afterAll(() => {
    // Restaura el original console.log después de todas las pruebas
    console.log = originalConsoleLog;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockAddress: Address = {
    address: '123 Main St',
    address2: 'Apt 4',
    country: 'USA',
    city: 'Springfield',
    firstName: 'John',
    lastName: 'Doe',
    phone: '555-555-5555',
    postalCode: '12345',
  };

  const mockProducts: ProductToOrder[] = [
    { productId: 'prod-1', quantity: 2, size: 'M' as Size },
    { productId: 'prod-2', quantity: 1, size: 'L' as Size },
  ];

  it('should place an order successfully', async () => {
    (auth as jest.Mock).mockResolvedValue({ user: { id: 'user-123' } });
    (prisma.product.findMany as jest.Mock).mockResolvedValue([
      { id: 'prod-1', price: 100, inStock_M: 10 },
      { id: 'prod-2', price: 200, inStock_L: 10 },
    ]);

    const result = await placeOrder(mockProducts, mockAddress);

    expect(auth).toHaveBeenCalled();
    expect(prisma.product.findMany).toHaveBeenCalledWith({
      where: {
        id: {
          in: mockProducts.map((p) => p.productId),
        },
      },
    });
    expect(prisma.product.update).toHaveBeenCalledTimes(2);
    expect(prisma.order.create).toHaveBeenCalled();
    expect(prisma.orderAddress.create).toHaveBeenCalled();
    expect(result).toEqual({
      ok: true,
      order: expect.any(Object),
      prismaTx: expect.any(Object),
    });
  });

  it('should return error if user is not authenticated', async () => {
    (auth as jest.Mock).mockResolvedValue(null);

    const result = await placeOrder(mockProducts, mockAddress);

    expect(result).toEqual({
      ok: false,
      message: 'No hay sesión de usuario',
    });
  });

  it('should handle errors during order placement', async () => {
    (auth as jest.Mock).mockResolvedValue({ user: { id: 'user-123' } });
    (prisma.product.findMany as jest.Mock).mockResolvedValue([
      { id: 'prod-1', price: 100, inStock_M: 10 },
      { id: 'prod-2', price: 200, inStock_L: 10 },
    ]);
    (prisma.$transaction as jest.Mock).mockRejectedValue(new Error('Transaction error'));

    const result = await placeOrder(mockProducts, mockAddress);

    expect(result).toEqual({
      ok: false,
      message: 'Transaction error',
    });
  });
});
