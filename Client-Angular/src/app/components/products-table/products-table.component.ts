import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ProductCategory, Product } from '../../interfaces/products.interface';

/**
 * Componente de tabla de productos.
 *
 * Se utiliza para mostrar un listado de productos en una tabla,
 * mostrando información como nombre, categoría, precio y un badge
 * visual que indica la categoría de cada producto.
 *
 * @remarks
 * Este componente recibe los productos desde un componente padre
 * a través del Input `products` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-products-table [products]="productsList"></app-products-table>
 * ```
 */
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ProductsTableComponent {
  /**
   * Listado de productos que se mostrarán en la tabla.
   * @type {Product[]}
   * @remarks
   * Este Input permite pasar un array de productos desde un componente padre,
   * generalmente `ListProductsComponent`. Cada producto debe cumplir la interfaz `Product`.
   */
  @Input() products: Product[] = [];
  /**
   * Mapeo de categorías de productos a tipos de Badge.
   * @type {Record<ProductCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Carnes' → 'danger' (rojo)
   * - 'Frutas' → 'warning' (amarillo)
   * - 'Lacteos' → 'primary' (azul)
   * - 'Verduras' → 'success' (verde)
   *
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  categoryMap: Record<ProductCategory, BadgeType> = {
    'Carnes' : 'danger',
    'Frutas': 'warning',
    'Lacteos': 'primary',
    'Verduras': 'success',
  }
}
