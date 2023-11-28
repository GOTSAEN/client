import { Cookies } from 'react-cookie';
const cookies = new Cookies();
export async function saveUserSession({ authorization, refresh, usertype }, { email }) {
  cookies.set('SESSIONID', authorization);
  cookies.set('RENEW', refresh);
  cookies.set('User', usertype);
  cookies.set('Email', email);
}

export function getUser() {
  return {
    email: cookies.get('Email'),
    auth: cookies.get('User'),
  };
}

export function deleteUserSession() {
  cookies.remove('SESSIONID');
  cookies.remove('RENEW');
  cookies.remove('Email');
}

export function getUserType() {
  return cookies.get('User');
}
export function saveUserType(type) {
  return cookies.set('User', type);
}
