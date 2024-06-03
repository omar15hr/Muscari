import { getStockBySlug } from './get-stock-by-slug';
import prisma from '@/lib/prisma';

jest.mock('../../lib/prisma', () => ({
  __esModule: true,
  default: {
    product: {
      findFirst: jest.fn(),
    },
  },
}));

describe('getStockBySlug', () => {
  it('debería devolver el stock para un slug dado', async () => {
    const mockStockData = {
      inStock_XS: 5,
      inStock_S: 10,
      inStock_M: 15,
      inStock_L: 20,
      inStock_XL: 25,
      inStock_XXL: 30,
    };

    (prisma.product.findFirst as jest.Mock).mockResolvedValue(mockStockData);

    const slug = 'tu-slug';
    const stock = await getStockBySlug(slug);

    expect(stock).toEqual(5); // Ajusta esto a lo que esperas que devuelva tu función para el slug dado
  });

  it('debería devolver 0 si hay un error al buscar el stock', async () => {
    (prisma.product.findFirst as jest.Mock).mockRejectedValue(new Error('Algo salió mal'));

    const slug = 'tu-slug';
    const stock = await getStockBySlug(slug);

    expect(stock).toEqual(0);
  });
});
