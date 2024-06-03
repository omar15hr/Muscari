// __tests__/Pagination.test.js
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

// Mocks
const mockUsePathname = jest.fn();
const mockUseSearchParams = jest.fn();
const mockRedirect = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
  useSearchParams: () => mockUseSearchParams(),
  redirect: (url: any) => mockRedirect(url),
}));

describe('Pagination Component', () => {
    const setup = (totalPages: number, currentPage: string) => {
    const mockPathname = '/test-path';
    const mockSearchParams = new URLSearchParams();
    mockSearchParams.set('page', currentPage);

    mockUsePathname.mockReturnValue(mockPathname);
    mockUseSearchParams.mockReturnValue(mockSearchParams);

    render(<Pagination totalPages={totalPages} />);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render pagination correctly when totalPages is 2', () => {
    setup(2, '1');

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should not render pagination when totalPages is 0', () => {
    setup(0, '1');

    expect(screen.queryByText('1')).toBeNull();
    expect(screen.queryByText('2')).toBeNull();
  });

  it('should redirect to the correct page when currentPage is invalid', () => {
    setup(2, '-1');

    expect(mockRedirect).toHaveBeenCalledWith('/test-path');
  });

  it('should not redirect and render correctly when currentPage is valid', () => {
    setup(2, '1');

    expect(mockRedirect).not.toHaveBeenCalled();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should create correct URLs for pagination links', () => {
    setup(2, '1');

    expect(screen.getByText('1').closest('a')).toHaveAttribute('href', '/test-path?page=1');
    expect(screen.getByText('2').closest('a')).toHaveAttribute('href', '/test-path?page=2');
  });
});
