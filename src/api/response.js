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
  console.log(error)
  switch (status) {
    case 400:
      throw new Error('유효하지 않은 이메일 형식입니다')
    case 401:
      throw new Error('아이디 혹은 패스워드를 확인해주세요')
    case 409:
      throw new Error('이미 존재하는 계정입니다')
    case 500:
      deleteUserSession()
      throw new Error('알수 없는 오류가 발생했습니다.')
  }
}
