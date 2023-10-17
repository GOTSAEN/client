export function setCookie(key, value) {
  document.cookie = `${key}=${encodeURIComponent(value)}`
}

export function getCookie(key) {
  const cookieValue = document.cookie.match(
    '(^|;) ?' + key + '=([^;]*)(;|$)'
  )
  return cookieValue
    ? decodeURIComponent(cookieValue[2])
    : null
}

export function saveObjectToCookies(obj) {
  for (let key in obj) {
    let value = obj[key]
    setCookie(key, value)
  }
}

export function getObjectFromCookies(keys) {
  let result = {}
  keys.forEach((key) => {
    let value = getCookie(key)
    if (value !== null) {
      result[key] = value
    }
  })
  return result
}

export function deleteCookie(key) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
