import { faker } from '@faker-js/faker';
import { Product, ProductCategory } from '../../../domain/interfaces/product.interface';

export class ProductsService {

  private categories: ProductCategory[] = [
    'Carnes',
    'Frutas',
    'Lacteos',
    'Verduras'
  ];

  public async getAllProducts(countProducts: number) {
    const products: Promise<Product>[] = [];
    for (let i = 1; i <= countProducts; i++) {
      products.push(this.generateProduct(i));
    }
    return Promise.all(products);
  }

  private generateProduct(id: number): Promise<Product> {
    return Promise.resolve({
      id,
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price({ min: 1, max: 100, dec: 2 })),
      category: faker.helpers.arrayElement(this.categories),
    })
  }

}