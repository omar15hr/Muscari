import { logout } from './logout';
import { signOut } from '@/auth.config';

jest.mock('../../auth.config', () => ({
  signOut: jest.fn(),
}));

describe('logout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should logout successfully', async () => {
    await logout();

    expect(signOut).toHaveBeenCalled();
  });

  it('should handle errors when logout fails', async () => {
    (signOut as jest.Mock).mockRejectedValue(new Error('Logout error'));

    try {
      await logout();
    } catch (error) {
      expect(signOut).toHaveBeenCalled();
      expect(error).toEqual(new Error('Logout error'));
    }
  });
});
