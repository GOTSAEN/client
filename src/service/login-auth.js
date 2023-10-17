const ls = window.localStorage

export async function saveUserSession(
  { authorization, refresh, usertype },
  { email }
) {
  ls.setItem('Authorization', authorization)
  ls.setItem('Refresh', refresh)
  ls.setItem('User', usertype)
  ls.setItem('Email', email)
}

export function getUser() {
  return {
    email: ls.getItem('Email'),
    auth: ls.getItem('User'),
  }
}

export function deleteUserSession() {
  ls.removeItem('Authorization')
  ls.removeItem('Refresh')
  ls.removeItem('Email')
}

export function getUserType() {
  return ls.getItem('User')
}
