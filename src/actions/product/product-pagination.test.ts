import { getPaginatedProductsWithImages } from './product-pagination';

// Mockear prisma
jest.mock('../../lib/prisma', () => ({
  __esModule: true,
  default: {
    product: {
      findMany: jest.fn(),
      count: jest.fn(),
    },
  },
}));

describe('getPaginatedProductsWithImages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch paginated products with images', async () => {
    // Mockear los resultados de prisma
    const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        ProductImage: [
          { url: 'image1.jpg' },
          { url: 'image2.jpg' },
        ],
      },
    ];
    const mockTotalCount = 100; // Ejemplo

    const mockPrisma = require('../../lib/prisma').default;
    mockPrisma.product.findMany.mockResolvedValue(mockProducts);
    mockPrisma.product.count.mockResolvedValue(mockTotalCount);

    // Llamar a la función
    const result = await getPaginatedProductsWithImages({ page: 1, take: 10, gender: 'men' });

    // Verificar que se llamen las funciones de Prisma con los argumentos correctos
    expect(mockPrisma.product.findMany).toHaveBeenCalledWith({
      take: 10,
      skip: 0,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender: 'men',
      },
    });
    expect(mockPrisma.product.count).toHaveBeenCalledWith({
      where: {
        gender: 'men',
      },
    });

    // Verificar que el resultado tenga la estructura correcta
    expect(result).toEqual({
      currentPage: 1,
      totalPages: 10, // Ejemplo basado en el totalCount y el take
      products: mockProducts.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    });
  });

});
