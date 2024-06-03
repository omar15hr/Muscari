import { deleteUserAddress } from './delete-user-address';
import prisma from '@/lib/prisma';

jest.mock('../../lib/prisma', () => ({
  userAddress: {
    delete: jest.fn(),
  },
}));

describe('deleteUserAddress', () => {
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

  const userId = 'user-123';

  it('should delete the address successfully', async () => {
    (prisma.userAddress.delete as jest.Mock).mockResolvedValue({});

    const result = await deleteUserAddress(userId);

    expect(prisma.userAddress.delete).toHaveBeenCalledWith({ where: { userId } });
    expect(result).toEqual({ ok: true });
  });

  it('should handle errors when deleting address fails', async () => {
    (prisma.userAddress.delete as jest.Mock).mockRejectedValue(new Error('Delete error'));

    const result = await deleteUserAddress(userId);

    expect(prisma.userAddress.delete).toHaveBeenCalledWith({ where: { userId } });
    expect(result).toEqual({
      ok: false,
      message: 'No se pudo eliminar la direccion',
    });
  });
});
