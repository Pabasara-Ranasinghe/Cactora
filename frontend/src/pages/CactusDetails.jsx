
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Leaf,
  Sparkles,
  Sprout,
} from 'lucide-react'

import cactusSubfamilies from '../data/cactusSubfamilies.js'
import CactoideaeGuide from './Cactoideae/CactoideaeGuide.jsx'
import OpuntioideaeGuide from './Opuntioideae/OpuntioideaeGuide.jsx'
import PereskioideaeGuide from './Pereskioideae/PereskioideaeGuide.jsx'
import './CactusDetails.css'

function CactusDetails() {
  const { id } = useParams()

  const family = cactusSubfamilies.find(
    (item) => item.id === id
  )

  // Handle invalid subfamily IDs.
  if (!family) {
    return (
      <section className="cactus-details-page">
        <div className="cactus-details-container">
          <Link to="/explore" className="cactus-details-back">
            <ArrowLeft size={17} />
            Back to Explore
          </Link>

          <div className="cactus-details-status cactus-details-error">
            <span className="cactus-details-status-emoji">
              🌵
            </span>

            <h2>Subfamily not found</h2>

            <p>
              We couldn't find that cactus group. Explore our
              collection to discover the available subfamilies.
            </p>

            <Link
              to="/explore"
              className="cactus-details-primary-button"
            >
              Explore cactus groups
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Display the custom Cactoideae botanical guide.
  if (id === 'cactoideae') {
    return <CactoideaeGuide />
  }

  if (id === 'opuntioideae') {
    return <OpuntioideaeGuide />
  }

  if (id === 'pereskioideae') {
    return <PereskioideaeGuide />
  }

  // Display the standard details page for the other subfamilies.
  return (
    <section className="cactus-details-page">
      <div className="cactus-details-container">
        <Link to="/explore" className="cactus-details-back">
          <ArrowLeft size={17} />
          Back to Explore
        </Link>

        <header className="cactus-details-hero">
          <div className="cactus-details-visual">
            <div
              className="cactus-details-image"
              style={{
                '--family-accent': family.accent,
              }}
            >
              <span className="cactus-details-orbit cactus-details-orbit-one">
                ✦
              </span>

              <span className="cactus-details-orbit cactus-details-orbit-two">
                ✧
              </span>

              <span
                className="cactus-details-main-emoji"
                role="img"
                aria-label={family.name}
              >
                {family.icon}
              </span>

              <div className="cactus-details-visual-label">
                <Sparkles size={15} />
                <span>A little botanical wonder</span>
              </div>
            </div>

            <div className="cactus-details-floating-card">
              <span className="cactus-details-floating-icon">
                🌿
              </span>

              <div>
                <strong>Explore nature</strong>
                <span>Discover the cactus family</span>
              </div>
            </div>
          </div>

          <div className="cactus-details-content">
            <div className="cactus-details-eyebrow">
              <span className="cactus-details-eyebrow-dot" />
              CACTORA BOTANICAL GUIDE
            </div>

            <span className="cactus-details-category">
              <Leaf size={14} />
              Cactus subfamily {family.number}
            </span>

            <h1>{family.name}</h1>

            <p className="cactus-details-scientific">
              {family.subtitle}
            </p>

            <p className="cactus-details-description">
              {family.description}
            </p>

            <div className="cactus-details-highlights">
              <div className="cactus-details-highlight">
                <span>🌱</span>

                <div>
                  <small>Genera and examples</small>
                  <strong>
                    {family.genera.length} entries
                  </strong>
                </div>
              </div>

              <div className="cactus-details-highlight">
                <span>{family.icon}</span>

                <div>
                  <small>Featured group</small>
                  <strong>{family.name}</strong>
                </div>
              </div>
            </div>

            <a
              href="#family-genera"
              className="cactus-details-primary-button"
            >
              Discover the genera
              <ArrowRight size={17} />
            </a>
          </div>
        </header>

        <section className="cactus-details-info-section">
          <div className="cactus-details-section-heading">
            <div>
              <span className="cactus-details-section-label">
                <Sparkles size={15} />
                GET TO KNOW THE GROUP
              </span>

              <h2>Meet {family.name}</h2>

              <p>{family.description}</p>
            </div>

            <span
              className="cactus-details-section-emoji"
              role="img"
              aria-label={family.name}
            >
              {family.icon}
            </span>
          </div>

          <div className="cactus-details-grid">
            <article className="cactus-detail-item">
              <div className="cactus-detail-icon">
                <BookOpen size={21} />
              </div>

              <div className="cactus-detail-copy">
                <span>Subfamily name</span>
                <strong>{family.name}</strong>
              </div>

              <span className="cactus-detail-emoji">
                📚
              </span>
            </article>

            <article className="cactus-detail-item">
              <div className="cactus-detail-icon">
                <Sprout size={21} />
              </div>

              <div className="cactus-detail-copy">
                <span>Number of entries</span>
                <strong>{family.genera.length}</strong>
              </div>

              <span className="cactus-detail-emoji">
                🌱
              </span>
            </article>

            <article className="cactus-detail-item">
              <div className="cactus-detail-icon">
                <Leaf size={21} />
              </div>

              <div className="cactus-detail-copy">
                <span>Group highlight</span>
                <strong>{family.subtitle}</strong>
              </div>

              <span className="cactus-detail-emoji">
                {family.icon}
              </span>
            </article>
          </div>
        </section>

        <section
          className="cactus-care-section"
          id="family-genera"
        >
          <div className="cactus-care-heading">
            <span className="cactus-care-badge">
              <Sprout size={15} />
              EXPLORE THE COLLECTION
            </span>

            <div className="cactus-care-title-row">
              <div>
                <h2>Discover the genera</h2>

                <p>
                  Explore the examples and learn what makes each
                  one interesting.
                </p>
              </div>

              <div
                className="cactus-care-heading-icon"
                aria-hidden="true"
              >
                🌵
              </div>
            </div>
          </div>

          <div className="cactus-care-content">
            <div className="cactus-subfamily-genus-grid">
              {family.genera.map((genus, index) => (
                <article
                  className="cactus-subfamily-genus-card"
                  key={`${family.id}-${genus.name}`}
                  style={{
                    '--detail-index': index,
                    '--family-accent': family.accent,
                  }}
                >
                  <div className="cactus-subfamily-genus-top">
                    <span className="cactus-subfamily-genus-emoji">
                      {family.icon}
                    </span>

                    <span className="cactus-subfamily-genus-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{genus.name}</h3>

                  <p>{genus.detail}</p>

                  <div className="cactus-subfamily-genus-footer">
                    <Leaf size={15} />
                    <span>Discover nature</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="cactus-care-reminder">
              <BookOpen size={19} />

              <p>
                <strong>Botanical note:</strong> these are
                educational examples within the selected group.
                Individual species can have different habitats,
                growth patterns, and care requirements.
              </p>
            </div>
          </div>
        </section>

        <div className="cactus-details-bottom-cta">
          <div className="cactus-details-cta-emoji">
            {family.icon}
          </div>

          <div className="cactus-details-cta-copy">
            <span>KEEP DISCOVERING</span>

            <h2>
              There's a whole world of cacti to explore.
            </h2>

            <p>
              Visit the other groups and continue your Cactora
              journey.
            </p>
          </div>

          <Link
            to="/explore"
            className="cactus-details-cta-link"
          >
            Explore more
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CactusDetails
