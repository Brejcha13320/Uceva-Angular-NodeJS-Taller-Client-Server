import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/users.interface';

/**
 * Servicio encargado de la gestión de usuarios.
 *
 * Proporciona métodos para obtener información de usuarios
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private usersService: UsersService) {}
 *
 * this.usersService.getAllUsers(10).subscribe(users => {
 *   console.log(users);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de usuarios desde el backend.
   *
   * @param countUsers Número de usuarios a obtener.
   * @returns Observable que emite un array de usuarios.
   *
   * @example
   * ```ts
   * this.usersService.getAllUsers(5).subscribe(users => {
   *   console.log(users);
   * });
   * ```
   */
  getAllUsers(countUsers: number): Observable<User[]> {
    return this.httpClient.get<User[]>(`api/users/${countUsers}`);
  }
}
