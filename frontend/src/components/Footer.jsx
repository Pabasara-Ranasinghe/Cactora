
import { Link } from 'react-router-dom';
import { Leaf, ArrowUpRight } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cactora-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                🌵
              </span>
              <span>Cactora</span>
            </Link>

            <p className="footer-description">
              Discover the wonderful world of cacti.
              Learn, explore, and grow your knowledge
              with a community that shares your passion
              for these remarkable plants.
            </p>

            <span className="footer-tagline">
              <Leaf size={14} />
              Rooted in knowledge, growing together.
            </span>
          </div>

          {/* Explore links */}
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore Cacti</Link>
            <Link to="/genera">Cactus Genera</Link>
            <Link to="/cactoideae">Cactoideae Guide</Link>
          </div>

          {/* Information links */}
          <div className="footer-column">
            <h3>Discover</h3>
            <Link to="/about">About Cactora</Link>
            <Link to="/ai">Cactora AI</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Community */}
          <div className="footer-column footer-community">
            <h3>Join Our Community</h3>
            <p>
              Have a cactus story to share or something new to learn?
              We would love to hear from you.
            </p>
            <Link to="/contact" className="footer-contact-link">
              Let's connect
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Cactora. All rights reserved.
          </p>

          <p className="footer-made-with">
            Made with <span aria-label="love">🤍</span> for cactus lovers
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
