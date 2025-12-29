import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ProductsService } from "./products.service";

export class ProductsController {
  productsService = new ProductsService();

  getAllProducts = (req: Request, res: Response) => {
    const { countProducts } = req.params;
    this.productsService
      .getAllProducts(Number(countProducts))
      .then((products) => res.status(201).json(products))
      .catch((error) => HandleError.error(error, res));
  };

}