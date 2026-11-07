import axios from 'axios'
import { API_URL } from '../config'
import type { LoginResponse } from '../types'

// Cliente sin interceptores: login y refresh no deben pasar por la lógica de renovación.
const plain = axios.create({ baseURL: API_URL, timeout: 15000 })

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const { data } = await plain.post<LoginResponse>('/auth/login', {
      username,
      password,
      expiresInMins: 1,
    })
    return data
  },

  refresh: async (refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> => {
    const { data } = await plain.post<{ accessToken: string; refreshToken: string }>(
      '/auth/refresh',
      { refreshToken, expiresInMins: 1 },
    )
    return data
  },
}
