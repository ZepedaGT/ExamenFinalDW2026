import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { API_URL } from '../config'
import { useAuthStore } from '../store/authStore'
import { authService } from './authService'

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

type RetriableRequestConfig = InternalAxiosRequestConfig & { _retry?: boolean }

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState()
  if (accessToken) {
    config.headers.set('Authorization', `Bearer ${accessToken}`)
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!axios.isAxiosError(error) || error.response?.status !== 401 || !error.config) {
      return Promise.reject(error)
    }

    const config = error.config as RetriableRequestConfig
    if (config._retry) {
      return Promise.reject(error)
    }
    config._retry = true

    const { refreshToken, setTokens, logout } = useAuthStore.getState()
    if (!refreshToken) {
      logout()
      window.location.assign('/login')
      return Promise.reject(error)
    }

    let tokens: Awaited<ReturnType<typeof authService.refresh>>
    try {
      tokens = await authService.refresh(refreshToken)
    } catch (refreshError: unknown) {
      logout()
      window.location.assign('/login')
      return Promise.reject(refreshError)
    }

    setTokens(tokens.accessToken, tokens.refreshToken)
    config.headers.set('Authorization', `Bearer ${tokens.accessToken}`)
    return api(config)
  },
)
