
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Leaf, Search, ArrowRight } from 'lucide-react'
import cactusGenera from '../data/cactusGenera'
import cactusSpecies from '../data/cactusSpecies'
import useCactusImage from '../hooks/useCactusImage'
import ScientificNameVoice from '../components/ScientificNameVoice'
import './GenusSpecies.css'

function getSpeciesGenus(scientificName = '') {
  const name = scientificName.trim()

  // Handle records that describe a cultivated form rather than
  // beginning with its botanical genus.
  if (/^grafted\s+gymnocalycium/i.test(name)) {
    return 'Gymnocalycium'
  }

  if (/^echinopsis\s+cultivar/i.test(name)) {
    return 'Echinopsis'
  }

  return name.split(/\s+/)[0].replace(/^×/, '')
}

function normalizeGenusName(name = '') {
  return name
    .replace(/×/g, '')
    .trim()
    .toLowerCase()
}

function SpeciesImage({ cactus }) {
  const { imageUrl, loading } = useCactusImage(
    cactus.scientificName,
    cactus.imageUrl || ''
  )

  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="genus-species-image">
      {imageUrl && !imageFailed ? (
        <img
          src={imageUrl}
          alt={cactus.imageAlt || cactus.commonName}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="genus-species-image-fallback">
          <Leaf size={36} />
          <span>
            {loading ? 'Finding a cactus photo...' : 'Photo unavailable'}
          </span>
        </div>
      )}
    </div>
  )
}

function GenusSpecies() {
  const { id } = useParams()
  const [searchTerm, setSearchTerm] = useState('')

  const genus = cactusGenera.find((item) => item.id === id)

  const genusSpecies = useMemo(() => {
    if (!genus) return []

    const targetGenus = normalizeGenusName(genus.name)

    return cactusSpecies.filter((cactus) => {
      const speciesGenus = normalizeGenusName(
        getSpeciesGenus(cactus.scientificName)
      )

      return speciesGenus === targetGenus
    })
  }, [genus])

  const filteredSpecies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) return genusSpecies

    return genusSpecies.filter((cactus) =>
      [
        cactus.commonName,
        cactus.scientificName,
        cactus.growthHabitAndSize,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [genusSpecies, searchTerm])

  if (!genus) {
    return (
      <main className="genus-species-page">
        <div className="genus-species-empty">
          <Leaf size={44} />
          <h1>Genus Not Found</h1>
          <p>We couldn't find this genus in the Cactora collection.</p>
          <Link to="/genera" className="genus-species-back">
            <ArrowLeft size={18} />
            Back to genera
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="genus-species-page">
      <div className="genus-species-container">
        <Link to="/genera" className="genus-species-back">
          <ArrowLeft size={18} />
          Back to genera
        </Link>

        <section className="genus-species-hero">
          <span className="genus-species-eyebrow">
            <Leaf size={16} />
            THE CACTORA COLLECTION
          </span>

          <div className="genus-species-title-row">
            <h1>{genus.name}</h1>
            <ScientificNameVoice
              name={genus.scientificName || genus.name}
            />
          </div>

          <p>{genus.description}</p>

          <div className="genus-species-summary">
            <span>{genus.subfamily}</span>
            <span>
              {genusSpecies.length}{' '}
              {genusSpecies.length === 1 ? 'species' : 'species'} in our
              current collection
            </span>
          </div>
        </section>

        <section className="genus-species-content">
          <div className="genus-species-heading">
            <div>
              <h2>Explore {genus.name}</h2>
              <p>
                Discover the cacti currently listed under this genus.
              </p>
            </div>

            <span className="genus-species-count">
              {filteredSpecies.length}{' '}
              {filteredSpecies.length === 1 ? 'result' : 'results'}
            </span>
          </div>

          {genusSpecies.length > 0 && (
            <div className="genus-species-search">
              <Search size={20} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search species in this genus..."
                aria-label={`Search ${genus.name} species`}
              />
            </div>
          )}

          {filteredSpecies.length > 0 ? (
            <div className="genus-species-grid">
              {filteredSpecies.map((cactus) => (
                <article className="genus-species-card" key={cactus.id}>
                  <SpeciesImage cactus={cactus} />

                  <div className="genus-species-card-content">
                    <span className="genus-species-card-label">
                      {cactus.subfamily}
                    </span>

                    <h3>{cactus.commonName}</h3>

                    <p className="genus-species-scientific">
                      {cactus.scientificName}
                    </p>

                    <p className="genus-species-description">
                      {cactus.growthHabitAndSize}
                    </p>

                    <Link
                      to={`/cacti/${cactus.id}`}
                      className="genus-species-explore"
                    >
                      Explore cactus
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="genus-species-empty">
              <Leaf size={42} />

              <h3>
                {genusSpecies.length === 0
                  ? 'No species added yet'
                  : 'No matching species found'}
              </h3>

              <p>
                {genusSpecies.length === 0
                  ? `We haven't added any matching ${genus.name} species to the collection yet.`
                  : 'Try another search term.'}
              </p>

              {searchTerm && (
                <button
                  type="button"
                  className="genus-species-clear"
                  onClick={() => setSearchTerm('')}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default GenusSpecies
