import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { UsersService } from "./users.service";

export class UsersController {
  usersService = new UsersService();

  getAllUsers = (req: Request, res: Response) => {
    const { countUsers } = req.params;
    this.usersService
      .getAllUsers(Number(countUsers))
      .then((users) => res.status(201).json(users))
      .catch((error) => HandleError.error(error, res));
  };

}