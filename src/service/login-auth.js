import { getMember } from '@/api/members'

export async function saveUserSession({
  authorization,
  refresh,
}) {
  const p1 = window.localStorage.setItem(
    'Authorization',
    authorization
  )
  const p2 = window.localStorage.setItem('Refresh', refresh)
  Promise.all([p1, p2]).then(() => {
    saveUserInfo()
  })
}

async function saveUserInfo() {
  const user = await getMember()
  window.localStorage.setItem('Email', user.email)
}

export function getUser() {
  return {
    email: localStorage.getItem('Email'),
  }
}

export function deleteUserSession() {
  localStorage.removeItem('Authorization')
  localStorage.removeItem('Refresh')
  localStorage.removeItem('Email')
}
