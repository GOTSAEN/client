import axios, { AxiosInstance } from 'axios'
import { setInterceptors } from './interceptors'
axios.defaults.withCredentials = true

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
  })
  return setInterceptors(instance)
}

function createInstanceNoAuth(url) {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
  })
}

export const instance = createInstanceWithAuth('')
export const example = createInstanceWithAuth('example')
