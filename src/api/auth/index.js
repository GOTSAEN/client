import { auth } from '..'

export const login = (data) => {
  return auth
    .post('/login', data)
    .then((res) => res)
    .catch((e) => e)
}
