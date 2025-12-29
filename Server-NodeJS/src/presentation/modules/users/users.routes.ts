import { Router } from "express";
import { UsersController } from "./users.controller";

export class UsersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new UsersController();

    router.get("/:countUsers", controller.getAllUsers);

    return router;
  }
}