import {
  deleteCookie,
  getCookie,
  saveObjectToCookies,
} from '@/utils/cookie'

const ls = window.localStorage

export async function saveUserSession(
  {
    authorization: Authorization,
    refresh: Refresh,
    usertype: User,
  },
  { email: Email }
) {
  saveObjectToCookies({
    Authorization,
    Refresh,
    User,
    Email,
  })
}

export function getUser() {
  return {
    email: getCookie('Email'),
    auth: getCookie('User'),
  }
}

export function deleteUserSession() {
  deleteCookie('Authorization')
  deleteCookie('Refresh')
  deleteCookie('Email')
}

export function getUserType() {
  return getCookie('User')
}
