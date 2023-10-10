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

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    auth: '',
  })

  const logout = () => {
    deleteUserSession()
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
