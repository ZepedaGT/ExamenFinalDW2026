import axios from 'axios'

export function getErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) {
    return 'Ocurrió un error inesperado.'
  }
  if (!error.response) {
    return 'Sin conexión con el servidor. Verifique su conexión a internet.'
  }

  const data: unknown = error.response.data
  const serverMessage =
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof data.message === 'string' &&
    data.message.trim()
      ? data.message
      : null

  switch (error.response.status) {
    case 400:
      return serverMessage ?? 'La solicitud no es válida. Revise los datos ingresados.'
    case 401:
      return serverMessage ?? 'Credenciales incorrectas o sesión expirada.'
    case 403:
      return serverMessage ?? 'No tiene permiso para realizar esta acción.'
    case 404:
      return serverMessage ?? 'No se encontró el recurso solicitado.'
    default:
      if (error.response.status >= 500) {
        return serverMessage ?? 'El servidor tuvo un problema. Inténtelo más tarde.'
      }
      return 'Ocurrió un error inesperado.'
  }
}
