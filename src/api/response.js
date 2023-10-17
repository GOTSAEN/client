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
  console.log('에러 진입 : ', error)
  const status = error.response.status
  switch (status) {
    case 401:
      throw new Error({
        status,
        message: '잘못된 로그인 정보입니다',
      })
    case 409:
      throw new Error({
        ...error,
      })
    default:
      console.log('들어옴')
      deleteUserSession()
      throw new Error({
        status: 500,
        message: '알수 없는 오류가 발생했습니다.',
      })
  }
}
