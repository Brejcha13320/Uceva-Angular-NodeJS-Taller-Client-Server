import { Router } from "express";

/**
 * Configuración de opciones para el servidor.
 */
export interface Options {
  /** Puerto donde se levantará el servidor */
  port: number;

  /** Ruta al directorio público (archivos estáticos) */
  publicPath: string;

  /** Router principal de la aplicación */
  routes: Router;
}