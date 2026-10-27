import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

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
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/about">About</Link>
          <Link to="/ai">Cactora AI</Link>
          <Link to="/contact">Contact</Link>
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

        </div>
      </div>
    </header>
  )
}

export default Navbar