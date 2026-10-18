
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Leaf,
  Search,
  Sprout,
  Telescope,
  Flower2,
} from 'lucide-react'

function Explore() {
  return (
    <main className="explore-page">
      <div className="explore-container">

        {/* Page heading */}
        <header className="explore-header family-explore-header">
          <div>
            <p className="page-label">
              <Sprout size={16} />
              THE CACTUS COLLECTION
            </p>

            <h1 className="explore-title">
              Discover the world of <span>cacti.</span>
            </h1>

            <p className="explore-description">
              Explore the incredible diversity of cacti.
              Search by genus or discover the fascinating
              subfamilies that make up the cactus family.
            </p>
          </div>

          <div
            className="family-header-decoration"
            aria-hidden="true"
          >
            <span>🌵</span>
            <span>🌱</span>
            <span>🌵</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="family-intro">
          <div className="family-intro-icon">
            <Leaf size={23} />
          </div>

          <div>
            <h2>Where would you like to begin?</h2>
            <p>
              Choose your preferred way to explore Cactora's
              botanical collection.
            </p>
          </div>
        </section>

        {/* Explore options */}
        <section className="explore-options-grid">

          {/* Search by Genus */}
          <article className="explore-option-card genus-option-card">
            <div className="explore-option-icon">
              <Search size={29} />
            </div>

            <span className="explore-option-label">
              FIND A CACTUS
            </span>

            <h2>Search by Genus</h2>

            <p>
              Looking for a particular cactus genus? Search
              the collection, discover scientific names,
              learn about characteristics, and explore
              the species within each genus.
            </p>

            <Link
              to="/genera"
              className="explore-option-button"
            >
              Search by Genus
              <ArrowRight size={18} />
            </Link>

            <div
              className="explore-option-decoration"
              aria-hidden="true"
            >
              <Telescope size={100} />
            </div>
          </article>

          {/* Explore by Subfamilies */}
          <article className="explore-option-card subfamily-option-card">
            <div className="explore-option-icon">
              <Flower2 size={29} />
            </div>

            <span className="explore-option-label">
              EXPLORE THE CLASSIFICATION
            </span>

            <h2>Explore by Subfamilies</h2>

            <p>
              Discover the six cactus subfamilies, learn
              about their unique characteristics, and
              explore representative genera in each group.
            </p>

            <Link
              to="/subfamilies"
              className="explore-option-button"
            >
              Explore Subfamilies
              <ArrowRight size={18} />
            </Link>

            <div
              className="explore-option-decoration"
              aria-hidden="true"
            >
              <Leaf size={100} />
            </div>
          </article>

        </section>

        {/* Bottom note */}
        <section className="family-learning-note">
          <div className="family-learning-icon">
            <Leaf size={22} />
          </div>

          <div>
            <h2>Discover something new</h2>
            <p>
              Whether you're learning botanical names or
              exploring plant classifications, Cactora
              helps you discover the fascinating world of
              cacti one step at a time.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}

export default Explore
