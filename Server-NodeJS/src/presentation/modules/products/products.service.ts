import { faker } from '@faker-js/faker';
import { Product, ProductCategory } from '../../../domain/interfaces/product.interface';

/**
 * Servicio encargado de la generación y gestión de productos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar productos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class ProductsService {

  /**
   * Categorías disponibles para los productos.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una categoría
   * a cada producto generado.
   */
  private categories: ProductCategory[] = [
    'Carnes',
    'Frutas',
    'Lacteos',
    'Verduras'
  ];

  /**
   * Obtiene un listado de productos generados dinámicamente.
   *
   * @param countProducts Cantidad de productos a generar
   * @returns Promesa que resuelve un arreglo de productos
   *
   * @example
   * ```ts
   * const products = await productsService.getAllProducts(10);
   * ```
   */
  public async getAllProducts(countProducts: number): Promise<Product[]> {
    const products: Promise<Product>[] = [];

    for (let i = 1; i <= countProducts; i++) {
      products.push(this.generateProduct(i));
    }

    return Promise.all(products);
  }

  /**
   * Genera un producto ficticio.
   *
   * @param id Identificador único del producto
   * @returns Promesa que resuelve un producto generado
   */
  private generateProduct(id: number): Promise<Product> {
    return Promise.resolve({
      id,
      name: faker.commerce.productName(),
      price: Number(
        faker.commerce.price({ min: 1, max: 100, dec: 2 })
      ),
      category: faker.helpers.arrayElement(this.categories),
    });
  }
}
