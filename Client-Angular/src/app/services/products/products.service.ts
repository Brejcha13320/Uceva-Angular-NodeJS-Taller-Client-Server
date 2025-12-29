import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/products.interface';

/**
 * Servicio encargado de la gestión de productos.
 *
 * Proporciona métodos para obtener información de productos
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private productsService: ProductsService) {}
 *
 * this.productsService.getAllProducts(10).subscribe(products => {
 *   console.log(products);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de productos desde el backend.
   *
   * @param countProducts Número de productos a obtener.
   * @returns Observable que emite un array de productos.
   *
   * @example
   * ```ts
   * this.productsService.getAllProducts(5).subscribe(products => {
   *   console.log(products);
   * });
   * ```
   */
  getAllProducts(countProducts: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`api/products/${countProducts}`);
  }
}
