import bcryptjs from 'bcryptjs';
import { initialData } from './seed';

describe('Initial data', () => {
  it('should have users with hashed passwords', () => {
    initialData.users.forEach(user => {
      expect(user.password).not.toBeUndefined();
      expect(bcryptjs.compareSync('123456', user.password)).toBe(true);
    });
  });

  it('should have valid product sizes', () => {
    initialData.products.forEach(product => {
      product.sizes.forEach(size => {
        expect(['XS', 'S', 'M', 'L', 'XL', 'XXL']).toContain(size);
      });
    });
  });

  it('should have valid product structure', () => {
    initialData.products.forEach(product => {
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('images');
      expect(product).toHaveProperty('inStock_XS');
      expect(product).toHaveProperty('inStock_S');
      expect(product).toHaveProperty('inStock_M');
      expect(product).toHaveProperty('inStock_L');
      expect(product).toHaveProperty('inStock_XL');
      expect(product).toHaveProperty('inStock_XXL');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('sizes');
      expect(product).toHaveProperty('slug');
      expect(product).toHaveProperty('type');
      expect(product).toHaveProperty('tags');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('gender');
    });
  });
});
