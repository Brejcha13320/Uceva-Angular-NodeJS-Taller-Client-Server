import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { UsersService } from "./users.service";

/**
 * Controlador de usuarios.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con usuarios,
 * delegando la lógica de negocio al `UsersService`.
 */
export class UsersController {

  /**
   * Servicio de usuarios.
   */
  private readonly usersService = new UsersService();

  /**
   * Maneja la petición HTTP para obtener un listado de usuarios.
   *
   * @remarks
   * El número de usuarios a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /users/10
   * ```
   */
  getAllUsers = (req: Request, res: Response): void => {
    const { countUsers } = req.params;

    setTimeout(() => {
      this.usersService
      .getAllUsers(Number(countUsers))
      .then((users) => res.status(201).json(users))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}