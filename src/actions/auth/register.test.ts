import { registerUser } from './register';
import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

jest.mock('../../lib/prisma', () => ({
  user: {
    create: jest.fn(),
  },
}));

jest.mock('bcryptjs', () => ({
  hashSync: jest.fn(() => 'hashed_password'),
}));

describe('registerUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user successfully', async () => {
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
    };

    (prisma.user.create as jest.Mock).mockResolvedValue(mockUser);

    const result = await registerUser('John Doe', 'johndoe@example.com', 'password123');

    expect(bcryptjs.hashSync).toHaveBeenCalledWith('password123');
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: 'John Doe',
        email: 'johndoe@example.com'.toLowerCase(),
        password: 'hashed_password',
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    expect(result).toEqual({
      ok: true,
      user: mockUser,
      message: 'Usuario creado',
    });
  });

  it('should handle errors when creating a user', async () => {
    (prisma.user.create as jest.Mock).mockRejectedValue(new Error('Database error'));

    const result = await registerUser('John Doe', 'johndoe@example.com', 'password123');

    expect(result).toEqual({
      ok: false,
      message: 'No se pudo crear el usuario',
    });
  });
});
