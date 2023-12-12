import { Cookies } from 'react-cookie';
const cookies = new Cookies();
export async function saveUserSession({ authorization, refresh, usertype }, { email }) {
  cookies.set('SESSIONID', authorization);
  cookies.set('RENEW', refresh);
  cookies.set('User', usertype);
  cookies.set('Email', email);
}

export function deleteCookiesWithRootPath() {
  const allCookies = cookies.getAll();
  // Path가 '/'인 쿠키들 삭제
  Object.keys(allCookies).forEach((cookieName) => {
    if (cookieName !== 'User') cookies.remove(cookieName, { path: '/' });
  });
}

export function getUser() {
  return {
    email: cookies.get('Email'),
    auth: cookies.get('User'),
  };
}

export function getUserType() {
  return cookies.get('User');
}
export function saveUserType(type) {
  return cookies.set('User', type);
}
