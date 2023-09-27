import axios, { AxiosInstance } from 'axios'
import { setInterceptors } from './interceptors'
axios.defaults.withCredentials = true

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `/api/${url}`,
    headers: {
      Authorization: localStorage.getItem('Authorization'),
      Refresh: localStorage.getItem('Refresh'),
    },
  })
  return setInterceptors(instance)
}

function createInstanceNoAuth(url) {
  return axios.create({
    baseURL: `/api/${url}`,
  })
}

export const instance = createInstanceWithAuth('')
export const categories = createInstanceNoAuth('categories')
export const ads = createInstanceWithAuth('advertisement')
export const auth = createInstanceWithAuth('auth')
export const members = createInstanceNoAuth('members')
