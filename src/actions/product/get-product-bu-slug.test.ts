import { getProductBySlug } from './get-product-by-slug';
import prisma from '@/lib/prisma';

jest.mock('../../lib/prisma', () => ({
  __esModule: true,
  default: {
    product: {
      findFirst: jest.fn(),
    },
  },
}));

describe('getProductBySlug', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return null if no product is found', async () => {
    (prisma.product.findFirst as jest.Mock).mockResolvedValueOnce(null);

    const result = await getProductBySlug('non-existent-slug');

    expect(result).toBeNull();
    expect(prisma.product.findFirst).toHaveBeenCalledWith({
      include: {
        ProductImage: true,
      },
      where: {
        slug: 'non-existent-slug',
      },
    });
  });

  it('should return product with images if found', async () => {
    const mockProduct = {
      id: 1,
      name: 'Mock Product',
      slug: 'mock-product',
      ProductImage: [{ id: 1, url: 'image1.jpg' }, { id: 2, url: 'image2.jpg' }],
    };
    (prisma.product.findFirst as jest.Mock).mockResolvedValueOnce(mockProduct);

    const result = await getProductBySlug('mock-product');

    expect(result).toEqual({
      ...mockProduct,
      images: ['image1.jpg', 'image2.jpg'],
    });
    expect(prisma.product.findFirst).toHaveBeenCalledWith({
      include: {
        ProductImage: true,
      },
      where: {
        slug: 'mock-product',
      },
    });
  });

  it('should throw an error if an error occurs', async () => {
    const mockError = new Error('Test error');
    (prisma.product.findFirst as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getProductBySlug('test-slug')).rejects.toThrowError(
      'Error al obtener producto por slug'
    );

    expect(prisma.product.findFirst).toHaveBeenCalledWith({
      include: {
        ProductImage: true,
      },
      where: {
        slug: 'test-slug',
      },
    });
  });
});
