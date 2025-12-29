import swaggerJsdoc from 'swagger-jsdoc';

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