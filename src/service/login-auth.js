import { getMember } from '@/api/members'
import {
  deleteCookie,
  getCookie,
  setCookie,
} from '@/utils/cookie'
export async function saveUserSession({
  authorization,
  refresh,
}) {
  const p1 = setCookie('Authorization', authorization)
  const p2 = setCookie('Refresh', refresh)
  Promise.all([p1, p2]).then(() => {
    saveUserInfo()
  })
}

async function saveUserInfo() {
  await getMember().then((res) =>
    setCookie('Email', res.email)
  )
}

export function getUser() {
  return {
    email: getCookie('Email'),
  }
}

export function deleteUserSession() {
  deleteCookie('Authorization')
  deleteCookie('Refresh')
  deleteCookie('Email')
}
