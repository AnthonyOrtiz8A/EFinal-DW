import axios from 'axios'
import { API_URL } from '../config'

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

// TODO 1.3 (Autenticación): agregue dos interceptores a 'api'.
// a) De petición: si hay accessToken en el store, enviarlo en Authorization: Bearer <token>.
// b) De respuesta: ante un 401 (token vencido) intente UNA sola vez renovar con authService.refresh,
//    guarde los tokens nuevos con setTokens y repita la petición original. Si la renovación falla,
//    llame a logout() y lleve al usuario a /login.
