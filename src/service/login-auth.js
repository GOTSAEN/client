import { getMember } from '@/api/members'

export async function saveUserSession({
  authorization,
  refresh,
  usertype,
}) {
  const p1 = window.localStorage.setItem(
    'Authorization',
    authorization
  )
  const p2 = window.localStorage.setItem('Refresh', refresh)
  const p3 = window.localStorage.setItem('User', usertype)
  Promise.all([p1, p2, p3]).then(() => {
    return saveUserInfo()
  })
}

async function saveUserInfo() {
  await getMember().then((res) => {
    console.log('이메일 로컬스토리지에 저장')
    window.localStorage.setItem('Email', res.email)
    return res.email
  })
}

export function getUser() {
  return {
    email: localStorage.getItem('Email'),
    auth: localStorage.getItem('User'),
  }
}

export function deleteUserSession() {
  localStorage.removeItem('Authorization')
  localStorage.removeItem('Refresh')
  localStorage.removeItem('Email')
}
