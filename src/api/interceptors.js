import { deleteUserSession } from '@/service/login-auth'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      config.headers.Authorization =
        cookies.get('SESSIONID')
      config.headers.Refresh = cookies.get('RENEW')
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      let { data } = error.response
      if (
        data.code === 101 ||
        error.response?.status === 403 ||
        error.response?.status === 500
      ) {
        // logout()
        deleteUserSession()
      } else if (data.code === 205) {
        console.log('bad-request')
      }

      return Promise.reject(error)
    }
  )
  return instance
}
