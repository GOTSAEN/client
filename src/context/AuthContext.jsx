import { deleteCookiesWithRootPath, getUser } from '@/service/login-auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

const AuthContext = createContext({ user: undefined, logout: () => {} });
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
    deleteCookiesWithRootPath();
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
