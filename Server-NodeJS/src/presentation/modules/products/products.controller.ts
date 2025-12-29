import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ProductsService } from "./products.service";

/**
 * Controlador de productos.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con productos,
 * delegando la lógica de negocio al `ProductsService`.
 */
export class ProductsController {

  /**
   * Servicio de productos.
   */
  private readonly productsService = new ProductsService();

  /**
   * Maneja la petición HTTP para obtener un listado de productos.
   *
   * @remarks
   * El número de productos a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /products/10
   * ```
   */
  getAllProducts = (req: Request, res: Response): void => {
    const { countProducts } = req.params;

    this.productsService
      .getAllProducts(Number(countProducts))
      .then((products) => res.status(201).json(products))
      .catch((error) => HandleError.error(error, res));
  };
}
