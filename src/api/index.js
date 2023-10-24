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
    baseURL: `/api/${url}`,
  })
}

export const instance = createInstanceWithAuth('')
export const categories = createInstanceNoAuth('categories')
export const search = createInstanceNoAuth('search')
export const authAds =
  createInstanceWithAuth('advertisement')
export const ads = createInstanceNoAuth('advertisement')

export const auth = createInstanceNoAuth('auth')
export const members = createInstanceNoAuth('members')
export const authMembers = createInstanceWithAuth('members')
export const partnerAds = createInstanceWithAuth(
  'members/advertisement'
)
