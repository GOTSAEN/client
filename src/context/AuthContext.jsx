import { deleteUserSession, getUser } from '@/service/login-auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

const AuthContext = createContext();
const cookies = new Cookies();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    auth: '',
  });
  const login = (data) => {
    const { authorization, refresh, usertype, email } = data;
    cookies.set('SESSIONID', authorization);
    cookies.set('RENEW', refresh);
    cookies.set('User', usertype);
    cookies.set('Email', email);
    setUser({
      email,
      auth: usertype,
    });
  };
  const logout = () => {
    console.log('로그아웃합니다');
    cookies.remove('SESSIONID');
    cookies.remove('RENEW');
    cookies.remove('Email');
    cookies.remove('Refresh');
    cookies.remove('Authorization');
    setUser(undefined);
  };

  const checkAuth = () => {
    setUser(getUser());
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <AuthContext.Provider value={{ user, logout, login, checkAuth }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
