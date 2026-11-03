import { create } from 'zustand'
import type { AuthUser, LoginResponse } from '../types'

interface AuthState {
  user: AuthUser | null
  accessToken: string | null
  refreshToken: string | null
  setSession: (login: LoginResponse) => void
  setTokens: (accessToken: string, refreshToken: string) => void
  logout: () => void
}

// TODO 1.2 (Autenticación): reemplace este store provisional por uno real con el middleware persist
// (clave 'auth-storage'): setSession guarda usuario y tokens, setTokens actualiza solo los tokens
// y logout los limpia.
export const useAuthStore = create<AuthState>()(() => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  setSession: () => {},
  setTokens: () => {},
  logout: () => {},
}))
