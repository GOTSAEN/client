import axios, { AxiosInstance } from 'axios'
import { setInterceptors } from './interceptors'
import { getCookie } from '@/utils/cookie'

function createInstanceWithAuth(url) {
  const instance = axios.create({
    withCredentials: true,
    baseURL: `/api/${url}`,
    headers: {
      Authorization: getCookie('Authorization'),
      Refresh: getCookie('Refresh'),
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
export const auth = createInstanceNoAuth('auth')
export const members = createInstanceNoAuth('members')
export const authMembers = createInstanceWithAuth('members')
