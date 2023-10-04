import { getMember } from '@/api/members'

export async function saveUserSession({
  authorization,
  refresh,
}) {
  window.localStorage.setItem(
    'Authorization',
    authorization
  )
  window.localStorage.setItem('Refresh', refresh)
  const user = await getMember()
  console.log(user.email)
  window.localStorage.setItem('User', user.email)
}

export function deleteUserSession() {
  localStorage.removeItem('Authorization')
  localStorage.removeItem('Refresh')
  localStorage.removeItem('User')
}
