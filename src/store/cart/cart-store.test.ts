import { act } from 'react-dom/test-utils';
import { useCartStore } from './cart-store';
import { CartProduct } from '@/interfaces';

// Crear un mock de la tienda
jest.mock('./cart-store', () => {
  return {
    useCartStore: jest.fn(),
  };
});

describe('Cart Store', () => {
  let store: any;
  let cartState: CartProduct[] = [];
  
  const mockSetState = jest.fn((newState) => {
    cartState = newState.cart;
  });

  beforeEach(() => {
    // Limpiar los mocks antes de cada prueba
    jest.clearAllMocks();

    // Configurar el mock para que devuelva el estado inicial y las funciones
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      cart: cartState,
      addProductTocart: jest.fn((product: CartProduct) => {
        cartState = [...cartState, product];
        mockSetState({ cart: cartState });
      }),
      removeProduct: jest.fn((product: CartProduct) => {
        cartState = cartState.filter(item => item.id !== product.id || item.size !== product.size);
        mockSetState({ cart: cartState });
      }),
      clearCart: jest.fn(() => {
        cartState = [];
        mockSetState({ cart: cartState });
      }),
    });

    // Obtener la instancia del store
    store = useCartStore();
  });

  it('should add a product to the cart', () => {
    const product: CartProduct = {
      id: '1',
      slug: 'product-1',
      size: 'M',
      image: '/path/to/image1.jpg',
      title: 'Product 1',
      price: 100,
      quantity: 1,
    };

    act(() => {
      store.addProductTocart(product);
    });

    expect(store.addProductTocart).toHaveBeenCalledWith(product);
    expect(cartState).toHaveLength(1);
    expect(cartState[0]).toEqual(product);
  });

  it('should remove a product from the cart', () => {
    const product: CartProduct = {
      id: '1',
      slug: 'product-1',
      size: 'M',
      image: '/path/to/image1.jpg',
      title: 'Product 1',
      price: 100,
      quantity: 1,
    };

    act(() => {
      store.addProductTocart(product);
      store.removeProduct(product);
    });

    expect(store.removeProduct).toHaveBeenCalledWith(product);
    expect(cartState).toHaveLength(0);
  });
});
