import { auth } from '..'

export const signIn = (data) => {
  return auth
    .post('/login', data)
    .then((res) => res)
    .catch((e) => e)
}
