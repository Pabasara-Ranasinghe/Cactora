import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <Sparkles size={16} />
              <span>THE WORLD OF CACTI</span>
            </div>

            <h1 className="hero-title">
              Discover.
              <br />
              <span>Learn. Grow.</span>
            </h1>

            <p className="hero-description">
              Explore fascinating cactus species, discover
              how they thrive, and learn everything you need
              to grow them with confidence.
            </p>

            <div className="hero-actions">
              <Link to="/explore" className="hero-primary-button">
                Explore Cacti
                <ArrowRight size={18} />
              </Link>

              <Link to="/ai" className="hero-secondary-button">
                Meet Cactora AI
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <span className="hero-cactus">🌵</span>
            </div>

            <div className="hero-card hero-card-top">
              <span>🌱</span>
              <div>
                <strong>Grow Knowledge</strong>
                <small>One cactus at a time.</small>
              </div>
            </div>

            <div className="hero-card hero-card-bottom">
              <span>💧</span>
              <div>
                <strong>Better Care</strong>
                <small>Learn what your cactus needs.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home