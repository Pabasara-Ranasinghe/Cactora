
import {
  createContext,
  useContext,
  useState,
} from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('cactoraUser')
      const token = localStorage.getItem('cactoraToken')

      if (savedUser && token) {
        return JSON.parse(savedUser)
      }

      return null
    } catch {
      localStorage.removeItem('cactoraUser')
      localStorage.removeItem('cactoraToken')
      return null
    }
  })

  const login = (userData, token) => {
    localStorage.setItem('cactoraToken', token)
    localStorage.setItem(
      'cactoraUser',
      JSON.stringify(userData),
    )

    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('cactoraToken')
    localStorage.removeItem('cactoraUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}