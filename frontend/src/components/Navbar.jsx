import { Link } from 'react-router-dom'

function Navbar() {
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
      </div>
    </header>
  )
}

export default Navbar