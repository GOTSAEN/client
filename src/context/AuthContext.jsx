import { deleteUserSession } from '@/service/login-auth'
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined)

  const logout = () => {
    deleteUserSession()
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
