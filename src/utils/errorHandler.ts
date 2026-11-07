import axios from 'axios'

// TODO 5.1 (Errores): convierta cualquier error en un mensaje legible en español.
// Use axios.isAxiosError(error). Sin error.response: 'Sin conexión...'. Con respuesta, según
// error.response.status: 400, 401, 403, 404 (puede usar data.message del servidor) y 500 o más.
// Cualquier otro caso: un mensaje genérico. Se usa en los toasts y en la card de error.
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError<{ message?: unknown }>(error)) {
    const message = error.response?.data?.message
    if (typeof message === 'string' && message.trim()) return message
  }
  return 'Ocurrió un error'
}
