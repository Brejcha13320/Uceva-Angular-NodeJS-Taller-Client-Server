import { Router } from "express";
import { UsersRoutes } from "./modules/users/users.routes";
import { ProductsRoutes } from "./modules/products/products.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //Definir Rutas
    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/products", ProductsRoutes.routes);

    return router;
  }
}