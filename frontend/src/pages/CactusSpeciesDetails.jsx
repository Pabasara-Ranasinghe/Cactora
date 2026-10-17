
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Leaf, Sun, Droplets, Sprout, Thermometer, Flower2 } from 'lucide-react'
import cactusSpecies from '../data/cactusSpecies'
import './CactusSpeciesDetails.css'

function CactusSpeciesDetails() {
  const { id } = useParams()

  const cactus = cactusSpecies.find((species) => species.id === id)

  if (!cactus) {
    return (
      <main className="cactus-detail-page">
        <div className="cactus-detail-container cactus-not-found">
          <Leaf size={48} />
          <h1>Cactus Not Found</h1>
          <p>We couldn't find this cactus in the Cactora collection.</p>
          <Link to="/explore" className="cactus-detail-back">
            <ArrowLeft size={18} /> Back to Explore
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cactus-detail-page">
      <div className="cactus-detail-container">
        <Link to="/explore" className="cactus-detail-back">
          <ArrowLeft size={18} />
          Back to Explore
        </Link>

        <section className="cactus-detail-hero">
          <div className="cactus-detail-photo">
            {cactus.imageUrl ? (
              <img
                src={cactus.imageUrl}
                alt={cactus.imageAlt || cactus.commonName}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
            ) : null}

            <div
              className="cactus-detail-photo-fallback"
              style={{ display: cactus.imageUrl ? 'none' : 'flex' }}
            >
              <Leaf size={64} />
              <span>Image coming soon</span>
            </div>
          </div>

          <div className="cactus-detail-intro">
            <span className="cactus-detail-label">
              <Leaf size={16} /> CACTOIDEAE
            </span>

            <h1>{cactus.commonName}</h1>
            <p className="cactus-detail-scientific">
              {cactus.scientificName}
            </p>

            <p className="cactus-detail-description">
              {cactus.growthHabitAndSize}
            </p>

            <div className="cactus-detail-native">
              <h3>Native Range & Hardiness</h3>
              <p>{cactus.hardinessAndNativeRange}</p>
            </div>
          </div>
        </section>

        <section className="cactus-detail-section">
          <h2>Discover This Cactus</h2>
          <div className="cactus-detail-info-card">
            <Flower2 size={24} />
            <div>
              <h3>Special Characteristics</h3>
              <p>{cactus.specialTraits}</p>
            </div>
          </div>
        </section>

        <section className="cactus-detail-section">
          <h2>Growing & Care Guide</h2>

          <div className="cactus-detail-care-grid">
            <article className="cactus-detail-care-card">
              <Sun size={25} />
              <h3>Sunlight</h3>
              <p>{cactus.care.sunlight}</p>
            </article>

            <article className="cactus-detail-care-card">
              <Droplets size={25} />
              <h3>Watering</h3>
              <p>{cactus.care.watering}</p>
            </article>

            <article className="cactus-detail-care-card">
              <Sprout size={25} />
              <h3>Soil & Potting</h3>
              <p>{cactus.care.soilAndPotting}</p>
            </article>

            <article className="cactus-detail-care-card">
              <Thermometer size={25} />
              <h3>Temperature</h3>
              <p>{cactus.care.temperature}</p>
            </article>

            <article className="cactus-detail-care-card">
              <Leaf size={25} />
              <h3>Fertilizer</h3>
              <p>{cactus.care.fertilizer}</p>
            </article>
          </div>
        </section>

        <div className="cactus-detail-bottom">
          <Leaf size={20} />
          <p>Keep growing your cactus knowledge with Cactora.</p>
          <Link to="/explore">Explore more cacti <ArrowLeft size={16} /></Link>
        </div>
      </div>
    </main>
  )
}

export default CactusSpeciesDetails
