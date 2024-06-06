// __tests__/placeOrder.test.js
import { placeOrder } from './place-order';
import prisma from '@/lib/prisma';
import { auth } from '@/auth.config';
import { Address, Size } from '@/interfaces';


interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size;
}


// Mock de prisma
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
  $transaction: jest.fn((fn) => fn(prisma)),
}));

// Mock de auth
jest.mock('../../auth.config', () => ({
  auth: jest.fn(),
}));

describe('placeOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an error if there is no user session', async () => {
    (auth as jest.Mock ).mockResolvedValueOnce(null); // Mock auth to return no session

    const response = await placeOrder([], {
      firstName: '',
      lastName: '',
      address: '',
      postalCode: '',
      city: '',
      country: '',
      phone: ''
    });

    expect(response).toEqual({
      ok: false,
      message: "No hay sesión de usuario",
    });
  });

  it('should create an order successfully', async () => {
    (auth as jest.Mock ).mockResolvedValueOnce({ user: { id: 'user-id' } }); // Mock user session
    (prisma.product.findMany as jest.Mock).mockResolvedValueOnce([
      { id: 'product-1', price: 100, inStock_XS: 10, inStock_S: 10, inStock_M: 10, inStock_L: 10, inStock_XL: 10, inStock_XXL: 10 },
      { id: 'product-2', price: 200, inStock_XS: 5, inStock_S: 5, inStock_M: 5, inStock_L: 5, inStock_XL: 5, inStock_XXL: 5 },
    ]);

    (prisma.product.update as jest.Mock).mockResolvedValueOnce({
      id: 'product-1', price: 100, inStock_XS: 9, inStock_S: 10, inStock_M: 10, inStock_L: 10, inStock_XL: 10, inStock_XXL: 10,
    });

    (prisma.product.update as jest.Mock).mockResolvedValueOnce({
      id: 'product-2', price: 200, inStock_XS: 4, inStock_S: 5, inStock_M: 5, inStock_L: 5, inStock_XL: 5, inStock_XXL: 5,
    });

    (prisma.order.create as jest.Mock).mockResolvedValueOnce({
      id: 'order-id',
      userId: 'user-id',
      itemsInOrder: 2,
      subTotal: 300,
      tax: 45,
      total: 345,
    });

    (prisma.orderAddress.create as jest.Mock).mockResolvedValueOnce({
      id: 'address-id',
      countryId: 'country-id',
      orderId: 'order-id',
    });

    const productIds: ProductToOrder[] = [
      { productId: 'product-1', quantity: 1, size: 'XS' },
      { productId: 'product-2', quantity: 1, size: 'XS' },
    ];
    const address: Address = {
      firstName: 'test',
      lastName: 'test-last',
      address: 'test 12',
      address2: 'test 13',
      postalCode: '1111',
      city: 'santiago',
      country: 'chile',
      phone: '2222'
    };

    const response = await placeOrder(productIds, address);

    expect(response.ok).toBe(true);
    expect(response.order).toEqual({
      id: 'order-id',
      userId: 'user-id',
      itemsInOrder: 2,
      subTotal: 300,
      tax: 45,
      total: 345,
    });
    expect(prisma.product.findMany).toHaveBeenCalledTimes(1);
    expect(prisma.product.update).toHaveBeenCalledTimes(2);
    expect(prisma.order.create).toHaveBeenCalledTimes(1);
    expect(prisma.orderAddress.create).toHaveBeenCalledTimes(1);
  });

});
