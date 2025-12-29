import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

/**
 * Interceptor HTTP que concatena la URL base a todas las peticiones salientes.
 *
 * Este interceptor se encarga de anteponer el `baseUrl` definido en el
 * archivo de configuración de entornos (`environment`) a cada request HTTP.
 *
 * ⚠️ Nota:
 * - No debe usarse con URLs absolutas (`http://`, `https://`)
 * - Está pensado para trabajar con rutas relativas como `/users`, `/login`, etc.
 *
 * @example
 * Petición original:
 * ```ts
 * this.http.get('/users');
 * ```
 *
 * Petición final:
 * ```ts
 * https://api.midominio.com/users
 * ```
 */
export const clientAngularInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({ url: `${environment.baseUrl}/${req.url}`}));
};