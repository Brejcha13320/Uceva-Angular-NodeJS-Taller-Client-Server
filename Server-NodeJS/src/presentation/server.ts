import cors from "cors";
import express, { Router } from "express";
import path from "path";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../config/swagger';
import { Options } from "../domain/interfaces/server.interface";

/**
 * Clase que representa el servidor Express de la aplicación.
 *
 * @remarks
 * Esta clase centraliza la configuración del servidor HTTP, 
 * incluyendo middlewares, rutas, documentación Swagger y SPA.
 *
 * Se encarga de levantar la aplicación y exponer todos los endpoints.
 *
 * @example
 * ```ts
 * const server = new Server({
 *   port: 3000,
 *   publicPath: 'public',
 *   routes: AppRoutes.routes
 * });
 * await server.start();
 * ```
 */
export class Server {
  /** Instancia de Express */
  public readonly app = express();

  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  /**
   * Crea una nueva instancia del servidor.
   *
   * @param options Configuración del servidor
   */
  constructor(options: Options) {
    const { port, publicPath, routes } = options;
    this.port = port;
    this.publicPath = publicPath;
    this.routes = routes;
  }

  /**
   * Inicializa y arranca el servidor.
   *
   * @remarks
   * - Configura middlewares de CORS y JSON
   * - Configura carpeta pública
   * - Registra las rutas de la aplicación
   * - Configura Swagger UI en `/api/docs`
   * - Sirve SPA para rutas no encontradas
   * - Escucha el puerto configurado
   */
  async start(): Promise<void> {
    //* Middlewares
    this.app.use(cors());
    this.app.use(express.json());

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use(this.routes);

    //* Swagger Docs
    this.app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    //* SPA
    this.app.use((req, res) => {
      res.sendFile(
        path.join(__dirname, `../../${this.publicPath}/index.html`)
      );
    });

    this.app.listen(this.port, () => {
      console.log(`Server Running on Port ${this.port}`);
    });
  }
}