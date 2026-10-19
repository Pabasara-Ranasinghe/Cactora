import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Droplets,
  Flower2,
  Globe2,
  Leaf,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
} from 'lucide-react'
import OpuntioideaeSpeciesGrid from './OpuntioideaeSpeciesGrid'
import './OpuntioideaeGuide.css'

const facts = [
  {
    icon: <Globe2 size={22} />,
    title: 'Origin and distribution',
    description:
      'Opuntioideae originated in the Americas, with major diversity in Mexico, the Caribbean, and South America. Introduced species have naturalised in regions worldwide, including parts of Africa, Australia, India, the Mediterranean, and Sri Lanka.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Distinctive pads and joints',
    description:
      'Many members have flattened pads or cylindrical, jointed stems called cladodes. Small, fleshy true leaves may appear on young growth and usually fall as the segments mature.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Glochids: tiny barbed bristles',
    description:
      'Many species produce clusters of tiny, detachable bristles with backward-facing barbs. Glochids can lodge in skin and clothing, making careful handling essential.',
  },
  {
    icon: <Flower2 size={22} />,
    title: 'Bright, sun-loving flowers',
    description:
      'Flowers are often cup-shaped and may be yellow, orange, pink, or red. Many open widely in sunshine, followed by fleshy fruits that can turn green, red, magenta, or purple as they ripen.',
  },
  {
    icon: <Droplets size={22} />,
    title: 'Drought-adapted survivors',
    description:
      'Succulent stems store water, and specialised photosynthesis helps many species conserve it. Some tolerate cold and freezing conditions, although hardiness varies greatly by species.',
  },
  {
    icon: <Mountain size={22} />,
    title: 'Remarkably adaptable',
    description:
      'These cacti inhabit deserts, grasslands, rocky slopes, and other environments. Some introduced species have become invasive where their growth and spread disrupt local ecosystems.',
  },
]

const featuredGenera = [
  {
    name: 'Opuntia',
    subtitle: 'Prickly pears and nopales',
    emoji: '🌵',
    description:
      'Many species have broad, flat, paddle-shaped pads, colourful flowers, and edible fruits. Opuntia ficus-indica is widely cultivated for its pads and fruits.',
    highlight: 'Flat pads and edible fruits',
  },
  {
    name: 'Cylindropuntia',
    subtitle: 'Cholla cacti',
    emoji: '🌿',
    description:
      'These cacti typically have cylindrical joints and prominent spines. Detached segments can attach to passing animals or land elsewhere and sometimes take root.',
    highlight: 'Cylindrical, detachable joints',
  },
  {
    name: 'Tacinga',
    subtitle: 'Tropical opuntioids',
    emoji: '🌺',
    description:
      'A genus of South American opuntioids, particularly associated with Brazil. Species vary in growth form and can have distinctive stems and colourful flowers.',
    highlight: 'South American diversity',
  },
  {
    name: 'Maihueniopsis',
    subtitle: 'Compact jointed cacti',
    emoji: '🪴',
    description:
      'This genus includes compact opuntioid cacti with rounded or short, jointed stems. Many grow in South American regions with challenging climates.',
    highlight: 'Compact, jointed growth',
  },
]

const careTips = [
  {
    title: 'Give them suitable sunlight',
    description:
      'Many cultivated species prefer bright light and several hours of direct sun. Introduce stronger sunlight gradually to reduce the risk of sunburn.',
  },
  {
    title: 'Use a sharply draining mix',
    description:
      'A starting mix could contain roughly equal parts garden soil and coarse sand or gravel, provided the soil is clean and the final mix drains freely. A suitable commercial cactus mix with added mineral grit is another option.',
  },
  {
    title: 'Water carefully',
    description:
      'Water thoroughly when the growing medium has dried appropriately, then allow excess water to drain. Adjust watering to the species, temperature, season, and pot.',
  },
  {
    title: 'Protect yourself from glochids',
    description:
      'Use suitable tools and thick protective gloves when handling these plants. Fine glochids can be difficult to see and remove, so avoid touching pads with bare hands.',
  },
]

const atAGlance = [
  ['Native range', 'The Americas, especially Mexico, the Caribbean, and South America'],
  ['Historical reference', 'Opuntia was described by Carl Linnaeus in 1753'],
  ['Introduced range', 'Naturalised in parts of the Mediterranean, Africa, Australia, India, and Sri Lanka'],
  ['Common names', 'Prickly pears, paddle cacti, chollas, and nopales'],
  ['Flower colours', 'Often yellow, orange, pink, or red'],
  ['Soil preference', 'A sharply draining, mineral-rich growing medium'],
  ['Representative genera', 'Opuntia, Cylindropuntia, Tacinga, and Maihueniopsis'],
  ['Diversity', 'Approximately 17 genera and around 350 species in some taxonomic treatments; estimates vary'],
  ['Signature feature', 'Glochids: tiny, barbed bristles that detach easily'],
]

const comparison = [
  ['Glochids', 'Present in many species', 'Absent'],
  ['True leaves', 'Small leaves may appear on young growth', 'No true leaves on mature plants'],
  ['Stem structure', 'Often flat pads or cylindrical joints', 'Often continuous ribs, columns, or globular stems'],
  ['Seed covering', 'An aril-like covering occurs in many opuntioids', 'Typically lacks this opuntioid seed covering'],
  ['Areoles', 'May produce spines and glochids', 'Typically produce spines, but not glochids'],
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

            <div
              className="opuntioideae-hero-emoji"
              role="img"
              aria-label="Prickly pear cactus"
            >
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

            <h1>Opuntioideae — The Prickly Pear Subfamily</h1>

            <p className="opuntioideae-hero-subtitle">
              Distinctive pads, jointed stems, and tiny barbed
              spines — one of the most useful and recognisable
              cactus groups.
            </p>

            <p className="opuntioideae-hero-description">
              From prickly pear fruits and edible young pads to
              vivid flowers and extraordinary survival strategies,
              Opuntioideae combines botanical diversity with
              centuries of cultural and practical importance.
            </p>

            <div className="opuntioideae-hero-stats">
              <div>
                <strong>Jointed</strong>
                <span>Stem segments</span>
              </div>
              <div>
                <strong>Glochids</strong>
                <span>Signature feature</span>
              </div>
              <div>
                <strong>Useful</strong>
                <span>Food and dye</span>
              </div>
            </div>

            <a
              href="#opuntioideae-at-a-glance"
              className="opuntioideae-primary-button"
            >
              Discover the subfamily
              <ArrowRight size={17} />
            </a>
          </div>
        </header>

        <section
          className="opuntioideae-section"
          id="opuntioideae-at-a-glance"
        >
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <BookOpen size={15} />
              QUICK REFERENCE
            </span>
            <h2>Opuntioideae at a glance</h2>
            <p>
              The essential details about the prickly pear subfamily,
              from its native range to its defining characteristics.
            </p>
          </div>

          <div className="opuntioideae-reference-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Detail</th>
                  <th scope="col">Information</th>
                </tr>
              </thead>
              <tbody>
                {atAGlance.map(([detail, information]) => (
                  <tr key={detail}>
                    <th scope="row">{detail}</th>
                    <td>{information}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="opuntioideae-section">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <Sparkles size={15} />
              FASCINATING FACTS
            </span>
            <h2>What makes Opuntioideae extraordinary?</h2>
            <p>
              Explore the remarkable features, survival strategies,
              and cultural connections of these distinctive cacti.
            </p>
          </div>

          <div className="opuntioideae-facts-grid">
            {facts.map((fact, index) => (
              <article className="opuntioideae-fact-card" key={fact.title}>
                <div className="opuntioideae-fact-top">
                  <span className="opuntioideae-fact-icon">
                    {fact.icon}
                  </span>
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
              TWO DISTINCT GROWTH FORMS
            </span>
            <h2>Flat pads or cylindrical joints?</h2>
            <p>
              Many prickly pears grow broad, oval, paddle-shaped
              segments that branch into shrub-like or tree-like forms.
              Chollas, by contrast, usually have round, tube-like
              joints. Some joints detach readily and can establish
              new plants when conditions are suitable.
            </p>
          </div>
        </section>

        <section className="opuntioideae-section">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <Leaf size={15} />
              FOOD, CULTURE AND HISTORY
            </span>
            <h2>More than ornamental cacti</h2>
            <p>
              Opuntioideae has played important roles in food
              traditions, natural dye production, and cultural identity.
            </p>
          </div>

          <div className="opuntioideae-facts-grid">
            <article className="opuntioideae-fact-card">
              <div className="opuntioideae-fact-top">
                <span className="opuntioideae-fact-icon">🍈</span>
                <span className="opuntioideae-index">01</span>
              </div>
              <h3>Prickly pear fruit</h3>
              <p>
                Known in Mexico as tuna, the ripe fruit of many
                Opuntia species is eaten fresh or used in drinks,
                jams, and other foods. Remove the spines and glochids
                carefully before preparation.
              </p>
            </article>

            <article className="opuntioideae-fact-card">
              <div className="opuntioideae-fact-top">
                <span className="opuntioideae-fact-icon">🥗</span>
                <span className="opuntioideae-index">02</span>
              </div>
              <h3>Nopales</h3>
              <p>
                Young pads of selected Opuntia species are prepared
                as vegetables and feature in Mexican and Central
                American cooking. The pads must be cleaned and
                prepared properly.
              </p>
            </article>

            <article className="opuntioideae-fact-card">
              <div className="opuntioideae-fact-top">
                <span className="opuntioideae-fact-icon">🎨</span>
                <span className="opuntioideae-index">03</span>
              </div>
              <h3>The cochineal dye connection</h3>
              <p>
                Cochineal insects living on prickly pear cacti
                produce carminic acid, which has been used to make
                a vivid red dye for textiles, art, and some foods.
              </p>
            </article>

            <article className="opuntioideae-fact-card">
              <div className="opuntioideae-fact-top">
                <span className="opuntioideae-fact-icon">🇲🇽</span>
                <span className="opuntioideae-index">04</span>
              </div>
              <h3>A national symbol</h3>
              <p>
                A prickly pear cactus appears at the centre of
                Mexico's coat of arms, also represented on the
                national flag. It is an enduring symbol of Mexican
                history and identity.
              </p>
            </article>
          </div>
        </section>

        <section className="opuntioideae-section" id="opuntioideae-genera">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <BookOpen size={15} />
              EXPLORE THE GENERA
            </span>
            <h2>Meet remarkable opuntioid cacti</h2>
            <p>
              These examples showcase the diversity of forms found
              within the subfamily.
            </p>
          </div>

          <div className="opuntioideae-genera-grid">
            {featuredGenera.map((genus, index) => (
              <article className="opuntioideae-genus-card" key={genus.name}>
                <div className="opuntioideae-genus-top">
                  <span className="opuntioideae-genus-emoji">
                    {genus.emoji}
                  </span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <span className="opuntioideae-genus-subtitle">
                  {genus.subtitle}
                </span>
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

        <section className="opuntioideae-section">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <BookOpen size={15} />
              QUICK IDENTIFICATION
            </span>
            <h2>Opuntioideae vs. Cactoideae</h2>
            <p>
              Compare some common botanical characteristics.
              Individual species may differ, so use several features
              rather than relying on just one.
            </p>
          </div>

          <div className="opuntioideae-reference-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Opuntioideae</th>
                  <th scope="col">Cactoideae</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, opuntioideae, cactoideae]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td>{opuntioideae}</td>
                    <td>{cactoideae}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Good drainage, appropriate sunlight, and safe handling
              help these plants thrive. Requirements vary by species.
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
              <strong>Safety reminder:</strong> spines and glochids
              can injure skin and may be difficult to remove. Use
              suitable protection, avoid bare-handed handling, and
              keep plants away from children and pets.
            </p>
          </div>
        </section>

        <OpuntioideaeSpeciesGrid />

        <section className="opuntioideae-section">
          <div className="opuntioideae-section-heading">
            <span className="opuntioideae-section-kicker">
              <Sparkles size={15} />
              IN A NUTSHELL
            </span>
            <h2>Survivors, providers, and botanical icons</h2>
            <p>
              Opuntioideae stands out for its segmented stems,
              glochids, colourful blooms, edible fruits, and
              remarkable adaptability. From wild habitats to
              cultivated gardens and traditional food, this
              subfamily has an extraordinary range of uses.
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
          Botanical note: genus and species counts depend on the
          taxonomic reference. Opuntioideae characteristics vary
          across its members, and introduced species may become
          invasive in some regions. The soil mix above is a starting
          point, not a universal formula.
        </p>
      </div>
    </main>
  )
}

export default OpuntioideaeGuide