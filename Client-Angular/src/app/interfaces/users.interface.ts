/**
 * Interfaz que representa un usuario del sistema.
 *
 * Contiene la información básica necesaria para mostrar un usuario
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada usuario debe tener un `id` único, nombres y apellidos,
 * edad, correo electrónico válido y una carrera (`engineering`) definida.
 *
 * @example
 * ```ts
 * const usuario: User = {
 *   id: 1,
 *   name: 'Carlos',
 *   lastName: 'Ramírez',
 *   age: 22,
 *   email: 'carlos.ramirez@example.com',
 *   engineering: 'Sistemas'
 * };
 * ```
 */
export interface User {
  /** Identificador único del usuario */
  id: number;

  /** Nombre del usuario */
  name: string;

  /** Apellido del usuario */
  lastName: string;

  /** Edad del usuario */
  age: number;

  /** Correo electrónico del usuario */
  email: string;

  /** Carrera o ingeniería del usuario */
  engineering: UserEngineering;
}

/**
 * Tipo de ingeniería o carrera de un usuario.
 *
 * @remarks
 * Este tipo restringe las ingenierías a los valores predefinidos:
 * - 'Sistemas'
 * - 'Electronica'
 * - 'Biomedica'
 * - 'Industrial'
 * - 'Ambiental'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const carrera: UserEngineering = 'Electronica';
 * ```
 */
export type UserEngineering = 'Sistemas' | 'Electronica' | 'Biomedica' | 'Industrial' | 'Ambiental';