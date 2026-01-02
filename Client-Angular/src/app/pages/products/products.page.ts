import { Component, inject } from '@angular/core';
import { ProductsTableComponent } from '../../components/products-table/products-table.component';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products/products.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de productos.
 *
 * Se utiliza para gestionar y mostrar un listado de productos
 * utilizando el componente `ProductsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ProductsService`
 * para obtener los productos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-producs',
  templateUrl: `./products.page.html`,
  imports: [ProductsTableComponent, AlertComponent]
})
export class ProductsPage {
  /**
   * Listado de productos obtenidos desde el servicio.
   * @type {Product[]}
   */
  products: Product[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener productos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private productsService = inject(ProductsService);

  /**
   * Inicializa el componente y carga los productos.
   * @remarks
   * Se suscribe al método `getAllProducts()` del servicio y
   * asigna los datos recibidos a la propiedad `products`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.productsService.getAllProducts(10).subscribe({
      next: (products) => {
        this.products = products;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
