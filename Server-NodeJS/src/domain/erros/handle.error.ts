import { Response } from "express";
import { CustomError } from "./custom.error";

export class HandleError {
  static error(error: unknown, res: Response) {
    console.log(`${error}`);

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal Servicer error" });
  }
}