import { useEffect, useRef } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Droplets,
  Flower2,
  Leaf,
  Lightbulb,
  Sparkles,
  Sun,
  Trees,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const subfamilies = [
  {
    number: '01',
    name: 'Cactoideae',
    description:
      'Discover an extraordinary variety of globular, barrel, columnar, and epiphytic cacti.',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    name: 'Opuntioideae',
    description:
      'Explore distinctive prickly pears, segmented stems, and fascinating cholla cacti.',
    image:
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    name: 'Maihuenioideae',
    description:
      'Meet unusual, low-growing cushion cacti adapted to challenging environments.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '04',
    name: 'Pereskioideae',
    description:
      'Discover leafy, woody cacti that offer a glimpse into cactus diversity.',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '05',
    name: 'Leuenbergerioideae',
    description:
      'Learn about leafy tropical cacti and their place in cactus classification.',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '06',
    name: 'Blossfeldioideae',
    description:
      'Explore the remarkable world of tiny, mostly spineless Blossfeldia cacti.',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85',
  },
]

const facts = [
  {
    icon: Sun,
    title: 'Masters of survival',
    description:
      'Many cacti use specialized photosynthesis called CAM to reduce water loss in dry environments.',
  },
  {
    icon: Flower2,
    title: 'Unexpected blooms',
    description:
      'Cactus flowers can be vivid, delicate, and surprisingly large compared with the plant itself.',
  },
  {
    icon: Droplets,
    title: 'Water-wise wonders',
    description:
      'Many cacti store water in their stems, helping them survive periods of limited rainfall.',
  },
]

const careTips = [
  {
    icon: Sun,
    title: 'Give them the right light',
    description:
      'Most desert cacti need plenty of light, but the ideal amount depends on the species.',
  },
  {
    icon: Droplets,
    title: 'Water thoughtfully',
    description:
      'Let the growing medium dry appropriately between watering, and avoid waterlogged roots.',
  },
  {
    icon: Leaf,
    title: 'Choose suitable soil',
    description:
      'A well-draining mix helps prevent excess moisture around the roots.',
  },
]

function Home() {
  const revealRef = useRef(null)

  useEffect(() => {
    const elements = revealRef.current?.querySelectorAll('.reveal')

    if (!elements?.length) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="home-page" ref={revealRef}>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <Sparkles size={16} />
              <span>A LITTLE WORLD OF WONDER</span>
            </div>

            <h1 className="hero-title">
              Discover.
              <br />
              <span>Learn. Grow.</span>
            </h1>

            <p className="hero-description">
              Step into the extraordinary world of cacti.
              Discover fascinating species, uncover their stories,
              and learn how to help these remarkable plants thrive.
            </p>

            <div className="hero-actions">
              <Link to="/explore" className="hero-primary-button">
                Explore Cacti
                <ArrowRight size={18} />
              </Link>

              <Link to="/ai" className="hero-secondary-button">
                Meet Cactora AI
                <Sparkles size={17} />
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-icon">
                <Leaf size={16} />
              </span>
              <span>A growing collection for curious plant lovers.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1100&q=90"
                alt="A beautiful collection of cacti and succulents"
                className="hero-cactus-image"
              />
              <div className="hero-image-shade" />
              <div className="hero-image-caption">
                <span>THE BEAUTY OF RESILIENCE</span>
                <strong>Nature finds a way.</strong>
              </div>
            </div>

            <div className="hero-card hero-card-top">
              <span className="hero-card-icon">
                <Leaf size={21} />
              </span>
              <div>
                <strong>Grow Knowledge</strong>
                <small>One cactus at a time.</small>
              </div>
            </div>

            <div className="hero-card hero-card-bottom">
              <span className="hero-card-icon">
                <Droplets size={21} />
              </span>
              <div>
                <strong>Better Care</strong>
                <small>Learn what each plant needs.</small>
              </div>
            </div>
          </div>
        </div>

        <a href="#explore-cacti" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="home-intro-section">
        <div className="home-section-container home-intro-grid">
          <div className="home-intro-heading reveal">
            <span className="home-eyebrow">MORE THAN JUST SPINES</span>
            <h2>
              Small plants.
              <br />
              <span>Extraordinary stories.</span>
            </h2>
          </div>

          <div className="home-intro-copy reveal">
            <p>
              From towering desert giants to tiny globular wonders,
              cacti have evolved in remarkable ways. Every species
              has a story worth discovering.
            </p>
            <p>
              Cactora brings their diversity, history, and care
              together in one welcoming place for beginners,
              collectors, and curious minds.
            </p>
          </div>
        </div>
      </section>

      <section className="home-explore-section" id="explore-cacti">
        <div className="home-section-container">
          <div className="home-section-heading reveal">
            <div>
              <span className="home-eyebrow">FIND YOUR NEXT FASCINATION</span>
              <h2>
                Explore the world
                <br />
                <span>of cacti.</span>
              </h2>
            </div>

            <p>
              Six subfamilies. Countless distinctive forms.
              Start your journey through cactus diversity.
            </p>
          </div>

          <div className="home-category-grid">
            {subfamilies.map((family, index) => (
              <Link
                to="/explore"
                className={`home-category-card reveal home-category-card-${index + 1}`}
                key={family.name}
                style={{ '--reveal-delay': `${(index % 3) * 100}ms` }}
              >
                <div className="home-category-image-wrap">
                  <img
                    src={family.image}
                    alt={`${family.name} cactus category`}
                    className="home-category-image"
                    loading="lazy"
                  />
                  <span className="home-category-number">{family.number}</span>
                  <span className="home-category-arrow">
                    <ArrowRight size={19} />
                  </span>
                </div>

                <div className="home-category-content">
                  <span className="home-category-kicker">SUBFAMILY</span>
                  <h3>{family.name}</h3>
                  <p>{family.description}</p>
                  <span className="home-category-link">
                    Discover category <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-section-action reveal">
            <Link to="/explore" className="home-outline-button">
              Explore All Cacti <ArrowRight size={17} />
            </Link>
          </div>

          <p className="home-taxonomy-note">
            Cactora's categories are designed to be adaptable as botanical
            classifications and references are updated.
          </p>
        </div>
      </section>

      <section className="home-story-section">
        <div className="home-section-container home-story-grid">
          <div className="home-story-visual reveal">
            <div className="home-story-image-main">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85"
                alt="Plants growing in a natural environment"
                loading="lazy"
              />
            </div>
            <div className="home-story-image-accent">
              <Trees size={27} />
              <span>Millions of years of adaptation</span>
            </div>
            <div className="home-story-decoration" />
          </div>

          <div className="home-story-content reveal">
            <span className="home-eyebrow">ROOTED IN HISTORY</span>
            <h2>
              A remarkable
              <br />
              <span>story of survival.</span>
            </h2>
            <p>
              Cacti are native to the Americas, where different species
              evolved to thrive in diverse habitats, from arid deserts
              to humid tropical forests.
            </p>
            <p>
              Their unusual shapes, water-storing stems, and remarkable
              adaptations tell a story of survival, diversity, and
              resilience.
            </p>

            <Link to="/about" className="home-text-link">
              Discover their story <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-facts-section">
        <div className="home-section-container">
          <div className="home-section-heading home-facts-heading reveal">
            <div>
              <span className="home-eyebrow">NATURE IS FULL OF SURPRISES</span>
              <h2>
                Did you <span>know?</span>
              </h2>
            </div>
            <p>
              The more you learn about cacti, the more extraordinary
              they become.
            </p>
          </div>

          <div className="home-facts-grid">
            {facts.map((fact, index) => {
              const Icon = fact.icon

              return (
                <article
                  className="home-fact-card reveal"
                  key={fact.title}
                  style={{ '--reveal-delay': `${index * 120}ms` }}
                >
                  <span className="home-fact-icon">
                    <Icon size={25} />
                  </span>
                  <span className="home-fact-number">
                    INSIGHT 0{index + 1}
                  </span>
                  <h3>{fact.title}</h3>
                  <p>{fact.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="home-care-section">
        <div className="home-section-container home-care-grid">
          <div className="home-care-content reveal">
            <span className="home-eyebrow">HELP YOUR CACTUS THRIVE</span>
            <h2>
              A little care.
              <br />
              <span>A happier cactus.</span>
            </h2>
            <p>
              Growing cacti becomes easier when you understand what
              your plant needs. Start with the essentials and learn
              as your collection grows.
            </p>

            <div className="home-care-list">
              {careTips.map((tip) => {
                const Icon = tip.icon

                return (
                  <div className="home-care-item" key={tip.title}>
                    <span className="home-care-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{tip.title}</h3>
                      <p>{tip.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link to="/explore" className="home-primary-button">
              Start Learning <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-care-visual reveal">
            <img
              src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=85"
              alt="Healthy cactus plants ready to grow"
              loading="lazy"
            />
            <div className="home-care-image-label">
              <Leaf size={19} />
              <span>GROW AT YOUR OWN PACE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-ai-section">
        <div className="home-section-container">
          <div className="home-ai-panel reveal">
            <div className="home-ai-decoration home-ai-decoration-one" />
            <div className="home-ai-decoration home-ai-decoration-two" />

            <div className="home-ai-content">
              <span className="home-ai-label">
                <Sparkles size={16} /> YOUR CACTUS COMPANION
              </span>
              <h2>
                Curious about cacti?
                <br />
                <span>Let's explore together.</span>
              </h2>
              <p>
                Meet Cactora AI, your place to start asking questions
                about cactus species, growing conditions, and plant care.
              </p>
              <Link to="/ai" className="home-ai-button">
                Meet Cactora AI <ArrowRight size={18} />
              </Link>
            </div>

            <div className="home-ai-visual" aria-hidden="true">
              <div className="home-ai-orbit">
                <div className="home-ai-orbit-dot" />
                <div className="home-ai-symbol">
                  <Sparkles size={49} />
                </div>
              </div>
              <span className="home-ai-leaf home-ai-leaf-one">
                <Leaf size={31} />
              </span>
              <span className="home-ai-leaf home-ai-leaf-two">
                <Flower2 size={27} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-community-section">
        <div className="home-section-container home-community-inner reveal">
          <div className="home-community-icon">
            <BookOpen size={27} />
          </div>
          <span className="home-eyebrow">KNOWLEDGE GROWS WHEN SHARED</span>
          <h2>
            Every cactus has
            <br />
            <span>a story to share.</span>
          </h2>
          <p>
            Join a growing community of cactus enthusiasts. Share what
            you've learned, contribute cactus information, and help
            make plant knowledge accessible to everyone.
          </p>
          <div className="home-community-actions">
            <Link to="/register" className="home-primary-button">
              Join the Community <ArrowRight size={17} />
            </Link>
            <Link to="/about" className="home-text-link">
              Learn about Cactora
            </Link>
          </div>
          <div className="home-community-note">
            <Lightbulb size={16} />
            <span>
              Community contributions can be reviewed before appearing
              in the cactus collection.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home