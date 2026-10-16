import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Droplets,
  Flower2,
  Leaf,
  Mountain,
  Moon,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import './CactoideaeGuide.css'

const overviewFacts = [
  {
    icon: '🌵',
    label: 'Species diversity',
    value: '1,400+ species',
    detail: 'An exceptionally diverse cactus subfamily; estimates vary by classification.',
  },
  {
    icon: '🌿',
    label: 'Genera',
    value: 'Around 130+',
    detail: 'The exact number depends on the taxonomic system used.',
  },
  {
    icon: '☀️',
    label: 'Photosynthesis',
    value: 'Succulent stems',
    detail: 'Mature plants generally rely on green stems rather than persistent true leaves.',
  },
  {
    icon: '🏜️',
    label: 'Habitats',
    value: 'Deserts to forests',
    detail: 'Species occupy dry regions, mountains, and tropical forest habitats.',
  },
  {
    icon: '🌱',
    label: 'Growth forms',
    value: 'Remarkable variety',
    detail: 'Globular, columnar, climbing, trailing, and epiphytic plants.',
  },
  {
    icon: '🔎',
    label: 'Areoles',
    value: 'A cactus hallmark',
    detail: 'Specialized structures from which spines, flowers, and shoots can develop.',
  },
]

const fascinatingFacts = [
  {
    icon: <Droplets size={23} />,
    number: '01',
    title: "Nature's water-storage specialists",
    description:
      'Many Cactoideae have thick, succulent stems that store water. Ribs and folds in some species allow the stems to expand after rain and contract during dry periods.',
    highlight: 'Water storage',
    emoji: '💧',
  },
  {
    icon: <Ruler size={23} />,
    number: '02',
    title: 'From tiny plants to desert giants',
    description:
      'The group includes tiny, low-growing species such as Blossfeldia liliputana and towering saguaros that can reach many metres in height and live for well over a century.',
    highlight: 'Amazing sizes',
    emoji: '📏',
  },
  {
    icon: <Mountain size={23} />,
    number: '03',
    title: 'Desert survivors and forest dwellers',
    description:
      'Some species thrive in hot, dry landscapes, while others grow on trees in humid tropical forests. Christmas cactus, Rhipsalis, and dragon fruit cacti show this remarkable variety.',
    highlight: 'Different habitats',
    emoji: '🏜️',
  },
  {
    icon: <Flower2 size={23} />,
    number: '04',
    title: 'Flowers that steal the show',
    description:
      'Cactus flowers range from delicate blooms to enormous, dramatic flowers. Some species flower at night and are pollinated by bats or moths; others attract daytime pollinators.',
    highlight: 'Beautiful blooms',
    emoji: '🌸',
  },
  {
    icon: <ShieldCheck size={23} />,
    number: '05',
    title: 'Ingenious survival adaptations',
    description:
      'Areoles are distinctive cactus structures. Spines can provide shade and protection, while many species use CAM photosynthesis, opening their stomata mainly at night to reduce water loss.',
    highlight: 'Natural engineering',
    emoji: '🛡️',
  },
  {
    icon: <Moon size={23} />,
    number: '06',
    title: 'Roots that make the most of rain',
    description:
      'Many desert cacti have shallow, widely spreading roots that can quickly absorb water from brief rainfall. Root depth and spread vary according to species and habitat.',
    highlight: 'Rain collection',
    emoji: '🌧️',
  },
]

const genusGroups = [
  {
    icon: '🏔️',
    title: 'Columnar giants',
    description: 'Upright, tree-like or branching growth forms.',
    genera: [
      ['Carnegiea', 'The iconic saguaro cactus.'],
      ['Cereus', 'Columnar cacti found in the Americas.'],
      ['Trichocereus', 'A group of columnar and clustering cacti.'],
      ['Pilosocereus', 'Often tall, ribbed cacti with woolly areoles.'],
    ],
  },
  {
    icon: '🟢',
    title: 'Globular beauties',
    description: 'Rounded or compact cacti in many shapes.',
    genera: [
      ['Echinocactus', 'Includes the famous golden barrel cactus.'],
      ['Ferocactus', 'Robust barrel cacti with prominent spines.'],
      ['Mammillaria', 'Often small cacti with distinctive tubercles.'],
      ['Echinopsis', 'Known for striking, often large flowers.'],
      ['Gymnocalycium', 'Compact cacti with attractive flowers.'],
    ],
  },
  {
    icon: '🌿',
    title: 'Epiphytic stars',
    description: 'Forest cacti adapted to life in humid environments.',
    genera: [
      ['Epiphyllum', 'Leaf-like flattened stems and showy flowers.'],
      ['Selenicereus', 'Includes dragon fruit-producing species.'],
      ['Schlumbergera', 'Includes the popular Christmas cactus.'],
      ['Rhipsalis', 'Often has soft, trailing stems.'],
    ],
  },
  {
    icon: '🪨',
    title: 'Unique oddities',
    description: 'Unusual forms that stand out among cacti.',
    genera: [
      ['Astrophytum', 'Often star-shaped, ribbed, and speckled.'],
      ['Lophophora', 'Small, spineless, rounded cacti.'],
      ['Blossfeldia', 'Includes some of the smallest known cacti.'],
    ],
  },
]

const comparisonRows = [
  {
    feature: 'Persistent true leaves',
    cactoideae: 'Generally absent on mature plants',
    other: 'Present in Pereskia and Leuenbergeria',
  },
  {
    feature: 'Glochids',
    cactoideae: 'Absent',
    other: 'Characteristic of many Opuntioideae',
  },
  {
    feature: 'Areoles',
    cactoideae: 'Present',
    other: 'Present throughout the cactus family',
  },
  {
    feature: 'Growth forms',
    cactoideae: 'Globular, columnar, climbing, and epiphytic',
    other: 'Forms vary by subfamily',
  },
]

function CactoideaeGuide() {
  return (
    <main className="cactoideae-guide">
      <div className="cactoideae-container">
        <Link to="/explore" className="cactoideae-back">
          <ArrowLeft size={17} />
          Back to Explore
        </Link>

        <header className="cactoideae-hero">
          <div className="cactoideae-hero-content">
            <span className="cactoideae-eyebrow">
              <Sparkles size={15} />
              CACTORA BOTANICAL GUIDE
            </span>

            <span className="cactoideae-pill">
              Subfamily 01 · Cactoideae
            </span>

            <h1>
              The largest and most diverse cactus subfamily
              <span> Cactoideae</span>
            </h1>

            <p className="cactoideae-hero-description">
              Meet the extraordinary group behind many familiar
              cacti, from towering desert giants to beautiful
              forest-dwelling plants.
            </p>

            <a href="#cactoideae-facts" className="cactoideae-primary">
              Discover fascinating facts
              <ArrowRight size={17} />
            </a>

            <div className="cactoideae-hero-note">
              <Leaf size={17} />
              One subfamily, an extraordinary range of adaptations.
            </div>
          </div>

          <div className="cactoideae-hero-art" aria-label="Cactus emoji illustration">
            <span className="cactoideae-star star-one">✦</span>
            <span className="cactoideae-star star-two">✧</span>
            <span className="cactoideae-art-cactus">🌵</span>
            <span className="cactoideae-art-flower">🌸</span>
            <span className="cactoideae-art-leaf">🌿</span>
            <div className="cactoideae-art-caption">
              <span>🌞</span>
              <div>
                <strong>Built for survival</strong>
                <small>Discover nature's ingenuity</small>
              </div>
            </div>
          </div>
        </header>

        <section className="cactoideae-section" id="cactoideae-overview">
          <div className="cactoideae-section-heading">
            <span className="cactoideae-section-label">
              <BookOpen size={16} />
              AT A GLANCE
            </span>
            <h2>Meet Cactoideae</h2>
            <p>
              The key characteristics that make this subfamily
              so remarkable.
            </p>
          </div>

          <div className="cactoideae-overview-grid">
            {overviewFacts.map((fact) => (
              <article className="cactoideae-overview-card" key={fact.label}>
                <span className="cactoideae-overview-icon">
                  {fact.icon}
                </span>
                <span className="cactoideae-overview-label">
                  {fact.label}
                </span>
                <h3>{fact.value}</h3>
                <p>{fact.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="cactoideae-section"
          id="cactoideae-facts"
        >
          <div className="cactoideae-section-heading">
            <span className="cactoideae-section-label">
              <Sparkles size={16} />
              FASCINATING FACTS
            </span>
            <h2>Small details, extraordinary adaptations</h2>
            <p>
              Explore how Cactoideae plants store water, survive
              different environments, and reproduce.
            </p>
          </div>

          <div className="cactoideae-facts-grid">
            {fascinatingFacts.map((fact) => (
              <article className="cactoideae-fact-card" key={fact.number}>
                <div className="cactoideae-fact-top">
                  <span className="cactoideae-fact-icon">
                    {fact.icon}
                  </span>
                  <span className="cactoideae-fact-number">
                    {fact.number}
                  </span>
                </div>
                <span className="cactoideae-fact-highlight">
                  {fact.emoji} {fact.highlight}
                </span>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cactoideae-habitat-banner">
          <div>
            <span className="cactoideae-section-label">
              <Sun size={16} />
              TWO VERY DIFFERENT WORLDS
            </span>
            <h2>From sun-baked deserts to tropical forests</h2>
            <p>
              Cactoideae includes plants adapted to very different
              habitats. Not every cactus wants intense, direct sun:
              forest species often need filtered light and more
              regular moisture.
            </p>
          </div>

          <div className="cactoideae-habitat-emojis">
            <div>
              <span>🏜️</span>
              <strong>Desert cacti</strong>
              <small>Sun, dry conditions, and water storage</small>
            </div>
            <div>
              <span>🌳</span>
              <strong>Forest cacti</strong>
              <small>Filtered light and humid environments</small>
            </div>
          </div>
        </section>

        <section className="cactoideae-section" id="cactoideae-genera">
          <div className="cactoideae-section-heading">
            <span className="cactoideae-section-label">
              <Leaf size={16} />
              FAMOUS GENERA
            </span>
            <h2>Cacti you might recognise</h2>
            <p>
              Discover representative genera and the characteristics
              that make them memorable.
            </p>
          </div>

          <div className="cactoideae-genera-grid">
            {genusGroups.map((group) => (
              <article className="cactoideae-genus-group" key={group.title}>
                <div className="cactoideae-genus-group-heading">
                  <span>{group.icon}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <ul>
                  {group.genera.map(([name, detail]) => (
                    <li key={name}>
                      <span className="cactoideae-genus-dot">
                        <Leaf size={14} />
                      </span>
                      <div>
                        <strong>{name}</strong>
                        <p>{detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cactoideae-section">
          <div className="cactoideae-section-heading">
            <span className="cactoideae-section-label">
              <ShieldCheck size={16} />
              QUICK IDENTIFICATION
            </span>
            <h2>How does Cactoideae compare?</h2>
            <p>
              A useful introduction to some differences between
              cactus subfamilies.
            </p>
          </div>

          <div className="cactoideae-table-wrap">
            <table className="cactoideae-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Cactoideae</th>
                  <th>Other subfamilies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    <td>{row.cactoideae}</td>
                    <td>{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cactoideae-table-note">
            Botanical note: Cactoideae is a diverse group, so
            individual traits vary by species. Areoles are a defining
            feature of cacti generally, not only this subfamily.
          </p>
        </section>

        <section className="cactoideae-summary">
          <div className="cactoideae-summary-icon">🌵</div>
          <div>
            <span className="cactoideae-section-label">
              <Flower2 size={16} />
              IN SHORT
            </span>
            <h2>One subfamily, countless ways to thrive.</h2>
            <p>
              From saguaros towering over desert landscapes to
              Christmas cacti growing in homes and dragon fruit
              climbing through tropical gardens, Cactoideae shows
              how diverse cactus forms and adaptations can be.
              Their stories reveal an extraordinary range of
              strategies for living in very different environments.
            </p>
            <Link to="/explore" className="cactoideae-secondary">
              Explore all subfamilies
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <footer className="cactoideae-footer-note">
          <BookOpen size={17} />
          <p>
            This guide is an educational introduction. Species counts,
            genus boundaries, and classification can vary between
            botanical references.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default CactoideaeGuide
