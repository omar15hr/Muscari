import { act } from 'react-dom/test-utils'; 
import { useFavoriteStore } from './favorites-store';
import { FavoriteProduct } from '@/interfaces';

// Create a mock of the Zustand store
jest.mock('./favorites-store', () => {
  return {
    useFavoriteStore: jest.fn(),
  };
});

describe('Favorite Store', () => {
  let store: any;
  let favoriteState: FavoriteProduct[] = [];
  
  const mockSetState = jest.fn((newState) => {
    favoriteState = newState.favorite;
  });

  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();

    // Configure the mock to return initial state and functions
    (useFavoriteStore as unknown as jest.Mock).mockReturnValue({
      favorite: favoriteState,
      addProductToFavorites: jest.fn((product: FavoriteProduct) => {
        favoriteState = [...favoriteState, product];
        mockSetState({ favorite: favoriteState });
      }),
      removeProduct: jest.fn((product: FavoriteProduct) => {
        favoriteState = favoriteState.filter(item => item.id !== product.id);
        mockSetState({ favorite: favoriteState });
      }),
      clearFavorites: jest.fn(() => {
        favoriteState = [];
        mockSetState({ favorite: favoriteState });
      }),
    });

    // Get the instance of the store
    store = useFavoriteStore();
  });

  it('should add a product to favorites', () => {
    const product: FavoriteProduct = {
      id: '1',
      slug: '',
      title: '',
      price: 0,
      quantity: 0,
      image: ''
    };

    act(() => {
      store.addProductToFavorites(product);
    });

    expect(store.addProductToFavorites).toHaveBeenCalledWith(product);
    expect(favoriteState).toHaveLength(1);
    expect(favoriteState[0]).toEqual(product);
  });

  it('should remove a product from favorites', () => {
    const product: FavoriteProduct = {
      id: '1',
      slug: '',
      title: '',
      price: 0,
      quantity: 0,
      image: ''
    };

    act(() => {
      store.addProductToFavorites(product);
      store.removeProduct(product);
    });

    expect(store.removeProduct).toHaveBeenCalledWith(product);
    expect(favoriteState).toHaveLength(0);
  });
});
