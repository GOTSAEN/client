import { auth } from '..'
import { ApiResponse, ErrorResponse } from '../response'

export const signIn = (data) => {
  console.log('SignIn 함수 진입')
  return auth
    .post('/login', data)
    .then((res) => ApiResponse(res))
    .catch((e) => ErrorResponse(e))
}
