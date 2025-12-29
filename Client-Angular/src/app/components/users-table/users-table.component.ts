import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { UserEngineering, User } from '../../interfaces/users.interface';

/**
 * Componente de tabla de usuarios.
 *
 * Se utiliza para mostrar un listado de usuarios en una tabla,
 * mostrando información como id, nombre, apellido, email y un badge
 * visual que indica la ingenieria de cada usuario.
 *
 * @remarks
 * Este componente recibe los usuarios desde un componente padre
 * a través del Input `users` y utiliza el mapeo `engineeringMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-users-table [users]="usersList"></app-users-table>
 * ```
 */
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  imports: [BadgeAtom],
})
export class UsersTableComponent {
  /**
   * Listado de usuarios que se mostrarán en la tabla.
   * @type {User[]}
   * @remarks
   * Este Input permite pasar un array de usuarios desde un componente padre,
   * generalmente `ListUsersComponent`. Cada usuario debe cumplir la interfaz `User`.
   */
  @Input() users: User[] = [];
  /**
   * Mapeo de ingenierias de usuarios a tipos de Badge.
   * @type {Record<Category, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada ingenieria:
   * - 'Sistemas' → 'success' (verde)
   * - 'Electronica' → 'primary' (azul)
   * - 'Biomedica' → 'warning' (amarillo)
   * - 'Industrial' → 'danger' (rojo)
   * - 'Ambiental' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada usuario tenga un badge visual que indique su ingenieria
   * de forma clara para el usuario.
   */
  engineeringMap: Record<UserEngineering, BadgeType> = {
    'Sistemas' : 'success',
    'Electronica': 'primary',
    'Biomedica': 'warning',
    'Industrial': 'danger',
    'Ambiental': 'secondary'
  }
}
