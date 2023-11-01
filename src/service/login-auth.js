import { Cookies } from 'react-cookie'
const cookies = new Cookies()
export async function saveUserSession(
  {
    authorization: SESSIONID,
    refresh: RENEW,
    usertype: User,
  },
  { email: Email }
) {
  console.log('object')
  cookies.set(SESSIONID)
  cookies.set(RENEW)
  cookies.set(User)
  cookies.set(Email)
}

export function getUser() {
  return {
    email: cookies.get('Email'),
    auth: cookies.get('User'),
  }
}

export function deleteUserSession() {
  cookies.remove('SESSIONID')
  cookies.remove('RENEW')
  cookies.remove('Email')
}

export function getUserType() {
  return cookies.get('User')
}
export function saveUserType(type) {
  return cookies.set('User', type)
}
