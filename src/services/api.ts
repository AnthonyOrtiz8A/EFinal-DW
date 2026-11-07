import axios, { type InternalAxiosRequestConfig } from 'axios'
import { API_URL } from '../config'
import { authService } from './authService'
import { useAuthStore } from '../store/authStore'

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

type RetryConfig = InternalAxiosRequestConfig & { _retry?: boolean }

let refreshRequest: Promise<{ accessToken: string; refreshToken: string }> | null = null

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState()
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!axios.isAxiosError(error) || error.response?.status !== 401 || !error.config) {
      return Promise.reject(error)
    }

    const originalRequest = error.config as RetryConfig
    if (originalRequest._retry) return Promise.reject(error)
    originalRequest._retry = true

    const { refreshToken, setTokens, logout } = useAuthStore.getState()
    if (!refreshToken) {
      logout()
      window.location.assign('/login')
      return Promise.reject(error)
    }

    try {
      refreshRequest ??= authService.refresh(refreshToken)
      const tokens = await refreshRequest
      setTokens(tokens.accessToken, tokens.refreshToken)
      originalRequest.headers.set('Authorization', `Bearer ${tokens.accessToken}`)
      return await api(originalRequest)
    } catch (refreshError) {
      logout()
      window.location.assign('/login')
      return Promise.reject(refreshError)
    } finally {
      refreshRequest = null
    }
  },
)
