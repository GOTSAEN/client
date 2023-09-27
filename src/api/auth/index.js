import { auth } from '..'

export const login = (data) => {
  auth
    .post('/login', data)
    .then((res) => res.data)
    .catch((e) => console.log(e))
}
