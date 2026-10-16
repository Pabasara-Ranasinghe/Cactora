
import { useEffect, useMemo, useState } from 'react'
import {
  Search,
  ChevronDown,
  Leaf,
  Sprout,
  Flower2,
  Sun,
  Info,
  X,
  ArrowRight,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import cactusSubfamilies from '../data/cactusSubfamilies.js'

function Explore() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFamily, setExpandedFamily] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  // Open a family when the page is reached from a Home page card.
  useEffect(() => {
    const familyId = searchParams.get('family')

    if (
      familyId &&
      cactusSubfamilies.some((family) => family.id === familyId)
    ) {
      setExpandedFamily(familyId)
    }
  }, [searchParams])

  const filteredFamilies = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    if (!search) return cactusSubfamilies

    return cactusSubfamilies.filter((family) => {
      const familyMatches = [
        family.name,
        family.subtitle,
        family.description,
        family.id,
      ].some((value) => value.toLowerCase().includes(search))

      const genusMatches = family.genera.some((genus) =>
        `${genus.name} ${genus.detail}`.toLowerCase().includes(search),
      )

      return familyMatches || genusMatches
    })
  }, [searchTerm])

  function toggleFamily(familyId) {
    setExpandedFamily((current) => {
      const nextFamily = current === familyId ? null : familyId

      // Keep the URL in sync with the selected family.
      const nextParams = new URLSearchParams(searchParams)

      if (nextFamily) {
        nextParams.set('family', nextFamily)
      } else {
        nextParams.delete('family')
      }

      setSearchParams(nextParams, { replace: true })

      return nextFamily
    })
  }

  function clearSearch() {
    setSearchTerm('')
  }

  function resetExplore() {
    setSearchTerm('')
    setExpandedFamily(null)
    setSearchParams({}, { replace: true })
  }

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
              From tiny mountain cacti to leafy tropical relatives,
              explore the fascinating diversity of the cactus family.
            </p>
          </div>

          <div className="family-header-decoration" aria-hidden="true">
            {cactusSubfamilies.slice(0, 3).map((family) => (
              <span key={family.id}>{family.icon}</span>
            ))}
          </div>
        </header>

        {/* Introduction */}
        <section className="family-intro">
          <div className="family-intro-icon">
            <Leaf size={23} />
          </div>

          <div>
            <h2>Explore six cactus subfamilies</h2>
            <p>
              Choose a group to discover its representative genera,
              learn about their characteristics, and find your next
              botanical favourite.
            </p>
          </div>
        </section>

        {/* Search */}
        <div className="explore-toolbar">
          <label className="explore-search family-search">
            <Search size={19} />

            <input
              type="search"
              placeholder="Search subfamilies or cactus genera..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search cactus subfamilies and genera"
            />

            {searchTerm && (
              <button
                type="button"
                className="family-search-clear"
                aria-label="Clear search"
                onClick={clearSearch}
              >
                <X size={17} />
              </button>
            )}
          </label>
        </div>

        {/* Results count */}
        <div className="explore-results-header">
          <span>Explore the subfamilies</span>
          <span>{filteredFamilies.length} of 6 groups</span>
        </div>

        {/* Family cards */}
        {filteredFamilies.length > 0 ? (
          <div className="family-grid">
            {filteredFamilies.map((family) => {
              const isExpanded = expandedFamily === family.id
              const search = searchTerm.trim().toLowerCase()

              const matchingGenera = search
                ? family.genera.filter((genus) =>
                    `${genus.name} ${genus.detail}`
                      .toLowerCase()
                      .includes(search),
                  )
                : family.genera

              const visibleGenera =
                search && matchingGenera.length > 0
                  ? matchingGenera
                  : family.genera

              return (
                <article
                  className={`family-card ${
                    isExpanded ? 'family-card-expanded' : ''
                  }`}
                  key={family.id}
                  style={{ '--family-accent': family.accent }}
                >
                  <div className="family-card-top">
                    <div className="family-card-icon" aria-hidden="true">
                      {family.icon}
                    </div>

                    <span className="family-card-number">
                      {family.number}
                    </span>
                  </div>

                  <p className="family-card-subtitle">
                    {family.subtitle}
                  </p>

                  <h2>{family.name}</h2>

                  <p className="family-card-description">
                    {family.description}
                  </p>

                  <div className="family-card-meta">
                    <span>
                      <Flower2 size={16} />
                      {family.genera.length} examples
                    </span>
                  </div>

                  <button
                    type="button"
                    className="family-expand-button"
                    aria-expanded={isExpanded}
                    aria-controls={`family-details-${family.id}`}
                    onClick={() => toggleFamily(family.id)}
                  >
                    {isExpanded
                      ? 'Show less'
                      : 'Explore subcategories'}

                    <ChevronDown
                      size={18}
                      className={
                        isExpanded ? 'family-chevron-open' : ''
                      }
                    />
                  </button>

                  {isExpanded && (
                    <div
                      className="family-subcategories"
                      id={`family-details-${family.id}`}
                    >
                      <h3>Genera and examples</h3>

                      <ul>
                        {visibleGenera.map((genus) => (
                          <li key={genus.name}>
                            <div className="family-genus-icon">
                              <Leaf size={15} />
                            </div>

                            <div>
                              <h4>{genus.name}</h4>
                              <p>{genus.detail}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <div className="explore-empty">
            <span>🌵</span>
            <h2>No matching cactus groups found</h2>
            <p>
              Try a different subfamily or genus name.
            </p>

            <button
              type="button"
              className="family-reset-button"
              onClick={resetExplore}
            >
              Show all subfamilies
            </button>
          </div>
        )}

        {/* Botanical note */}
        <section className="family-learning-note">
          <div className="family-learning-icon">
            <Info size={22} />
          </div>

          <div>
            <h2>A little botanical note</h2>
            <p>
              Cactus classification continues to evolve, and some
              taxonomic systems group these plants differently.
              Cactora presents these six groups as a learning guide.
              The examples are representative, not an exhaustive list.
            </p>
          </div>
        </section>

        {/* Bottom call to action */}
        <section className="family-bottom-cta">
          <div>
            <p className="page-label">KEEP EXPLORING</p>
            <h2>Every cactus has a story.</h2>
            <p>
              Learn about their unique adaptations, habitats, and
              fascinating characteristics.
            </p>

            <Link to="/about" className="home-text-link">
              Discover Cactora <ArrowRight size={17} />
            </Link>
          </div>

          <div className="family-cta-icon" aria-hidden="true">
            <Sun size={34} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Explore
