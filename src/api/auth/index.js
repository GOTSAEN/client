import { auth } from '..'
import { ApiResponse } from '../response'

export const signIn = (data) => {
  return auth
    .post('/login', data)
    .then((res) => ApiResponse(res))
}
