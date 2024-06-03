import { setUserAddress } from './set-user-address';
import prisma from '@/lib/prisma';
import type { Address } from '@/interfaces';

jest.mock('../../lib/prisma', () => ({
  userAddress: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
}));

describe('setUserAddress', () => {
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

  const userId = 'user-123';

  it('should create a new address if none exists', async () => {
    (prisma.userAddress.findUnique as jest.Mock).mockResolvedValue(null);
    (prisma.userAddress.create as jest.Mock).mockResolvedValue(mockAddress);

    const result = await setUserAddress(mockAddress, userId);

    expect(prisma.userAddress.findUnique).toHaveBeenCalledWith({ where: { userId } });
    expect(prisma.userAddress.create).toHaveBeenCalledWith({
      data: {
        userId: userId,
        address: mockAddress.address,
        address2: mockAddress.address2,
        countryId: mockAddress.country,
        city: mockAddress.city,
        firstName: mockAddress.firstName,
        lastName: mockAddress.lastName,
        phone: mockAddress.phone,
        postalCode: mockAddress.postalCode,
      },
    });
    expect(result).toEqual({
      ok: true,
      address: mockAddress,
    });
  });

  it('should update the existing address if one exists', async () => {
    (prisma.userAddress.findUnique as jest.Mock).mockResolvedValue(mockAddress);
    (prisma.userAddress.update as jest.Mock).mockResolvedValue(mockAddress);

    const result = await setUserAddress(mockAddress, userId);

    expect(prisma.userAddress.findUnique).toHaveBeenCalledWith({ where: { userId } });
    expect(prisma.userAddress.update).toHaveBeenCalledWith({
      where: { userId },
      data: {
        userId: userId,
        address: mockAddress.address,
        address2: mockAddress.address2,
        countryId: mockAddress.country,
        city: mockAddress.city,
        firstName: mockAddress.firstName,
        lastName: mockAddress.lastName,
        phone: mockAddress.phone,
        postalCode: mockAddress.postalCode,
      },
    });
    expect(result).toEqual({
      ok: true,
      address: mockAddress,
    });
  });

  it('should handle errors when setting address fails', async () => {
    (prisma.userAddress.findUnique as jest.Mock).mockRejectedValue(new Error('Database error'));

    const result = await setUserAddress(mockAddress, userId);

    expect(result).toEqual({
      ok: false,
      message: 'No se pudo grabar la dirección',
    });
  });
});
