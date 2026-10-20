
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Flower2,
  Globe2,
  Leaf,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
} from 'lucide-react'

import cactusSpecies from '../../data/cactusSpecies'
import ScientificNameVoice from '../../components/ScientificNameVoice'
import { getUniqueCactusSpecies } from '../../utils/uniqueCactusSpecies'
import useCactusImage from '../../hooks/useCactusImage'

import './BlossfeldioideaeGuide.css'

const facts = [
  { label: 'Scientific name', value: 'Blossfeldia liliputana' },
  {
    label: 'Native range',
    value: 'Northwestern Argentina and southern Bolivia',
  },
  {
    label: 'Typical habitat',
    value: 'Rock crevices and exposed mountain slopes',
  },
  {
    label: 'Growth form',
    value: 'Tiny, flattened, spineless succulent',
  },
  { label: 'Flowers', value: 'White to pale pink' },
  { label: 'Genus', value: 'Blossfeldia' },
]

const highlights = [
  {
    icon: Sparkles,
    title: 'A miniature marvel',
    text: 'Blossfeldia liliputana is widely regarded as the smallest cactus species. Mature plants may measure only a few millimetres to around a centimetre across.',
  },
  {
    icon: Leaf,
    title: 'A smooth, spineless body',
    text: 'Its flattened, rounded body lacks the prominent ribs and conspicuous spines seen in many familiar cacti. Small areoles are still present.',
  },
  {
    icon: Flower2,
    title: 'Delicate flowers',
    text: 'Tiny white or pale pink flowers can appear at the crown. Their delicate appearance contrasts with the plant’s exceptionally small body.',
  },
  {
    icon: Mountain,
    title: 'A mountain specialist',
    text: 'This cactus grows in rocky habitats in parts of the Andes, often sheltered in cracks where water availability and exposure can change quickly.',
  },
]

const adaptations = [
  {
    number: '01',
    title: 'Compact water storage',
    text: 'Its succulent body stores water, helping it endure periods when rainfall is limited.',
  },
  {
    number: '02',
    title: 'Sheltered rock crevices',
    text: 'Rock cracks provide small protected spaces and can reduce direct exposure to harsh conditions.',
  },
  {
    number: '03',
    title: 'Exceptionally slow growth',
    text: 'Its tiny size and slow growth make careful observation important. Avoid disturbing wild plants or their habitat.',
  },
]

const careItems = [
  {
    title: 'Light',
    text: 'Provide bright light with careful acclimation. Protect cultivated plants from sudden exposure to intense direct sun.',
    icon: Sun,
  },
  {
    title: 'Growing medium',
    text: 'Use a very porous, mineral-heavy cactus mix that drains rapidly. Avoid dense, moisture-retentive potting soil.',
    icon: Sprout,
  },
  {
    title: 'Watering',
    text: 'Water sparingly during active growth and allow the medium to dry thoroughly. Persistent dampness can cause rot.',
    icon: ShieldCheck,
  },
  {
    title: 'Winter conditions',
    text: 'Provide good airflow and a cooler, drier resting period where appropriate for the growing environment. Avoid freezing wet roots.',
    icon: Mountain,
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="bloss-section-heading">
      <span className="bloss-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function BlossfeldiaSpeciesImage({ species }) {
  const { imageUrl, loading } = useCactusImage(
    species.scientificName,
    species.imageUrl
  )

  return (
    <div className="bloss-species-image-wrapper">
      {imageUrl ? (
        <img
          className="bloss-species-image"
          src={imageUrl}
          alt={species.imageAlt || species.commonName}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'

            const fallback = event.currentTarget.nextElementSibling

            if (fallback) {
              fallback.style.display = 'flex'
            }
          }}
        />
      ) : null}

      <div
        className="bloss-species-image-fallback"
        style={{ display: imageUrl ? 'none' : 'flex' }}
      >
        <Leaf size={36} />
        <span>
          {loading ? 'Finding a cactus photo...' : 'Photo unavailable'}
        </span>
      </div>
    </div>
  )
}

function BlossfeldiaSpeciesCollection() {
  const speciesList = getUniqueCactusSpecies(
    cactusSpecies.filter(
      (species) => species.subfamily === 'Blossfeldioideae'
    )
  )

  return (
    <section className="bloss-species-section" id="bloss-species">
      <div className="bloss-species-heading">
        <span className="bloss-eyebrow">
          07 — Explore the collection
        </span>

        <h2>Blossfeldioideae Cacti</h2>

        <p>
          Discover the miniature cacti in this subfamily and explore
          their individual botanical profiles.
        </p>

        <span className="bloss-species-count">
          {speciesList.length}{' '}
          {speciesList.length === 1 ? 'species' : 'species'} in the collection
        </span>
      </div>

      {speciesList.length > 0 ? (
        <div className="bloss-species-grid">
          {speciesList.map((species) => (
            <article
              className="bloss-species-card"
              key={species.id}
            >
              <Link
                to={`/cacti/${species.id}`}
                className="bloss-species-image-link"
                aria-label={`Explore ${species.commonName}`}
              >
                <BlossfeldiaSpeciesImage species={species} />

                <span className="bloss-species-badge">
                  Blossfeldioideae
                </span>
              </Link>

              <div className="bloss-species-card-content">
                <h3>{species.commonName}</h3>

                <div className="bloss-species-scientific-row">
                  <span className="bloss-species-scientific">
                    {species.scientificName}
                  </span>

                  <ScientificNameVoice
                    name={species.scientificName}
                  />
                </div>

                <p>
                  {species.growthHabitAndSize ||
                    'Discover the characteristics of this cactus species.'}
                </p>

                <Link
                  to={`/cacti/${species.id}`}
                  className="bloss-species-explore"
                >
                  Explore species
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="bloss-species-empty">
          No Blossfeldioideae species have been added to the collection yet.
        </p>
      )}
    </section>
  )
}

export default function BlossfeldioideaeGuide() {
  return (
    <main className="bloss-guide">
      <section className="bloss-hero">
        <div className="bloss-hero-glow" />

        <div className="bloss-hero-content">
          <Link className="bloss-back-link" to="/explore">
            <ArrowLeft size={17} />
            Back to Explore
          </Link>

          <span className="bloss-hero-label">
            <Sparkles size={15} />
            Cactora Botanical Guide
          </span>

          <h1>
            Blossfeldioideae
            <span>The Tiny Pebble Cactus</span>
          </h1>

          <p className="bloss-hero-description">
            A miniature wonder of the cactus world — a tiny, smooth succulent
            that survives in rocky mountain habitats where every millimetre
            matters.
          </p>

          <div className="bloss-hero-tags">
            <span><Globe2 size={15} /> South America</span>
            <span><Leaf size={15} /> Spineless body</span>
            <span><Mountain size={15} /> Mountain habitat</span>
          </div>

          <a className="bloss-primary-link" href="#bloss-overview">
            Discover this cactus
            <ArrowRight size={17} />
          </a>
        </div>

        <div
          className="bloss-hero-art"
          aria-label="Decorative illustration of a tiny cactus"
        >
          <div className="bloss-sun-disc" />
          <div className="bloss-rock bloss-rock-back" />
          <div className="bloss-rock bloss-rock-front" />

          <div className="bloss-pebble">
            <div className="bloss-pebble-highlight" />
            <div className="bloss-pebble-areole" />
          </div>

          <div className="bloss-mini-flower">
            <span />
            <span />
            <span />
            <span />
            <span />
            <i />
          </div>

          <span className="bloss-art-caption">
            Small in size. Remarkable by nature.
          </span>
        </div>
      </section>

      <section className="bloss-overview" id="bloss-overview">
        <SectionHeading
          eyebrow="01 — At a glance"
          title="Meet the miniature marvel"
          description="Get to know the basic characteristics of this remarkable cactus."
        />

        <div className="bloss-overview-grid">
          {facts.map((fact) => (
            <article className="bloss-fact-card" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="bloss-highlights">
        <SectionHeading
          eyebrow="02 — Fascinating facts"
          title="Extraordinary in every millimetre"
          description="Its tiny body conceals a fascinating set of botanical adaptations."
        />

        <div className="bloss-highlight-grid">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <article className="bloss-highlight-card" key={title}>
              <div className="bloss-highlight-icon">
                <Icon size={23} />
              </div>

              <span className="bloss-card-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bloss-adaptations">
        <div className="bloss-adaptations-intro">
          <span className="bloss-eyebrow">
            03 — Survival strategies
          </span>

          <h2>Life between the rocks</h2>

          <p>
            In a demanding mountain environment, a small body and a suitable
            growing site can make a remarkable difference.
          </p>
        </div>

        <div className="bloss-adaptation-list">
          {adaptations.map((item) => (
            <article className="bloss-adaptation-item" key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bloss-identification">
        <SectionHeading
          eyebrow="04 — Quick identification"
          title="What makes Blossfeldia different?"
          description="Compare its appearance with more familiar cactus forms."
        />

        <div className="bloss-table-wrap">
          <table className="bloss-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Blossfeldia</th>
                <th>Many other cacti</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Body size</td>
                <td><CheckCircle2 size={16} /> Exceptionally small</td>
                <td>Ranges from small to very large</td>
              </tr>

              <tr>
                <td>Spines</td>
                <td><CheckCircle2 size={16} /> Absent or inconspicuous</td>
                <td>Often prominent, but not always present</td>
              </tr>

              <tr>
                <td>Body shape</td>
                <td>Rounded and flattened</td>
                <td>Globular, columnar, flattened, or segmented</td>
              </tr>

              <tr>
                <td>Ribs</td>
                <td>No prominent ribs</td>
                <td>Present in many species</td>
              </tr>

              <tr>
                <td>Areoles</td>
                <td>Present, but very small</td>
                <td>Present — a defining cactus feature</td>
              </tr>

              <tr>
                <td>Growth</td>
                <td>Very slow</td>
                <td>Varies widely by species</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="bloss-table-note">
          Botanical note: Blossfeldia is unusual, but it remains a true cactus.
          Its tiny areoles may be difficult to notice without close inspection.
        </p>
      </section>

      <section className="bloss-care">
        <SectionHeading
          eyebrow="05 — Growing guide"
          title="Care for a tiny specialist"
          description="Blossfeldia has specific needs. These general tips are a starting point, not a substitute for species-specific cultivation advice."
        />

        <div className="bloss-care-grid">
          {careItems.map(({ title, text, icon: Icon }) => (
            <article className="bloss-care-card" key={title}>
              <div className="bloss-care-icon">
                <Icon size={22} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="bloss-warning">
          <ShieldCheck size={23} />

          <div>
            <h3>Small plant, careful handling</h3>

            <p>
              Overwatering is a major risk for tiny, slow-growing cacti.
              Avoid collecting wild specimens; choose responsibly propagated
              plants from reputable specialist growers.
            </p>
          </div>
        </div>
      </section>

      <section className="bloss-summary">
        <div className="bloss-summary-icon">
          <BookOpen size={26} />
        </div>

        <span className="bloss-eyebrow">06 — In short</span>

        <h2>A tiny cactus with a big story</h2>

        <p>
          Blossfeldia liliputana reminds us that size does not determine
          botanical importance. Its miniature form, subtle features, and
          specialised mountain habitat make it one of the most fascinating
          cacti to learn about.
        </p>

        <a href="/explore" className="bloss-primary-link">
          Explore more cacti
          <ArrowRight size={17} />
        </a>
      </section>

      <BlossfeldiaSpeciesCollection />
    </main>
  )
}
