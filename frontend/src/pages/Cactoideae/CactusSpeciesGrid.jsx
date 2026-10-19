
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf } from 'lucide-react'
import cactusSpecies from '../../data/cactusSpecies'
import ScientificNameVoice from '../../components/ScientificNameVoice'
import './CactusSpeciesGrid.css'
import useCactusImage from '../../hooks/useCactusImage'


function CactusSpeciesImage({ species }) {
  const { imageUrl, loading } = useCactusImage(
    species.scientificName,
    species.imageUrl
  )

  return (
    <>
      {imageUrl ? (
        <img
          className="cactus-species-image"
          src={imageUrl}
          alt={species.imageAlt || species.commonName}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            event.currentTarget.nextElementSibling.style.display = 'flex'
          }}
        />
      ) : null}

      <div
        className="cactus-species-image-fallback"
        style={{
          display: imageUrl ? 'none' : 'flex',
        }}
      >
        <Leaf size={42} />
        <span>{loading ? 'Finding a cactus photo...' : 'Photo unavailable'}</span>
      </div>
    </>
  )
}

function CactusSpeciesGrid() {
  const speciesList = cactusSpecies.filter(
    (species) => species.subfamily === 'Cactoideae'
  )

  return (
    <section className="cactus-species-section">
      <div className="cactus-species-heading">
        <span className="cactus-species-eyebrow">
          <Leaf size={16} />
          EXPLORE THE COLLECTION
        </span>

        <h2>Cacti Belonging to This Subfamily</h2>

        <p>
          Discover the fascinating diversity of Cactoideae, from towering
          desert giants to small flowering and trailing cacti.
        </p>

        <div className="cactus-species-count">
          {speciesList.length} species in the collection
        </div>
      </div>

      <div className="cactus-species-grid">
        {speciesList.map((species) => (
          <article className="cactus-species-card" key={species.id}>
            <Link
              to={`/cacti/${species.id}`}
              className="cactus-species-image-link"
              aria-label={`Explore ${species.commonName}`}
            >
              <CactusSpeciesImage species={species} />

              <span className="cactus-species-image-badge">
                Cactoideae
              </span>
            </Link>

            <div className="cactus-species-card-content">
              <h3>{species.commonName}</h3>

              <div className="cactus-species-scientific-row">
                <span className="cactus-species-scientific">
                  {species.scientificName}
                </span>

                <ScientificNameVoice
                  name={species.scientificName}
                />
              </div>

              <p className="cactus-species-description">
                {species.growthHabitAndSize}
              </p>

              <Link
                to={`/cacti/${species.id}`}
                className="cactus-species-explore"
              >
                Explore species
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CactusSpeciesGrid
