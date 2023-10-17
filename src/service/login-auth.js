import { Cookies } from 'react-cookie'
const cookies = new Cookies()
export async function saveUserSession(
  {
    authorization: SESSIONID,
    refresh: Refresh,
    usertype: User,
  },
  { email: Email }
) {
  cookies.set(SESSIONID)
  cookies.set(Refresh)
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
  cookies.remove('Refresh')
  cookies.remove('Email')
}

export function getUserType() {
  return cookies.get('User')
}
