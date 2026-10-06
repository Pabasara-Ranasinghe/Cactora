import { Search, SlidersHorizontal, Sun, Droplets } from 'lucide-react'

const cactusData = [
  {
    id: 1,
    name: 'Golden Barrel Cactus',
    scientificName: 'Echinocactus grusonii',
    category: 'Barrel',
    sunlight: 'Full Sun',
    watering: 'Low',
    emoji: '🌵',
  },
  {
    id: 2,
    name: 'Bunny Ears Cactus',
    scientificName: 'Opuntia microdasys',
    category: 'Opuntia',
    sunlight: 'Full Sun',
    watering: 'Low',
    emoji: '🌵',
  },
  {
    id: 3,
    name: 'Christmas Cactus',
    scientificName: 'Schlumbergera truncata',
    category: 'Forest',
    sunlight: 'Bright Indirect',
    watering: 'Moderate',
    emoji: '🌵',
  },
  {
    id: 4,
    name: 'Fairy Castle Cactus',
    scientificName: 'Acanthocereus tetragonus',
    category: 'Columnar',
    sunlight: 'Full Sun',
    watering: 'Low',
    emoji: '🌵',
  },
  {
    id: 5,
    name: 'Moon Cactus',
    scientificName: 'Gymnocalycium mihanovichii',
    category: 'Grafted',
    sunlight: 'Bright Light',
    watering: 'Low',
    emoji: '🌵',
  },
  {
    id: 6,
    name: 'Old Man Cactus',
    scientificName: 'Cephalocereus senilis',
    category: 'Columnar',
    sunlight: 'Full Sun',
    watering: 'Low',
    emoji: '🌵',
  },
]

function CactusCard({ cactus }) {
  return (
    <article className="cactus-card">
      <div className="cactus-card-image">
        <span>{cactus.emoji}</span>
      </div>

      <div className="cactus-card-content">
        <span className="cactus-card-category">
          {cactus.category}
        </span>

        <h2>{cactus.name}</h2>

        <p className="cactus-card-scientific">
          {cactus.scientificName}
        </p>

        <div className="cactus-card-details">
          <span>
            <Sun size={15} />
            {cactus.sunlight}
          </span>

          <span>
            <Droplets size={15} />
            {cactus.watering}
          </span>
        </div>
      </div>
    </article>
  )
}

function Explore() {
  return (
    <section className="explore-page">
      <div className="explore-container">

        {/* Page Header */}
        <div className="explore-header">
          <div>
            <p className="page-label">Cactus Explorer</p>

            <h1 className="explore-title">
              Discover your next cactus.
            </h1>

            <p className="explore-description">
              Explore different cactus species and learn
              about their characteristics, origins, and care.
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="explore-toolbar">

          <div className="explore-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search cactus species..."
            />
          </div>

          <button
            type="button"
            className="explore-filter-button"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

        </div>

        {/* Results */}
        <div className="explore-results-header">
          <span>Popular species</span>
          <span>{cactusData.length} species</span>
        </div>

        {/* Cactus Grid */}
        <div className="cactus-grid">
          {cactusData.map((cactus) => (
            <CactusCard
              key={cactus.id}
              cactus={cactus}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Explore