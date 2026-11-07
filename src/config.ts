// URL base de la API. Se lee de VITE_API_URL y, si no existe, usa la API pública del examen.
export const API_URL: string = import.meta.env.VITE_API_URL || 'https://dummyjson.com'
