import axios from 'axios'
import { API_URL } from '../config'
import type { LoginResponse } from '../types'

// Cliente sin interceptores: login y refresh no deben pasar por la lógica de renovación.
const plain = axios.create({ baseURL: API_URL, timeout: 15000 })

export const authService = {
  // TODO 1.1 (Autenticación): POST /auth/login con { username, password, expiresInMins: 1 }.
  // Devuelve los datos del usuario y los tokens (LoginResponse).
  login: async (username: string, password: string): Promise<LoginResponse> => {
    void plain
    void username
    void password
    throw new Error('login no implementado')
  },

  // TODO 1.3 (Autenticación): POST /auth/refresh con { refreshToken, expiresInMins: 1 }.
  // Devuelve el nuevo accessToken y refreshToken.
  refresh: async (refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> => {
    void refreshToken
    throw new Error('refresh no implementado')
  },
}
