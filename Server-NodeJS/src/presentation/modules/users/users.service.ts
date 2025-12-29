import { UserEngineering, User } from "../../../domain/interfaces/user.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de usuarios.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar usuarios
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class UsersService {

  /**
   * Lista de ingenierías disponibles para los usuarios.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente una carrera
   * a cada usuario generado.
   */
  private UserEngineerings: UserEngineering[] = [
    'Sistemas',
    'Electronica',
    'Biomedica',
    'Industrial',
    'Ambiental',
  ];

  /**
   * Obtiene un listado de usuarios generados dinámicamente.
   *
   * @param countUsers Cantidad de usuarios a generar
   * @returns Promesa que resuelve un arreglo de usuarios
   *
   * @example
   * ```ts
   * const users = await usersService.getAllUsers(5);
   * ```
   */
  public async getAllUsers(countUsers: number): Promise<User[]> {
    const users: Promise<User>[] = [];

    for (let i = 1; i <= countUsers; i++) {
      users.push(this.generateUser(i));
    }

    return Promise.all(users);
  }

  /**
   * Genera un usuario ficticio.
   *
   * @param id Identificador único del usuario
   * @returns Promesa que resuelve un usuario generado
   */
  private generateUser(id: number): Promise<User> {
    return Promise.resolve({
      id,
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 65 }),
      email: faker.internet.email(),
      engineering: faker.helpers.arrayElement(this.UserEngineerings),
    });
  }
}
