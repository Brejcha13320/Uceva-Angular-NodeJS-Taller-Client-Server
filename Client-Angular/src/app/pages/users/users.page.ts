import { Component, inject } from '@angular/core';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users/users.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de usuarios.
 *
 * Se utiliza para gestionar y mostrar un listado de usuarios
 * utilizando el componente `TableUsersComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `UsersService`
 * para obtener los usuarios y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  imports: [UsersTableComponent, AlertComponent],
})
export class UsersPage {
  /**
   * Listado de usuarios obtenidos desde el servicio.
   * @type {User[]}
   */
  users: User[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener usuarios.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private usersService = inject(UsersService);

  /**
   * Inicializa el componente y carga los usuarios.
   * @remarks
   * Se suscribe al método `getAllUsers()` del servicio y
   * asigna los datos recibidos a la propiedad `users`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.usersService.getAllUsers(10).subscribe({
      next: (users) => {
        this.users = users;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
