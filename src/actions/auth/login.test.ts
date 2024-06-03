import { login } from './login';
import { signIn } from '@/auth.config';

jest.mock('../../auth.config', () => ({
  signIn: jest.fn(),
}));

describe('login', () => {
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

  it('should login successfully', async () => {
    (signIn as jest.Mock).mockResolvedValue({ ok: true });

    const result = await login('johndoe@example.com', 'password123');

    expect(signIn).toHaveBeenCalledWith('credentials', { email: 'johndoe@example.com', password: 'password123' });
    expect(result).toEqual({ ok: true });
  });

  it('should handle errors when login fails', async () => {
    (signIn as jest.Mock).mockRejectedValue(new Error('Login error'));

    const result = await login('johndoe@example.com', 'password123');

    expect(signIn).toHaveBeenCalledWith('credentials', { email: 'johndoe@example.com', password: 'password123' });
    expect(result).toEqual({
      ok: false,
      message: 'No se pudo iniciar sesión',
    });
  });
});
