
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Flower2,
  Globe2,
  Leaf,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  TreeDeciduous,
} from 'lucide-react'

import './LeuenbergerioideaeGuide.css'

const atAGlance = [
  {
    label: 'Native range',
    value:
      'Caribbean islands and parts of northern South America, Central America and Panama, depending on the species.',
  },
  {
    label: 'Taxonomic history',
    value:
      'Species were historically placed in Pereskia. Leuenbergeria was established as a separate genus in 2012; its classification at subfamily level depends on the taxonomic system used.',
  },
  {
    label: 'Distribution today',
    value:
      'Mostly tropical and subtropical habitats, with selected species cultivated in botanical collections and specialist gardens.',
  },
  {
    label: 'Common names',
    value:
      'Caribbean leafy cacti and, for Leuenbergeria quisqueyana, Bayahibe rose.',
  },
  {
    label: 'Flower colours',
    value:
      'White, cream, yellow, pink and rose tones, varying by species.',
  },
  {
    label: 'Soil preference',
    value:
      'A fertile, airy, well-draining mix. For cultivation, try about 60% quality potting mix and 40% perlite or coarse horticultural material, adjusting for local conditions.',
  },
  {
    label: 'Recognised genus',
    value:
      'Leuenbergeria. Species numbers and classification may vary between botanical references.',
  },
  {
    label: 'Signature features',
    value:
      'Broad, persistent leaves, woody stems, and cactus areoles bearing spines. Some species develop bark relatively early.',
  },
]

const fascinatingFacts = [
  {
    icon: TreeDeciduous,
    number: '01',
    title: 'Cacti that grow like trees',
    description:
      'Unlike the familiar desert cactus, Leuenbergeria species can grow as leafy shrubs or small trees. Their branches carry ordinary-looking leaves and develop woody surfaces as they mature.',
  },
  {
    icon: Leaf,
    number: '02',
    title: 'Leaves remain central to growth',
    description:
      'These plants retain functional leaves rather than relying primarily on thick, water-storing stems. Their green leaves carry out photosynthesis and help support active growth.',
  },
  {
    icon: Flower2,
    number: '03',
    title: 'The Bayahibe rose',
    description:
      'Leuenbergeria quisqueyana is associated with the Bayahibe rose, the national flower of the Dominican Republic. It is a particularly important example of the group’s botanical and cultural significance.',
  },
  {
    icon: Globe2,
    number: '04',
    title: 'Island biodiversity',
    description:
      'Some species have restricted geographic ranges. When a plant occurs only on a particular island or in a small area, habitat destruction can put its long-term survival at risk.',
  },
  {
    icon: Sprout,
    number: '05',
    title: 'Fleshy fruits and wildlife',
    description:
      'Leuenbergeria species can produce fleshy fruits. These may provide food for wildlife, and animals can help disperse seeds through their habitats.',
  },
  {
    icon: Mountain,
    number: '06',
    title: 'Clues to cactus evolution',
    description:
      'Their leafy, woody growth helps scientists understand the diversity of early cactus forms. Living Leuenbergeria species are modern plants, not unchanged ancestors of every other cactus.',
  },
]

const featuredSpecies = [
  {
    number: '01',
    name: 'Leuenbergeria quisqueyana',
    subtitle: 'The Bayahibe rose',
    emoji: '🌸',
    description:
      'A distinctive Caribbean cactus associated with the Dominican Republic. Its restricted natural range makes habitat conservation particularly important.',
    highlight: 'National flower of the Dominican Republic',
  },
  {
    number: '02',
    name: 'Leuenbergeria bleo',
    subtitle: 'The colourful leafy cactus',
    emoji: '🌺',
    description:
      'A tropical, leafy cactus known for its showy flowers. This species was historically described as Pereskia bleo before being placed in Leuenbergeria.',
    highlight: 'Broad leaves and striking blooms',
  },
  {
    number: '03',
    name: 'Leuenbergeria portulacifolia',
    subtitle: 'A Caribbean species',
    emoji: '🌿',
    description:
      'A woody, leafy cactus associated with Caribbean environments. Its appearance illustrates how cactus species can look more like ordinary shrubs than desert succulents.',
    highlight: 'Woody stems and persistent foliage',
  },
  {
    number: '04',
    name: 'Leuenbergeria guamacho',
    subtitle: 'The tropical tree-like cactus',
    emoji: '🌳',
    description:
      'A woody cactus native to parts of northern South America and nearby regions. It demonstrates the range of growth forms found among leafy cacti.',
    highlight: 'Tree-like growth habit',
  },
]

const careGuidelines = [
  {
    icon: Sun,
    title: 'Light',
    description:
      'Provide bright light and some gentle direct sun. Introduce plants to stronger sunlight gradually, especially in hot tropical climates.',
  },
  {
    icon: Sprout,
    title: 'Soil',
    description:
      'Use a fertile, airy medium that drains freely. Avoid heavy soil that remains waterlogged around the roots.',
  },
  {
    icon: Leaf,
    title: 'Watering',
    description:
      'Water thoroughly when appropriate for the growing conditions, then allow excess water to drain. Do not treat these leafy plants exactly like extremely drought-adapted desert cacti.',
  },
  {
    icon: Flower2,
    title: 'Temperature',
    description:
      'Generally favour warm conditions. Protect tropical species from frost and prolonged cold; exact temperature tolerance differs by species.',
  },
  {
    icon: ShieldCheck,
    title: 'Protection',
    description:
      'Check stems and the undersides of leaves for pests. Wear gloves when handling spiny branches and avoid damaging the plant’s areoles.',
  },
  {
    icon: BookOpen,
    title: 'Responsible cultivation',
    description:
      'Choose nursery-propagated plants from reputable sources. Never collect rare or threatened plants from the wild without appropriate legal authorisation.',
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="leuenbergerioideae-section-heading">
      <span className="leuenbergerioideae-section-kicker">
        <Sparkles size={15} aria-hidden="true" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  )
}

export default function LeuenbergerioideaeGuide() {
  return (
    <main className="leuenbergerioideae-page">
      <div className="leuenbergerioideae-container">
        <a className="leuenbergerioideae-back" href="/explore">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Explore
        </a>

        <section className="leuenbergerioideae-hero">
          <div className="leuenbergerioideae-hero-visual">
            <span
              className="leuenbergerioideae-hero-orbit orbit-one"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              className="leuenbergerioideae-hero-orbit orbit-two"
              aria-hidden="true"
            >
              ✿
            </span>

            <span className="leuenbergerioideae-hero-emoji" aria-hidden="true">
              🌺
            </span>

            <div className="leuenbergerioideae-hero-caption">
              <Leaf size={15} aria-hidden="true" />
              The Caribbean leafy cacti
            </div>
          </div>

          <div className="leuenbergerioideae-hero-copy">
            <span className="leuenbergerioideae-eyebrow">
              CACTORA BOTANICAL GUIDE
            </span>

            <div className="leuenbergerioideae-pill">
              <TreeDeciduous size={15} aria-hidden="true" />
              WOODY · LEAFY · TROPICAL
            </div>

            <h1>Leuenbergerioideae</h1>

            <p className="leuenbergerioideae-hero-subtitle">
              The Caribbean Leafy Cactus Subfamily
            </p>

            <p className="leuenbergerioideae-hero-description">
              Once classified within Pereskia, Leuenbergeria represents a
              remarkable group of leafy, woody cacti. Its unusual growth form
              offers a fascinating window into cactus diversity and evolution.
            </p>

            <div className="leuenbergerioideae-hero-stats">
              <div>
                <strong>Leafy</strong>
                <span>Persistent foliage</span>
              </div>

              <div>
                <strong>Woody</strong>
                <span>Shrubs and small trees</span>
              </div>

              <div>
                <strong>Tropical</strong>
                <span>Warm-climate habitats</span>
              </div>
            </div>

            <a
              className="leuenbergerioideae-primary-button"
              href="#leuenbergerioideae-overview"
            >
              Explore the guide
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="leuenbergerioideae-section"
          id="leuenbergerioideae-overview"
        >
          <SectionHeading
            eyebrow="BOTANICAL PROFILE"
            title="Leuenbergerioideae at a Glance"
            description="Discover the geographical range, botanical characteristics, and cultivation preferences of these unusual leafy cacti."
          />

          <div className="leuenbergerioideae-reference-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Detail</th>
                  <th scope="col">Information</th>
                </tr>
              </thead>

              <tbody>
                {atAGlance.map((item) => (
                  <tr key={item.label}>
                    <th scope="row">{item.label}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="leuenbergerioideae-section">
          <SectionHeading
            eyebrow="DISCOVER THE DIFFERENCE"
            title="Fascinating Facts"
            description="Explore the features that make Leuenbergeria stand out among the world's cacti."
          />

          <div className="leuenbergerioideae-facts-grid">
            {fascinatingFacts.map((fact) => {
              const Icon = fact.icon

              return (
                <article
                  className="leuenbergerioideae-fact-card"
                  key={fact.number}
                >
                  <div className="leuenbergerioideae-fact-top">
                    <span className="leuenbergerioideae-fact-icon">
                      <Icon size={23} aria-hidden="true" />
                    </span>

                    <span className="leuenbergerioideae-index">
                      {fact.number}
                    </span>
                  </div>

                  <h3>{fact.title}</h3>
                  <p>{fact.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="leuenbergerioideae-habitat">
          <div className="leuenbergerioideae-habitat-art" aria-hidden="true">
            <span>🌴</span>
            <span>🌿</span>
            <span>🌺</span>
          </div>

          <div>
            <span className="leuenbergerioideae-section-kicker">
              <Globe2 size={15} aria-hidden="true" />
              HABITAT & EVOLUTION
            </span>

            <h2>A Different Side of the Cactus Family</h2>

            <p>
              Leuenbergeria species are associated with tropical and
              subtropical environments rather than the stereotypical open
              desert. Their combination of leaves, woody stems, and cactus
              areoles illustrates why the cactus family is much more diverse
              than its familiar spiny silhouettes suggest.
            </p>
          </div>
        </section>

        <section className="leuenbergerioideae-section">
          <SectionHeading
            eyebrow="MEET THE PLANTS"
            title="Featured Leuenbergeria Species"
            description="A closer look at selected species and the distinctive characteristics associated with them."
          />

          <div className="leuenbergerioideae-genera-grid">
            {featuredSpecies.map((species) => (
              <article
                className="leuenbergerioideae-genus-card"
                key={species.number}
              >
                <div className="leuenbergerioideae-genus-top">
                  <span className="leuenbergerioideae-genus-emoji" aria-hidden="true">
                    {species.emoji}
                  </span>

                  <span>{species.number}</span>
                </div>

                <span className="leuenbergerioideae-genus-subtitle">
                  {species.subtitle}
                </span>

                <h3>{species.name}</h3>

                <p>{species.description}</p>

                <div className="leuenbergerioideae-genus-highlight">
                  <Leaf size={15} aria-hidden="true" />
                  <span>{species.highlight}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="leuenbergerioideae-section">
          <SectionHeading
            eyebrow="IDENTIFICATION GUIDE"
            title="How Does It Compare?"
            description="Compare the typical growth forms of Leuenbergeria, Pereskia in its traditional sense, and the diverse Cactoideae."
          />

          <div className="leuenbergerioideae-reference-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Leuenbergeria</th>
                  <th scope="col">Pereskia s.s.</th>
                  <th scope="col">Cactoideae</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">True leaves</th>
                  <td>Broad, generally persistent</td>
                  <td>Broad, generally persistent</td>
                  <td>Usually absent or highly reduced</td>
                </tr>

                <tr>
                  <th scope="row">Stem development</th>
                  <td>Woody stems; bark can develop early</td>
                  <td>Woody or greenish stems, depending on species</td>
                  <td>Often succulent stems</td>
                </tr>

                <tr>
                  <th scope="row">Main photosynthetic surfaces</th>
                  <td>Leaves are important</td>
                  <td>Leaves and green stems can contribute</td>
                  <td>Usually green stems</td>
                </tr>

                <tr>
                  <th scope="row">Areoles and spines</th>
                  <td>Present</td>
                  <td>Present</td>
                  <td>Present in typical members</td>
                </tr>

                <tr>
                  <th scope="row">Typical appearance</th>
                  <td>Leafy shrub or small tree</td>
                  <td>Leafy shrub or climber</td>
                  <td>Highly varied succulent forms</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leuenbergerioideae-botanical-note">
            Botanical note: these are broad comparisons, not absolute
            identification rules. Traits vary among species, and the boundaries
            between historical and modern taxonomic classifications can differ.
          </p>
        </section>

        <section className="leuenbergerioideae-care">
          <SectionHeading
            eyebrow="GROWING GUIDE"
            title="Caring for Leafy Cacti"
            description="These plants generally appreciate warmer, more fertile growing conditions than many arid-desert cacti."
          />

          <div className="leuenbergerioideae-care-grid">
            {careGuidelines.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  className="leuenbergerioideae-care-card"
                  key={item.title}
                >
                  <span className="leuenbergerioideae-care-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="leuenbergerioideae-care-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>

          <div className="leuenbergerioideae-safety-note">
            <ShieldCheck size={21} aria-hidden="true" />

            <p>
              <strong>Grow responsibly.</strong> Protect rare plants and their
              natural habitats. Temperature, watering, and light requirements
              vary between species, so check the needs of the plant you grow.
            </p>
          </div>
        </section>

        <section className="leuenbergerioideae-bottom-cta">
          <div className="leuenbergerioideae-cta-icon" aria-hidden="true">
            🌱
          </div>

          <div>
            <span>KEEP EXPLORING</span>

            <h2>Not Every Cactus Looks Like a Cactus</h2>

            <p>
              Discover more remarkable plants and explore the extraordinary
              diversity of the cactus family with Cactora.
            </p>
          </div>

          <a className="leuenbergerioideae-cta-link" href="/explore">
            Explore cacti
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </section>

        <p className="leuenbergerioideae-botanical-note">
          Scientific names, species boundaries, and subfamily classifications
          may vary between botanical sources. This guide provides an
          educational overview; consult current botanical references for
          formal taxonomic determinations.
        </p>
      </div>
    </main>
  )
}
