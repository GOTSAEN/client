export const setCookie = (key, value) => {
  document.cookie = key + '=' + value + ';'
}

export const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export const getCookie = (key) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${key}=`)
  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }
}
