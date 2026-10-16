
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Droplets,
  Flower2,
  Leaf,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
} from 'lucide-react'
import './OpuntioideaeGuide.css'

const facts = [
  {
    icon: <Leaf size={22} />,
    title: 'Distinctive stem pads',
    description:
      'Many opuntioid cacti have flattened, jointed stem segments called cladodes. These pads store water and carry out photosynthesis.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Glochids',
    description:
      'Many members have tiny, barbed bristles called glochids. They can detach easily and irritate skin, so handle these plants carefully.',
  },
  {
    icon: <Flower2 size={22} />,
    title: 'Beautiful blooms',
    description:
      'Their flowers may be yellow, orange, red, pink, or other shades, depending on the species. Many produce fleshy fruits after flowering.',
  },
  {
    icon: <Sun size={22} />,
    title: 'Sun-loving survivors',
    description:
      'Many species thrive in sunny, dry environments and use specialised water-saving adaptations to survive periods of drought.',
  },
  {
    icon: <Droplets size={22} />,
    title: 'Water-wise growth',
    description:
      'Succulent stems retain water, while specialised photosynthesis helps many species reduce water loss in dry conditions.',
  },
  {
    icon: <Mountain size={22} />,
    title: 'Adaptable habitats',
    description:
      'Opuntioid cacti occur in diverse environments across the Americas, from deserts and grasslands to rocky slopes and woodland edges.',
  },
]

const featuredGenera = [
  {
    name: 'Opuntia',
    subtitle: 'Prickly pears',
    emoji: '🌵',
    description:
      'A familiar group of cacti, many with broad, flat pads and colourful flowers. Several species produce edible fruits.',
    highlight: 'Flat pads and juicy fruits',
  },
  {
    name: 'Cylindropuntia',
    subtitle: 'Cholla cacti',
    emoji: '🌿',
    description:
      'Often have cylindrical stem segments and dense spines. Some segments detach readily and can attach to passing animals.',
    highlight: 'Cylindrical jointed stems',
  },
  {
    name: 'Consolea',
    subtitle: 'Tree-like opuntioids',
    emoji: '🌳',
    description:
      'Includes species with upright, branching growth forms, particularly in the Caribbean region.',
    highlight: 'Upright branching forms',
  },
  {
    name: 'Tephrocactus',
    subtitle: 'Compact jointed cacti',
    emoji: '🪴',
    description:
      'Includes unusual compact plants with rounded or elongated stem segments. Their shapes vary among species.',
    highlight: 'Distinctive stem joints',
  },
]

const careTips = [
  {
    title: 'Give them suitable light',
    description:
      'Most commonly cultivated prickly pears prefer bright light and several hours of direct sun, with gradual acclimatisation.',
  },
  {
    title: 'Use a fast-draining mix',
    description:
      'Choose a cactus mix with mineral components and a pot with drainage holes. Waterlogged roots can rot.',
  },
  {
    title: 'Water thoughtfully',
    description:
      'Water thoroughly when the growing medium has dried appropriately, then allow excess water to drain. Adjust for climate and season.',
  },
  {
    title: 'Handle with protection',
    description:
      'Use thick gloves and suitable tools. Fine glochids may be difficult to see and can lodge in skin.',
  },
]

function OpuntioideaeGuide() {
  return (
    <main className="opuntioideae-page">
      <div className="opuntioideae-container">
        <Link to="/explore" className="opuntioideae-back">
          <ArrowLeft size={17} />
          Back to Explore
        </Link>

        <header className="opuntioideae-hero">
          <div className="opuntioideae-hero-visual">
            <span className="opuntioideae-hero-orbit orbit-one">✦</span>
            <span className="opuntioideae-hero-orbit orbit-two">✧</span>

            <div className="opuntioideae-hero-emoji" role="img" aria-label="Prickly pear cactus">
              🌵
            </div>

            <div className="opuntioideae-hero-caption">
              <Sparkles size={16} />
              <span>Nature's spiky survivors</span>
            </div>

            <div className="opuntioideae-floating-note">
              <span>🌸</span>
              <div>
                <strong>Flowers and fruits</strong>
                <small>Beauty with a prickly side</small>
              </div>
            </div>
          </div>

          <div className="opuntioideae-hero-copy">
            <span className="opuntioideae-eyebrow">
              CACTORA BOTANICAL GUIDE · SUBFAMILY 2
            </span>

            <span className="opuntioideae-pill">
              <Leaf size={15} />
              OPUNTIOIDEAE
            </span>

            <h1>
              The remarkable world of prickly pear cacti
            </h1>

            <p className="opuntioideae-hero-subtitle">
              Meet the cactus group famous for its jointed stems,
              striking spines, and colourful fruits.
            </p>

            <p className="opuntioideae-hero-description">
              Opuntioideae includes prickly pears, chollas, and
              other distinctive cacti. Many have segmented stems
              that store water, while their flowers and fruits
              provide food for wildlife and people.
            </p>

            <div className="opuntioideae-hero-stats">
              <div>
                <strong>Jointed</strong>
                <span>Stem segments</span>
              </div>
              <div>
                <strong>Glochids</strong>
                <span>In many species</span>
              </div>
              <div>
                <strong>Fruits</strong>
                <span>In many species</span>
              </div>
            </div>

            <a href="#opuntioideae-genera" className="opuntioideae-primary-button">
              Explore featured genera
              <ArrowRight size={17} />
            </a>
          </div>
        </header>

        <section className="opuntioideae-section">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <Sparkles size={15} />
              GET TO KNOW THE GROUP
            </span>
            <h2>What makes Opuntioideae special?</h2>
            <p>
              Discover the features that help these cacti stand out
              in the diverse cactus family.
            </p>
          </div>

          <div className="opuntioideae-facts-grid">
            {facts.map((fact, index) => (
              <article className="opuntioideae-fact-card" key={fact.title}>
                <div className="opuntioideae-fact-top">
                  <span className="opuntioideae-fact-icon">{fact.icon}</span>
                  <span className="opuntioideae-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="opuntioideae-habitat">
          <div className="opuntioideae-habitat-art" aria-hidden="true">
            <span>☀️</span>
            <span>🏜️</span>
            <span>🌵</span>
          </div>
          <div>
            <span className="opuntioideae-section-kicker">
              WHERE THEY GROW
            </span>
            <h2>From dry deserts to rocky landscapes</h2>
            <p>
              Opuntioid cacti are native to the Americas, where
              different species have adapted to varied climates
              and habitats. Some tolerate intense heat, while
              others grow in cooler or higher-elevation regions.
              Individual species have their own ecological needs.
            </p>
          </div>
        </section>

        <section className="opuntioideae-section" id="opuntioideae-genera">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <BookOpen size={15} />
              EXPLORE THE COLLECTION
            </span>
            <h2>Meet some remarkable genera</h2>
            <p>
              These examples introduce some well-known and
              distinctive members of Opuntioideae.
            </p>
          </div>

          <div className="opuntioideae-genera-grid">
            {featuredGenera.map((genus, index) => (
              <article className="opuntioideae-genus-card" key={genus.name}>
                <div className="opuntioideae-genus-top">
                  <span className="opuntioideae-genus-emoji">{genus.emoji}</span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <span className="opuntioideae-genus-subtitle">{genus.subtitle}</span>
                <h3>{genus.name}</h3>
                <p>{genus.description}</p>
                <div className="opuntioideae-genus-highlight">
                  <Leaf size={15} />
                  <span>{genus.highlight}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="opuntioideae-care">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <Sprout size={15} />
              GROWING GUIDE
            </span>
            <h2>Basic care for cultivated opuntioids</h2>
            <p>
              These are general starting points. Always check the
              needs of the individual species.
            </p>
          </div>

          <div className="opuntioideae-care-grid">
            {careTips.map((tip, index) => (
              <article className="opuntioideae-care-card" key={tip.title}>
                <span className="opuntioideae-care-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>

          <div className="opuntioideae-safety-note">
            <ShieldCheck size={21} />
            <p>
              <strong>Handling reminder:</strong> spines and glochids
              can injure skin. Avoid touching unfamiliar cactus
              segments with bare hands, and keep them away from
              children and pets.
            </p>
          </div>
        </section>

        <section className="opuntioideae-bottom-cta">
          <div className="opuntioideae-cta-icon">🌵</div>
          <div>
            <span>KEEP DISCOVERING</span>
            <h2>Every cactus has a story.</h2>
            <p>Explore another cactus group with Cactora.</p>
          </div>
          <Link to="/explore" className="opuntioideae-cta-link">
            Explore more
            <ArrowRight size={17} />
          </Link>
        </section>

        <p className="opuntioideae-botanical-note">
          Botanical note: genera and classifications may vary
          between taxonomic references. Care needs also differ
          between individual species.
        </p>
      </div>
    </main>
  )
}

export default OpuntioideaeGuide
