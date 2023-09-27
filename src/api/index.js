import axios, { AxiosInstance } from 'axios'
import { setInterceptors } from './interceptors'
axios.defaults.withCredentials = true

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `/api/${url}`,
  })
  return setInterceptors(instance)
}

function createInstanceNoAuth(url) {
  return axios.create({
    baseURL: `/${url}`,
  })
}

export const instance = createInstanceWithAuth('')
export const categories =
  createInstanceWithAuth('categories')
export const ads = createInstanceWithAuth('advertisement')
export const auth = createInstanceWithAuth('auth')
