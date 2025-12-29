import { Router } from "express";
import { ProductsController } from "./products.controller";

export class ProductsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ProductsController();

    router.get("/:countProducts", controller.getAllProducts);

    return router;
  }
}