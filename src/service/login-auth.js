export async function saveUserSession(
  { authorization, refresh, usertype },
  { email }
) {
  window.localStorage.setItem(
    'Authorization',
    authorization
  )
  window.localStorage.setItem('Refresh', refresh)
  window.localStorage.setItem('User', usertype)
  window.localStorage.setItem('Email', email)
}

export function getUser() {
  return {
    email: window.localStorage.getItem('Email'),
    auth: window.localStorage.getItem('User'),
  }
}

export function deleteUserSession() {
  localStorage.removeItem('Authorization')
  localStorage.removeItem('Refresh')
  localStorage.removeItem('Email')
}
