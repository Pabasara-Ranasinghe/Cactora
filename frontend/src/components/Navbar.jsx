
import { Moon, Sun, LogOut, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">🌵</span>
          <span className="navbar-name">Cactora</span>
        </Link>

        {/* Navigation */}
        <nav className="navbar-links">
          <Link to="/explore">Explore</Link>
          <Link to="/about">About</Link>
          <Link to="/ai">Cactora AI</Link>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
          >
            {theme === 'light' ? (
              <Moon size={19} strokeWidth={2} />
            ) : (
              <Sun size={19} strokeWidth={2} />
            )}
          </button>

          {isAuthenticated ? (
            <>
              {/* Logged-in User */}
              <span className="navbar-user">
                <UserRound size={18} />
                <span>{user.fullName}</span>
              </span>

              {/* Logout */}
              <button
                type="button"
                className="navbar-logout"
                onClick={handleLogout}
              >
                <LogOut size={17} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link to="/login" className="navbar-login">
                Login
              </Link>

              {/* Register */}
              <Link to="/register" className="navbar-register">
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </header>
  )
}

export default Navbar