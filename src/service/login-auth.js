export function saveUserSession({
  authorization,
  refresh,
}) {
  window.localStorage.setItem(
    'Authorization',
    authorization
  )
  window.localStorage.setItem('Refresh', refresh)
}
