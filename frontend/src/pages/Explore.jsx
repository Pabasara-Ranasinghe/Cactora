import { useEffect, useState } from 'react'
import { Search, SlidersHorizontal, Sun, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getAllCacti } from '../services/cactusService.js'

function CactusCard({ cactus }) {
  return (
    <Link
      to={`/explore/${cactus.id}`}
      className="cactus-card-link"
    >
      <article className="cactus-card">
      <div className="cactus-card-image">
        <span>🌵</span>
      </div>

      <div className="cactus-card-content">
        <span className="cactus-card-category">
          {cactus.category}
        </span>

        <h2>{cactus.commonName}</h2>

        <p className="cactus-card-scientific">
          {cactus.scientificName}
        </p>

        <div className="cactus-card-details">
          <span>
            <Sun size={15} />
            {cactus.sunlight}
          </span>

          <span>
            <Droplets size={15} />
            {cactus.watering}
          </span>
        </div>
      </div>
    </article>
    </Link>
  )
}

function Explore() {
  const [cacti, setCacti] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadCacti() {
      try {
        const data = await getAllCacti()
        setCacti(data)
      } catch (err) {
        console.error('Failed to load cacti:', err)
        setError('Unable to load cactus data.')
      } finally {
        setLoading(false)
      }
    }

    loadCacti()
  }, [])

  const filteredCacti = cacti.filter((cactus) => {
  const search = searchTerm.toLowerCase().trim()

  return (
    cactus.commonName.toLowerCase().includes(search) ||
    cactus.scientificName.toLowerCase().includes(search) ||
    cactus.category.toLowerCase().includes(search)
  )
})

  return (
    <section className="explore-page">
      <div className="explore-container">

        <div className="explore-header">
          <div>
            <p className="page-label">Cactus Explorer</p>

            <h1 className="explore-title">
              Discover your next cactus.
            </h1>

            <p className="explore-description">
              Explore different cactus species and learn
              about their characteristics, origins, and care.
            </p>
          </div>
        </div>

        <div className="explore-toolbar">
          <div className="explore-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search cactus species..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <button
            type="button"
            className="explore-filter-button"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <div className="explore-results-header">
          <span>Popular species</span>
          <span>
            {filteredCacti.length} species
          </span>
        </div>

        {loading && (
          <p className="explore-status">
            Loading cactus species...
          </p>
        )}

        {error && (
          <p className="explore-status explore-error">
            {error}
          </p>
        )}

        {!loading && !error && filteredCacti.length > 0 && (
          <div className="cactus-grid">
            {filteredCacti.map((cactus) => (
              <CactusCard
                key={cactus.id}
                cactus={cactus}
              />
            ))}
          </div>
        )}

        {!loading && !error && filteredCacti.length === 0 && (
          <div className="explore-empty">
            <span>🌵</span>

            <h2>No cactus species found</h2>

            <p>
              Try searching with a different name, scientific name,
              or category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Explore