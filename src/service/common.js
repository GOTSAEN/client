export const checkSameValue = (a, b) => {
  if (a === b) return true;
  else return false;
};

export const validatePassword = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
};

export const formatDate = (inputDate) => {
  const [year, month, day] = inputDate.split('-').map((item) => item.padStart(2, '0'));
  return `${year}-${month}-${day}`;
};
