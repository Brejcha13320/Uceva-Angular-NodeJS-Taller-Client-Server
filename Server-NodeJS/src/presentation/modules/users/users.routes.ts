import { Router } from "express";
import { UsersController } from "./users.controller";

export class UsersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new UsersController();

    /**
     * @openapi
     * /api/users/{countUsers}:
     *   get:
     *     summary: Obtener listado de usuarios
     *     description: Retorna una lista de usuarios generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: countUsers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de usuarios a generar
     *     responses:
     *       200:
     *         description: Lista de usuarios generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countUsers", controller.getAllUsers);

    return router;
  }
}