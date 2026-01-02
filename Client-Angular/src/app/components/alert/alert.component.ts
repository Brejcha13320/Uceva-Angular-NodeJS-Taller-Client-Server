import { Component, Input } from '@angular/core';
import { AlertState } from '../../interfaces/state.interface';
import { IconAtom } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente de alerta reutilizable.
 *
 * @description
 * Muestra un mensaje de alerta cuyo estilo visual depende del estado recibido.
 * Está pensado para representar estados de carga o error en la interfaz de usuario.
 *
 * @example
 * ```html
 * <app-alert
 *   [alertState]="'loading'"
 *   text="Cargando información..."
 * />
 * ```
 *
 * @public
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  imports: [IconAtom],
})
export class AlertComponent {
  /**
   * Estado actual de la alerta.
   *
   * @remarks
   * Determina el estilo visual de la alerta (color, icono, etc.).
   *
   * @required
   */
  @Input({ required: true }) alertState!: AlertState;

  /**
   * Texto que se muestra dentro de la alerta.
   *
   * @default ''
   */
  @Input() text: string = '';

  /**
   * Mapa de clases Bootstrap asociadas a cada estado de alerta.
   *
   * @internal
   */
  alertClassMap: Record<AlertState, 'primary' | 'danger'> = {
    error: 'danger',
    loading: 'primary',
  };

  /**
   * Obtiene la clase CSS completa de la alerta.
   *
   * @returns
   * Cadena de clases CSS de Bootstrap aplicadas al contenedor de la alerta.
   */
  getClass(): string {
    return `alert alert-${this.alertClassMap[this.alertState]} d-flex align-items-center`;
  }
}
