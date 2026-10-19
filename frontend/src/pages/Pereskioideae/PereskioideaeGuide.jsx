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

import cactusSpecies from '../../data/cactusSpecies'
import useCactusImage from '../../hooks/useCactusImage'
import ScientificNameVoice from '../../components/ScientificNameVoice'

import './PereskioideaeGuide.css'

const atAGlance = [
  ['Native range', 'The Caribbean, Central America, and parts of northern and eastern South America, depending on the species'],
  ['Historical classification', 'Pereskia was described in early botanical literature; Philip Miller established the genus in 1754'],
  ['Current distribution', 'Cultivated in tropical and warm regions worldwide, including gardens and botanical collections'],
  ['Common names', 'Leafy cacti, rose cacti, and other names associated with individual species'],
  ['Flower colours', 'White, cream, pale pink, rose, or yellow, depending on the species'],
  ['Soil preference', 'Fertile, well-drained growing medium with more organic matter than many desert cacti require'],
  ['Representative genus', 'Pereskia in the traditional classification; modern classifications may differ'],
  ['Species diversity', 'Species counts vary because the taxonomy of the traditional genus has changed'],
  ['Signature feature', 'Broad, persistent leaves on relatively slender, often woody stems'],
]

const facts = [
  {
    icon: <Leaf size={22} />,
    title: 'Cacti that look like ordinary plants',
    description:
      'Unlike familiar leafless desert cacti, traditional Pereskia species grow as leafy shrubs, small trees, or climbing plants. Their leaves are broad and green, while areoles and cactus-like flowers reveal their relationship to the cactus family.',
  },
  {
    icon: <Sun size={22} />,
    title: 'Daytime photosynthesis',
    description:
      'Traditional Pereskia species are notable for using C3 photosynthesis. Their leaves exchange gases during the day, unlike the predominantly CAM photosynthesis found in many other cacti.',
  },
  {
    icon: <Flower2 size={22} />,
    title: 'Rose-like flowers',
    description:
      'Many species produce open flowers in white, cream, pink, or yellow shades. Their blossoms can resemble those of familiar flowering shrubs and may appear singly or in clusters.',
  },
  {
    icon: <Droplets size={22} />,
    title: 'Fleshy, sometimes edible fruits',
    description:
      'Some species produce fleshy fruits, and the leaves of Pereskia aculeata are eaten as a vegetable in Brazil. Edibility and preparation depend on the exact species.',
  },
  {
    icon: <Mountain size={22} />,
    title: 'Warm, sheltered habitats',
    description:
      'Leafy cacti are associated with tropical and subtropical environments, including woodland edges, thickets, and other relatively sheltered habitats. Their needs differ from those of many arid-land cacti.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Climbing stems and spines',
    description:
      'Some species develop long, slender branches and curved or clustered spines that help them climb through vegetation. Others grow as shrubs or small trees and can be pruned.',
  },
]

const featuredGenera = [
  {
    name: 'Pereskia',
    subtitle: 'Traditional leafy cacti',
    emoji: '🌿',
    description:
      'The traditional genus includes leafy cactus plants with slender stems, areoles, and conspicuous leaves. Its historical species classification has changed over time.',
    highlight: 'Broad leaves and cactus areoles',
  },
  {
    name: 'Pereskia aculeata',
    subtitle: 'Barbados gooseberry',
    emoji: '🌸',
    description:
      'A climbing leafy cactus known for its foliage, spiny stems, and edible leaves in some food traditions. It can grow vigorously in suitable warm climates.',
    highlight: 'Climbing growth and edible leaves',
  },
  {
    name: 'Pereskia grandifolia',
    subtitle: 'Rose cactus',
    emoji: '🌺',
    description:
      'A leafy, shrub-like cactus recognised for its broad leaves and clusters of attractive pink or rose-coloured flowers.',
    highlight: 'Large leaves and pink blooms',
  },
  {
    name: 'Leuenbergeria',
    subtitle: 'A modern taxonomic genus',
    emoji: '🌱',
    description:
      'Some species formerly included in Pereskia are now placed in Leuenbergeria. These plants retain the leafy, woody growth form associated with early-diverging cacti.',
    highlight: 'Leafy stems and woody growth',
  },
]

const comparison = [
  ['True leaves', 'Broad leaves usually persist on mature stems', 'Absent in mature Cactoideae; may appear on young opuntioids'],
  ['Glochids', 'Absent', 'Present in many Opuntioideae; absent in Cactoideae'],
  ['Stem type', 'Slender, often woody and less succulent', 'Usually more succulent, often thick, ribbed, or jointed'],
  ['Photosynthesis', 'C3 in traditional Pereskia species', 'CAM is widespread among other cactus groups'],
  ['Growth form', 'Shrub, small tree, or climbing plant', 'Globular, columnar, pad-forming, or epiphytic forms'],
]

const careTips = [
  {
    title: 'Provide bright light',
    description:
      'Offer bright light and suitable sunlight while protecting plants from sudden exposure to intense heat. Adapt the position to the species and local climate.',
  },
  {
    title: 'Choose a fertile, draining mix',
    description:
      'Use a well-drained potting medium with organic matter. A starting mix might combine around 60% quality potting mix or loam with 40% perlite or coarse mineral material.',
  },
  {
    title: 'Keep moisture balanced',
    description:
      'These leafy cacti may need more regular watering than desert cacti, but their roots should not remain waterlogged. Adjust watering to temperature, growth, and drainage.',
  },
  {
    title: 'Protect from cold',
    description:
      'Many commonly cultivated species are sensitive to frost and cold conditions. Protect them when temperatures drop, and check the tolerance of your particular species.',
  },
]


function PereskioideaeSpeciesCollection() {
  const speciesList = cactusSpecies.filter(
    (species) => species.subfamily === 'Pereskioideae'
  )

  return (
    <section
      className="pereskioideae-species-section"
      id="pereskioideae-species"
    >
      <div className="pereskioideae-species-heading">
        <span className="pereskioideae-section-kicker">
          <Leaf size={15} />
          MEET THE SPECIES
        </span>

        <h2>Discover the Leafy Cacti</h2>

        <p>
          Explore the Pereskioideae collection and learn about
          each species' distinctive features, natural habitat,
          growth habits, and care requirements.
        </p>

        <span className="pereskioideae-species-count">
          {speciesList.length} species in the collection
        </span>
      </div>

      {speciesList.length > 0 ? (
        <div className="pereskioideae-species-grid">
          {speciesList.map((species) => (
            <PereskioideaeSpeciesCard
              key={species.id}
              species={species}
            />
          ))}
        </div>
      ) : (
        <p className="pereskioideae-species-empty">
          No species have been added to this collection yet.
        </p>
      )}
    </section>
  )
}

function PereskioideaeSpeciesCard({ species }) {
  const { imageUrl, loading } = useCactusImage(
    species.scientificName,
    species.imageUrl
  )

  return (
    <article className="pereskioideae-species-card">
      <a
        href={`/cacti/${species.id}`}
        className="pereskioideae-species-image-link"
        aria-label={`Explore ${species.commonName}`}
      >
        {imageUrl ? (
          <img
            className="pereskioideae-species-image"
            src={imageUrl}
            alt={species.commonName}
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
          className="pereskioideae-species-image-fallback"
          style={{ display: imageUrl ? 'none' : 'flex' }}
        >
          <Leaf size={36} />
          <span>
            {loading ? 'Finding a cactus photo...' : 'Photo unavailable'}
          </span>
        </div>
      </a>

      <div className="pereskioideae-species-card-content">
        <h3>{species.commonName}</h3>

        <div className="pereskioideae-species-scientific-row">
          <span className="pereskioideae-species-scientific">
            {species.scientificName}
          </span>

          <ScientificNameVoice name={species.scientificName} />
        </div>

        <p>{species.growthHabitAndSize}</p>

        <a
          href={`/cacti/${species.id}`}
          className="pereskioideae-species-explore"
        >
          Explore species
          <ArrowRight size={17} />
        </a>
      </div>
    </article>
  )
}

function PereskioideaeGuide() {
  return (
    <main className="pereskioideae-page">
      <div className="pereskioideae-container">
        <Link to="/explore" className="pereskioideae-back">
          <ArrowLeft size={17} />
          Back to Explore
        </Link>

        <header className="pereskioideae-hero">
          <div className="pereskioideae-hero-visual">
            <span className="pereskioideae-hero-orbit orbit-one">✦</span>
            <span className="pereskioideae-hero-orbit orbit-two">✧</span>

            <div
              className="pereskioideae-hero-emoji"
              role="img"
              aria-label="Leafy cactus"
            >
              🌿
            </div>

            <div className="pereskioideae-hero-caption">
              <Sparkles size={16} />
              <span>The leafy side of cacti</span>
            </div>

            <div className="pereskioideae-floating-note">
              <span>🌸</span>
              <div>
                <strong>Rose-like blooms</strong>
                <small>A surprising cactus beauty</small>
              </div>
            </div>
          </div>

          <div className="pereskioideae-hero-copy">
            <span className="pereskioideae-eyebrow">
              CACTORA BOTANICAL GUIDE · LEAFY CACTI
            </span>

            <span className="pereskioideae-pill">
              <Leaf size={15} />
              PERESKIOIDEAE
            </span>

            <h1>Pereskioideae — The Leafy Cactus Subfamily</h1>

            <p className="pereskioideae-hero-subtitle">
              Cacti that look like ordinary trees and shrubs —
              revealing a fascinating chapter in cactus evolution.
            </p>

            <p className="pereskioideae-hero-description">
              Broad green leaves, slender woody stems, and
              rose-like flowers make traditional Pereskia species
              look unlike familiar desert cacti. Their distinctive
              features help botanists understand the early
              diversification of the cactus family.
            </p>

            <div className="pereskioideae-hero-stats">
              <div>
                <strong>Leafy</strong>
                <span>Green foliage</span>
              </div>
              <div>
                <strong>C3</strong>
                <span>Photosynthesis</span>
              </div>
              <div>
                <strong>Woody</strong>
                <span>Slender stems</span>
              </div>
            </div>

            <a
              href="#pereskioideae-at-a-glance"
              className="pereskioideae-primary-button"
            >
              Discover leafy cacti
              <ArrowRight size={17} />
            </a>
          </div>
        </header>

        <section
          className="pereskioideae-section"
          id="pereskioideae-at-a-glance"
        >
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <BookOpen size={15} />
              QUICK REFERENCE
            </span>
            <h2>Pereskioideae at a glance</h2>
            <p>
              Get to know the leafy cactus group, its historical
              classification, and its most distinctive features.
            </p>
          </div>

          <div className="pereskioideae-reference-table">
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

        <PereskioideaeSpeciesCollection />

        <section className="pereskioideae-section">
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <Sparkles size={15} />
              FASCINATING FACTS
            </span>
            <h2>What makes leafy cacti so special?</h2>
            <p>
              Discover the unusual foliage, flowering habits,
              photosynthesis, and growth strategies of these plants.
            </p>
          </div>

          <div className="pereskioideae-facts-grid">
            {facts.map((fact, index) => (
              <article className="pereskioideae-fact-card" key={fact.title}>
                <div className="pereskioideae-fact-top">
                  <span className="pereskioideae-fact-icon">
                    {fact.icon}
                  </span>
                  <span className="pereskioideae-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pereskioideae-habitat">
          <div className="pereskioideae-habitat-art" aria-hidden="true">
            <span>☀️</span>
            <span>🌳</span>
            <span>🌿</span>
          </div>
          <div>
            <span className="pereskioideae-section-kicker">
              A DIFFERENT WAY TO BE A CACTUS
            </span>
            <h2>From leafy branches to cactus evolution</h2>
            <p>
              Traditional Pereskia species retain features that
              distinguish them from many highly succulent cacti.
              Their leaves carry out C3 photosynthesis, while their
              areoles identify their cactus heritage. They are
              important for studying early cactus evolution, though
              no living species should be treated as the direct
              ancestor of all other cacti.
            </p>
          </div>
        </section>

        <section className="pereskioideae-section">
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <Flower2 size={15} />
              FLOWERS, FRUITS AND FOOD
            </span>
            <h2>Beauty with practical uses</h2>
            <p>
              Some leafy cacti are cultivated for their flowers,
              foliage, fruits, and edible leaves.
            </p>
          </div>

          <div className="pereskioideae-facts-grid">
            <article className="pereskioideae-fact-card">
              <div className="pereskioideae-fact-top">
                <span className="pereskioideae-fact-icon">🌸</span>
                <span className="pereskioideae-index">01</span>
              </div>
              <h3>Rose-like flowers</h3>
              <p>
                Depending on the species, flowers may be white,
                cream, pink, rose, or yellow. Their open petals
                create a striking contrast with leafy stems.
              </p>
            </article>

            <article className="pereskioideae-fact-card">
              <div className="pereskioideae-fact-top">
                <span className="pereskioideae-fact-icon">🍈</span>
                <span className="pereskioideae-index">02</span>
              </div>
              <h3>Fleshy fruits</h3>
              <p>
                Some species produce fleshy fruits that may be
                yellowish, greenish, or orange when ripe. Fruit
                appearance and edibility differ between species.
              </p>
            </article>

            <article className="pereskioideae-fact-card">
              <div className="pereskioideae-fact-top">
                <span className="pereskioideae-fact-icon">🥬</span>
                <span className="pereskioideae-index">03</span>
              </div>
              <h3>Edible leaves</h3>
              <p>
                Pereskia aculeata is known as a leafy food plant in
                Brazil, where its leaves are used in traditional
                cooking. Identify plants correctly before eating
                any part of them.
              </p>
            </article>
          </div>
        </section>

        <section className="pereskioideae-section" id="pereskioideae-genera">
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <BookOpen size={15} />
              EXPLORE THE PLANTS
            </span>
            <h2>Meet some notable leafy cacti</h2>
            <p>
              These examples illustrate traditional Pereskia
              classifications and related changes in modern taxonomy.
            </p>
          </div>

          <div className="pereskioideae-genera-grid">
            {featuredGenera.map((genus, index) => (
              <article className="pereskioideae-genus-card" key={genus.name}>
                <div className="pereskioideae-genus-top">
                  <span className="pereskioideae-genus-emoji">
                    {genus.emoji}
                  </span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <span className="pereskioideae-genus-subtitle">
                  {genus.subtitle}
                </span>
                <h3>{genus.name}</h3>
                <p>{genus.description}</p>
                <div className="pereskioideae-genus-highlight">
                  <Leaf size={15} />
                  <span>{genus.highlight}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pereskioideae-section">
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <BookOpen size={15} />
              QUICK IDENTIFICATION
            </span>
            <h2>Leafy cacti vs. other cactus groups</h2>
            <p>
              Compare common characteristics of traditional
              Pereskia species with those found in other subfamilies.
            </p>
          </div>

          <div className="pereskioideae-reference-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Traditional Pereskia</th>
                  <th scope="col">Other cactus groups</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, pereskia, others]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td>{pereskia}</td>
                    <td>{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="pereskioideae-care">
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <Sprout size={15} />
              GROWING GUIDE
            </span>
            <h2>How to care for leafy cacti</h2>
            <p>
              Their care can differ from that of desert cacti.
              Start with these general guidelines and adjust to
              your particular species.
            </p>
          </div>

          <div className="pereskioideae-care-grid">
            {careTips.map((tip, index) => (
              <article className="pereskioideae-care-card" key={tip.title}>
                <span className="pereskioideae-care-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>

          <div className="pereskioideae-safety-note">
            <ShieldCheck size={21} />
            <p>
              <strong>Growing reminder:</strong> some leafy cacti
              have sharp spines and vigorous climbing growth. Wear
              suitable protection when pruning, and research whether
              a species is invasive before planting it outdoors.
            </p>
          </div>
        </section>

        <section className="pereskioideae-section">
          <div className="pereskioideae-section-heading">
            <span className="pereskioideae-section-kicker">
              <Sparkles size={15} />
              IN A NUTSHELL
            </span>
            <h2>A leafy window into cactus evolution</h2>
            <p>
              Traditional Pereskia species show that cacti do not
              always look like desert plants. With broad leaves,
              slender woody stems, rose-like flowers, and distinctive
              areoles, they offer a fascinating perspective on the
              diversity and evolutionary history of the cactus family.
            </p>
          </div>
        </section>

        <section className="pereskioideae-bottom-cta">
          <div className="pereskioideae-cta-icon">🌿</div>
          <div>
            <span>KEEP DISCOVERING</span>
            <h2>Every cactus has a story.</h2>
            <p>Explore another cactus group with Cactora.</p>
          </div>
          <Link to="/explore" className="pereskioideae-cta-link">
            Explore more
            <ArrowRight size={17} />
          </Link>
        </section>

        <p className="pereskioideae-botanical-note">
          Botanical note: Pereskioideae is a traditional taxonomic
          grouping, and modern classifications differ in how leafy
          cactus lineages are organised. Species names, counts, and
          growing requirements should be checked against current
          botanical references.
        </p>
      </div>
    </main>
  )
}

export default PereskioideaeGuide