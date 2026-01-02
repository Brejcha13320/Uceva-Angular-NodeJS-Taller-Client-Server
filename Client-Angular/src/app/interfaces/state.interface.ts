/**
 * Representa los posibles estados de un proceso o flujo asincrónico.
 *
 * @remarks
 * Se utiliza comúnmente para indicar el estado actual de una operación,
 * como una llamada HTTP o la carga de datos.
 *
 * @example
 * let state: State = 'loading';
 *
 * @public
 */
export type State =
  /** Estado inicial, antes de que comience el proceso */
  | 'init'
  /** El proceso está en curso */
  | 'loading'
  /** El proceso finalizó correctamente */
  | 'success'
  /** Ocurrió un error durante el proceso */
  | 'error';


/**
 * Estados posibles de una alerta.
 *
 * @remarks
 * Define el estado visual o funcional de una alerta,
 * normalmente asociado a procesos en curso o fallidos.
 *
 * @example
 * let alertState: AlertState = 'loading';
 *
 * @public
 */
export type AlertState =
  /** La alerta indica que hay un proceso en curso */
  | 'loading'
  /** La alerta indica que ocurrió un error */
  | 'error';