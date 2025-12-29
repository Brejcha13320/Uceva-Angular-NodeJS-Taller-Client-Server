/**
 * Interfaz que representa un producto.
 *
 * Contiene la información básica necesaria para mostrar un producto
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada producto debe tener un `id` único, un `name` descriptivo,
 * una `category` válida y un `price` en pesos colombianos.
 *
 * @example
 * ```ts
 * const producto: Product = {
 *   id: 1,
 *   name: 'Leche entera',
 *   category: 'Lacteos',
 *   price: 4500
 * };
 * ```
 */
export interface Product {
    /** Identificador único del producto */
    id: number;

    /** Nombre o descripción del producto */
    name: string;

    /** Categoría del producto */
    category: ProductCategory;

    /** Precio del producto en pesos */
    price: number;
}

/**
 * Tipo de categoría de producto.
 *
 * @remarks
 * Este tipo restringe las categorías a los valores predefinidos:
 * - 'Lacteos'
 * - 'Carnes'
 * - 'Frutas'
 * - 'Verduras'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const categoria: ProductCategory = 'Frutas';
 * ```
 */
export type ProductCategory = 'Lacteos' | 'Carnes' | 'Frutas' | 'Verduras';