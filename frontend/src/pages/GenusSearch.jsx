
import { useMemo, useState } from 'react'
import { Search, Leaf, ArrowRight } from 'lucide-react'
import cactusGenera from '../data/cactusGenera'
import './GenusSearch.css'

function GenusSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubfamily, setSelectedSubfamily] = useState('All')

  const subfamilies = [
    'All',
    ...new Set(cactusGenera.map((genus) => genus.subfamily)),
  ]

  const filteredGenera = useMemo(() => {
    return cactusGenera.filter((genus) => {
      const matchesSearch = `${genus.name} ${genus.description}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      const matchesSubfamily =
        selectedSubfamily === 'All' ||
        genus.subfamily === selectedSubfamily

      return matchesSearch && matchesSubfamily
    })
  }, [searchTerm, selectedSubfamily])

  return (
    <main className="genus-search-page">
      <section className="genus-search-hero">
        <span className="genus-search-eyebrow">
          <Leaf size={16} />
          THE CACTORA COLLECTION
        </span>

        <h1>Search by Genus</h1>

        <p>
          Discover the fascinating diversity of cacti, explore their
          genera, and learn what makes each group unique.
        </p>

        <div className="genus-search-bar">
          <Search size={21} />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search cactus genera..."
            aria-label="Search cactus genera"
          />
        </div>
      </section>

      <section className="genus-search-content">
        <div className="genus-search-heading">
          <div>
            <h2>Explore Cactus Genera</h2>
            <p>
              Browse the collection by scientific name and subfamily.
            </p>
          </div>

          <span className="genus-search-count">
            {filteredGenera.length} {filteredGenera.length === 1 ? 'genus' : 'genera'}
          </span>
        </div>

        <div className="genus-subfamily-filters">
          {subfamilies.map((subfamily) => (
            <button
              key={subfamily}
              type="button"
              className={`genus-filter-button ${
                selectedSubfamily === subfamily ? 'active' : ''
              }`}
              onClick={() => setSelectedSubfamily(subfamily)}
            >
              {subfamily}
            </button>
          ))}
        </div>

        {filteredGenera.length > 0 ? (
          <div className="genus-card-grid">
            {filteredGenera.map((genus) => (
              <article className="genus-card" key={genus.id}>
                <div className="genus-card-image">
                  <div className="genus-image-placeholder">
                    <Leaf size={38} />
                    <span>Finding a cactus photo...</span>
                  </div>
                </div>

                <div className="genus-card-content">
                  <span className="genus-card-subfamily">
                    {genus.subfamily}
                  </span>

                  <h3>{genus.name}</h3>

                  <p>{genus.description}</p>

                  <button
                    type="button"
                    className="genus-card-link"
                    onClick={() => {
                      window.location.href = `/genera/${genus.id}`
                    }}
                  >
                    Explore genus <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="genus-search-empty">
            <Leaf size={40} />
            <h3>No genera found</h3>
            <p>Try another search term or select a different subfamily.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default GenusSearch
