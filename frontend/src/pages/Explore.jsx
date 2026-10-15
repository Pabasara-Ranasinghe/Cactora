
import { useMemo, useState } from 'react'
import {
  Search,
  ChevronDown,
  Leaf,
  Sprout,
  Flower2,
  Sun,
  Info,
  X,
} from 'lucide-react'

const cactusFamilies = [
  {
    id: 'cactoideae',
    name: 'Cactoideae',
    subtitle: 'The diverse desert cacti',
    description:
      'The largest and most diverse cactus subfamily, containing many familiar globular, columnar, and flowering cacti.',
    icon: '🌵',
    accent: '#23865B',
    genera: [
      {
        name: 'Mammillaria',
        detail: 'Small, rounded cacti with distinctive tubercles and often beautiful rings of flowers.',
      },
      {
        name: 'Echinopsis',
        detail: 'Known for rounded or elongated stems and large, spectacular flowers.',
      },
      {
        name: 'Gymnocalycium',
        detail: 'Compact cacti with ribbed bodies and attractive blooms.',
      },
      {
        name: 'Cereus',
        detail: 'Often tall, columnar cacti that grow into striking architectural shapes.',
      },
      {
        name: 'Astrophytum',
        detail: 'Distinctive star-shaped or ribbed cacti, sometimes covered in tiny white flecks.',
      },
      {
        name: 'Schlumbergera',
        detail: 'Forest cacti with segmented stems and colorful seasonal flowers.',
      },
    ],
  },
  {
    id: 'opuntioideae',
    name: 'Opuntioideae',
    subtitle: 'The prickly pear family',
    description:
      'Recognized for segmented stems, glochids in many species, and remarkable adaptations to dry environments.',
    icon: '🌱',
    accent: '#579447',
    genera: [
      {
        name: 'Opuntia',
        detail: 'Prickly pear cacti with flattened pads and, in some species, edible fruits.',
      },
      {
        name: 'Cylindropuntia',
        detail: 'Chollas with cylindrical stem segments and conspicuous spines.',
      },
      {
        name: 'Tephrocactus',
        detail: 'Often compact cacti with rounded, jointed stem segments.',
      },
      {
        name: 'Consolea',
        detail: 'Tree-like or branching cacti native mainly to the Caribbean region.',
      },
      {
        name: 'Maihueniopsis',
        detail: 'Low-growing, segmented cacti adapted to challenging habitats.',
      },
    ],
  },
  {
    id: 'maihuenioideae',
    name: 'Maihuenioideae',
    subtitle: 'Rare mountain cacti',
    description:
      'A small and distinctive group of South American cacti, including plants adapted to cool, exposed mountain habitats.',
    icon: '🏔️',
    accent: '#478C87',
    genera: [
      {
        name: 'Maihuenia',
        detail: 'Low-growing plants with small rounded leaves and compact, spiny stems.',
      },
      {
        name: 'Maihuenia poeppigii',
        detail: 'A cushion-forming cactus associated with the southern Andes and Patagonia.',
      },
    ],
  },
  {
    id: 'pereskioideae',
    name: 'Pereskioideae',
    subtitle: 'The leafy cacti',
    description:
      'Unlike many familiar cacti, these plants have noticeable leaves and woody stems, showing features associated with early-diverging cacti.',
    icon: '🍃',
    accent: '#70A85B',
    genera: [
      {
        name: 'Pereskia',
        detail: 'Leafy, often woody cacti with broad leaves and showy flowers.',
      },
      {
        name: 'Pereskia aculeata',
        detail: 'A climbing cactus with green leaves and delicate flowers.',
      },
      {
        name: 'Pereskia grandifolia',
        detail: 'A leafy cactus known for its pink flowers and shrub-like growth.',
      },
    ],
  },
  {
    id: 'leuenbergerioideae',
    name: 'Leuenbergerioideae',
    subtitle: 'Woody, leafy relatives',
    description:
      'A group of leafy, woody cacti from tropical America. Its members look quite different from the familiar spiny desert cactus.',
    icon: '🌿',
    accent: '#3B9272',
    genera: [
      {
        name: 'Leuenbergeria',
        detail: 'Woody plants with persistent leaves, branching stems, and cactus-family characteristics.',
      },
      {
        name: 'Leuenbergeria bleo',
        detail: 'A tropical, leafy cactus known for its bright orange-red flowers.',
      },
      {
        name: 'Leuenbergeria lychnidiflora',
        detail: 'A woody, leafy cactus native to parts of Central America.',
      },
    ],
  },
  {
    id: 'blossfeldioideae',
    name: 'Blossfeldioideae',
    subtitle: 'Tiny botanical wonders',
    description:
      'A remarkable group of miniature cacti. Some are exceptionally small and can be difficult to spot among rocks.',
    icon: '✨',
    accent: '#8B79B8',
    genera: [
      {
        name: 'Blossfeldia',
        detail: 'A genus of tiny, usually spineless-looking cacti that grow in rocky crevices.',
      },
      {
        name: 'Blossfeldia liliputana',
        detail: 'One of the smallest known cactus species, native to South America.',
      },
    ],
  },
]

function Explore() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFamily, setExpandedFamily] = useState(null)

  const filteredFamilies = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    if (!search) return cactusFamilies

    return cactusFamilies.filter((family) => {
      const familyMatches = [
        family.name,
        family.subtitle,
        family.description,
      ].some((value) => value.toLowerCase().includes(search))

      const genusMatches = family.genera.some((genus) =>
        `${genus.name} ${genus.detail}`.toLowerCase().includes(search),
      )

      return familyMatches || genusMatches
    })
  }, [searchTerm])

  function toggleFamily(familyId) {
    setExpandedFamily((current) =>
      current === familyId ? null : familyId,
    )
  }

  return (
    <main className="explore-page">
      <div className="explore-container">
        <header className="explore-header family-explore-header">
          <div>
            <p className="page-label">
              <Sprout size={16} />
              THE CACTUS COLLECTION
            </p>

            <h1 className="explore-title">
              Discover the world of <span>cacti.</span>
            </h1>

            <p className="explore-description">
              From tiny mountain cacti to leafy tropical relatives,
              explore the fascinating diversity of the cactus family.
            </p>
          </div>

          <div className="family-header-decoration" aria-hidden="true">
            <span>🌵</span>
            <span>🌱</span>
            <span>🌿</span>
          </div>
        </header>

        <section className="family-intro">
          <div className="family-intro-icon">
            <Leaf size={23} />
          </div>

          <div>
            <h2>Explore six cactus subfamilies</h2>
            <p>
              Choose a group to discover its representative genera,
              learn about their characteristics, and find your next
              botanical favourite.
            </p>
          </div>
        </section>

        <div className="explore-toolbar">
          <label className="explore-search family-search">
            <Search size={19} />

            <input
              type="search"
              placeholder="Search subfamilies or cactus genera..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            {searchTerm && (
              <button
                type="button"
                className="family-search-clear"
                aria-label="Clear search"
                onClick={() => setSearchTerm('')}
              >
                <X size={17} />
              </button>
            )}
          </label>
        </div>

        <div className="explore-results-header">
          <span>Explore the subfamilies</span>
          <span>{filteredFamilies.length} of 6 groups</span>
        </div>

        {filteredFamilies.length > 0 ? (
          <div className="family-grid">
            {filteredFamilies.map((family, index) => {
              const isExpanded =
                expandedFamily === family.id ||
                Boolean(
                  searchTerm.trim() &&
                  family.genera.some((genus) =>
                    genus.name
                      .toLowerCase()
                      .includes(searchTerm.trim().toLowerCase()),
                  ),
                )

              const visibleGenera = searchTerm.trim()
                ? family.genera.filter((genus) =>
                    `${genus.name} ${genus.detail}`
                      .toLowerCase()
                      .includes(searchTerm.trim().toLowerCase()),
                  )
                : family.genera

              return (
                <article
                  className={`family-card ${isExpanded ? 'family-card-expanded' : ''}`}
                  key={family.id}
                  style={{ '--family-accent': family.accent }}
                >
                  <div className="family-card-top">
                    <div className="family-card-icon" aria-hidden="true">
                      {family.icon}
                    </div>

                    <span className="family-card-number">
                      {String(cactusFamilies.findIndex(
                        (item) => item.id === family.id,
                      ) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="family-card-subtitle">
                    {family.subtitle}
                  </p>

                  <h2>{family.name}</h2>

                  <p className="family-card-description">
                    {family.description}
                  </p>

                  <div className="family-card-meta">
                    <span>
                      <Flower2 size={16} />
                      {family.genera.length} examples
                    </span>
                  </div>

                  <button
                    type="button"
                    className="family-expand-button"
                    aria-expanded={isExpanded}
                    aria-controls={`family-details-${family.id}`}
                    onClick={() => toggleFamily(family.id)}
                  >
                    {isExpanded ? 'Show less' : 'Explore subcategories'}
                    <ChevronDown
                      size={18}
                      className={isExpanded ? 'family-chevron-open' : ''}
                    />
                  </button>

                  {isExpanded && (
                    <div
                      className="family-subcategories"
                      id={`family-details-${family.id}`}
                    >
                      <h3>Genera and examples</h3>

                      {visibleGenera.length > 0 ? (
                        <ul>
                          {visibleGenera.map((genus) => (
                            <li key={genus.name}>
                              <div className="family-genus-icon">
                                <Leaf size={15} />
                              </div>

                              <div>
                                <h4>{genus.name}</h4>
                                <p>{genus.detail}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="family-no-match">
                          No matching examples in this group.
                        </p>
                      )}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <div className="explore-empty">
            <span>🌵</span>
            <h2>No matching cactus groups found</h2>
            <p>
              Try a different subfamily or genus name.
            </p>
            <button
              type="button"
              className="family-reset-button"
              onClick={() => setSearchTerm('')}
            >
              Show all subfamilies
            </button>
          </div>
        )}

        <section className="family-learning-note">
          <div className="family-learning-icon">
            <Info size={22} />
          </div>

          <div>
            <h2>A little botanical note</h2>
            <p>
              Cactus classification continues to evolve, and some
              taxonomic systems group these plants differently.
              Cactora presents these six subfamilies as a learning
              guide. The examples are representative genera and species,
              not an exhaustive list.
            </p>
          </div>
        </section>

        <section className="family-bottom-cta">
          <div>
            <p className="page-label">KEEP EXPLORING</p>
            <h2>Every cactus has a story.</h2>
            <p>
              Learn about their unique adaptations, habitats, and
              fascinating characteristics.
            </p>
          </div>

          <div className="family-cta-icon" aria-hidden="true">
            <Sun size={34} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Explore
