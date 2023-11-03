export const checkSameValue = (a, b) => {
  if (a === b) return true
  else return false
}

export const validatePassword = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  return regex.test(password)
}
