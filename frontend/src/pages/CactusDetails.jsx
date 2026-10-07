import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Sun,
  Droplets,
  Sprout,
  Thermometer,
  Cloud,
  Ruler,
  Gauge,
  Flower2,
} from 'lucide-react'
import { getCactusById } from '../services/cactusService.js'

function CactusDetails() {
  const { id } = useParams()

  const [cactus, setCactus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadCactus() {
      try {
        const data = await getCactusById(id)
        setCactus(data)
      } catch (err) {
        console.error('Failed to load cactus:', err)
        setError('Unable to load cactus information.')
      } finally {
        setLoading(false)
      }
    }

    loadCactus()
  }, [id])

  if (loading) {
    return (
      <section className="cactus-details-page">
        <div className="cactus-details-container">
          <p className="explore-status">
            Loading cactus information...
          </p>
        </div>
      </section>
    )
  }

  if (error || !cactus) {
    return (
      <section className="cactus-details-page">
        <div className="cactus-details-container">
          <Link
            to="/explore"
            className="cactus-details-back"
          >
            <ArrowLeft size={17} />
            Back to Explorer
          </Link>

          <div className="explore-empty">
            <span>🌵</span>

            <h2>
              {error || 'Cactus not found'}
            </h2>

            <p>
              The cactus species you are looking for
              could not be found.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="cactus-details-page">
      <div className="cactus-details-container">

        <Link
          to="/explore"
          className="cactus-details-back"
        >
          <ArrowLeft size={17} />
          Back to Explorer
        </Link>

        <div className="cactus-details-layout">

          <div className="cactus-details-visual">
            <div className="cactus-details-image">
              <span>🌵</span>
            </div>
          </div>

          <div className="cactus-details-content">

            <span className="cactus-card-category">
              {cactus.category}
            </span>

            <h1>{cactus.commonName}</h1>

            <p className="cactus-details-scientific">
              {cactus.scientificName}
            </p>

            <p className="cactus-details-description">
              {cactus.description}
            </p>

            <div className="cactus-details-grid">

              <div className="cactus-detail-item">
                <Sun size={19} />
                <div>
                  <span>Sunlight</span>
                  <strong>{cactus.sunlight}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Droplets size={19} />
                <div>
                  <span>Watering</span>
                  <strong>{cactus.watering}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Sprout size={19} />
                <div>
                  <span>Soil</span>
                  <strong>{cactus.soil}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Thermometer size={19} />
                <div>
                  <span>Temperature</span>
                  <strong>{cactus.temperature}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Cloud size={19} />
                <div>
                  <span>Humidity</span>
                  <strong>{cactus.humidity}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Ruler size={19} />
                <div>
                  <span>Size</span>
                  <strong>{cactus.size}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Gauge size={19} />
                <div>
                  <span>Growth Rate</span>
                  <strong>{cactus.growthRate}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Flower2 size={19} />
                <div>
                  <span>Flowering</span>
                  <strong>{cactus.flowering}</strong>
                </div>
              </div>

              <div className="cactus-detail-item">
                <Sprout size={19} />
                <div>
                    <span>Origin</span>
                    <strong>{cactus.origin}</strong>
                </div>
                </div>

            <div className="cactus-detail-item">
                <Gauge size={19} />
                <div>
                    <span>Difficulty</span>
                    <strong>{cactus.difficulty}</strong>
                </div>
            </div>

            </div>
          </div>
        </div>

        <div className="cactus-care-section">

          <div>
            <p className="page-label">
              Cactus Care
            </p>

            <h2>
              How to care for this cactus
            </h2>
          </div>

          <p>
            {cactus.careInstructions}
          </p>

        </div>

      </div>
    </section>
  )
}

export default CactusDetails