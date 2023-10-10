import { deleteUserSession } from '@/service/login-auth'

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      config.headers.Authorization =
        localStorage.getItem('Authorization')
      config.headers.Refresh =
        localStorage.getItem('Refresh')
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
        error.response?.status === 403
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
