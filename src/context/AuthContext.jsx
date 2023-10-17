import {
  deleteUserSession,
  getUser,
} from '@/service/login-auth'
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Cookies } from 'react-cookie'

const AuthContext = createContext()
const cookies = new Cookies()

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    auth: '',
  })

  const logout = () => {
    cookies.remove('SESSIONID')
    cookies.remove('Refresh')
    cookies.remove('Email')
    setUser(undefined)
  }

  const login = () => {
    setUser(getUser())
  }

  useEffect(() => {
    login()
  }, [])

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
