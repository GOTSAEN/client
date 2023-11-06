import { deleteUserSession } from '@/service/login-auth'

export function ApiResponse(response) {
  console.log('응답 진입 : ', response)
  const status = response.status

  switch (status) {
    case 200:
    case 201:
      return response
  }
}

export function ErrorResponse(error) {
  const status = error.response.status
  const message = error.response.data.message
  console.log(error.response)
  switch (status) {
    case 500:
      // deleteUserSession()
      // window.location.href = '/login'
      throw new Error('알수 없는 오류가 발생했습니다.')
    default:
      throw new Error(message)
  }
}
