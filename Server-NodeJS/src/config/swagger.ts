import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Especificación de Swagger (OpenAPI) para la API.
 *
 * @remarks
 * Este objeto configura Swagger mediante `swagger-jsdoc`,
 * generando automáticamente la documentación OpenAPI a partir
 * de comentarios JSDoc presentes en los archivos de rutas.
 *
 * La especificación resultante es consumida por Swagger UI
 * para mostrar la documentación interactiva de la API.
 *
 * @example
 * ```ts
 * import swaggerUi from 'swagger-ui-express';
 *
 * app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 * ```
 */
export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Client Server NodeJS',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [
    './src/presentation/modules/**/*.routes.ts', // donde están tus comentarios
    './src/config/swagger.schemas.ts', // donde están los schemas
  ],
});