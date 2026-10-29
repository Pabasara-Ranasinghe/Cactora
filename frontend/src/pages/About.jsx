import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Flower2,
  Leaf,
  Sparkles,
  Sprout,
  Sun,
} from 'lucide-react'
import './About.css'

const features = [
  {
    icon: Leaf,
    number: '01',
    title: 'Discover Cacti',
    description:
      'Explore cactus genera and subfamilies, discover their unique characteristics, and learn where these remarkable plants grow.',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Explore Their Stories',
    description:
      'Learn about cactus diversity, scientific names, natural habitats, and the fascinating adaptations that help them thrive.',
  },
  {
    icon: Sprout,
    number: '03',
    title: 'Learn to Care',
    description:
      'Build your plant knowledge with practical guidance on light, watering, growing conditions, and healthy cactus care.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Meet Cactora AI',
    description:
      'Have cactus-related questions? Explore ideas, learn new things, and get help from your AI cactus companion.',
  },
]

const values = [
  {
    icon: BookOpen,
    title: 'Knowledge for Everyone',
    description:
      'Cactus information presented in a welcoming, clear, and approachable way.',
  },
  {
    icon: Leaf,
    title: 'Curiosity About Nature',
    description:
      'Discover the diversity, adaptations, and natural environments of cacti.',
  },
  {
    icon: Sparkles,
    title: 'Learning Through Technology',
    description:
      'Explore plant knowledge through an engaging experience, supported by Cactora AI.',
  },
]

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-glow about-hero-glow-one" />
        <div className="about-hero-glow about-hero-glow-two" />

        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-eyebrow">
              <Leaf size={16} />
              THE STORY OF CACTORA
            </span>

            <h1>
              Every cactus
              <br />
              <span>tells a story.</span>
            </h1>

            <p className="about-hero-description">
              Discover the extraordinary world of cacti with Cactora,
              a welcoming place to explore fascinating plants, learn
              about their natural wonders, and grow your knowledge
              one discovery at a time.
            </p>

            <div className="about-hero-actions">
              <Link to="/explore" className="about-primary-button">
                Explore Cacti
                <ArrowRight size={18} />
              </Link>

              <Link to="/ai" className="about-secondary-button">
                Meet Cactora AI
                <Sparkles size={17} />
              </Link>
            </div>

            <div className="about-hero-note">
              <span className="about-hero-note-icon">
                <Sprout size={17} />
              </span>
              <span>
                A little world of wonder for curious plant lovers.
              </span>
            </div>
          </div>

          <div className="about-hero-visual" aria-hidden="true">
            <div className="about-hero-orbit about-hero-orbit-one" />
            <div className="about-hero-orbit about-hero-orbit-two" />

            <div className="about-plant-card">
              <div className="about-plant-card-top">
                <span className="about-plant-icon">
                  <Flower2 size={25} />
                </span>
                <span className="about-plant-card-label">
                  A WORLD OF WONDER
                </span>
              </div>

              <div className="about-cactus-art">
                <span className="about-cactus-pot" />
                <span className="about-cactus-stem" />
                <span className="about-cactus-arm about-cactus-arm-left" />
                <span className="about-cactus-arm about-cactus-arm-right" />
                <span className="about-cactus-flower">
                  <Flower2 size={27} />
                </span>
              </div>

              <div className="about-plant-card-copy">
                <span>Small plants.</span>
                <strong>Extraordinary stories.</strong>
              </div>

              <div className="about-plant-card-footer">
                <Leaf size={15} />
                <span>Discover something wonderful</span>
              </div>
            </div>

            <span className="about-floating-icon about-floating-icon-one">
              <Sun size={21} />
            </span>

            <span className="about-floating-icon about-floating-icon-two">
              <Leaf size={22} />
            </span>
          </div>
        </div>

        <a href="#about-story" className="about-scroll-link">
          <span>GET TO KNOW US</span>
          <ArrowRight size={15} />
        </a>
      </section>

      {/* Our Story */}
      <section className="about-story-section" id="about-story">
        <div className="about-section-container about-story-grid">
          <div className="about-story-heading">
            <span className="about-eyebrow">OUR STORY</span>

            <h2>
              A small step into
              <br />
              <span>a fascinating world.</span>
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              Cacti are much more than plants with spines. From
              their unusual shapes and beautiful flowers to their
              remarkable ways of conserving water, they have plenty
              of stories to tell.
            </p>

            <p>
              Cactora was created to make discovering these plants
              easier and more enjoyable. It brings cactus knowledge,
              exploration, and learning together in one place, whether
              you are just beginning your plant journey or already
              fascinated by the world of cacti.
            </p>

            <p>
              Our goal is simple: help curiosity grow through
              accessible information, thoughtful design, and
              technology that makes learning more engaging.
            </p>

            <Link to="/explore" className="about-text-link">
              Begin your discovery
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* What You Can Explore */}
      <section className="about-features-section">
        <div className="about-section-container">
          <div className="about-section-heading">
            <div>
              <span className="about-eyebrow">
                YOUR CACTUS JOURNEY
              </span>
              <h2>
                Explore more.
                <br />
                <span>Discover something new.</span>
              </h2>
            </div>

            <p>
              From learning about cactus groups to getting care
              guidance, there is always something new to discover.
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <article className="about-feature-card" key={feature.title}>
                  <div className="about-feature-card-top">
                    <span className="about-feature-icon">
                      <Icon size={24} />
                    </span>
                    <span className="about-feature-number">
                      {feature.number}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <span className="about-feature-decoration">
                    <Leaf size={18} />
                  </span>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values-section">
        <div className="about-section-container about-values-grid">
          <div className="about-values-content">
            <span className="about-eyebrow">WHAT GUIDES US</span>

            <h2>
              Making plant knowledge
              <br />
              <span>easier to discover.</span>
            </h2>

            <p>
              We believe learning about nature should feel inspiring,
              not overwhelming. Cactora combines accessible knowledge,
              a welcoming experience, and useful technology to make
              exploring the cactus world enjoyable for everyone.
            </p>

            <Link to="/about" className="about-text-link">
              That's the Cactora way
              <Leaf size={17} />
            </Link>
          </div>

          <div className="about-values-list">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <article className="about-value-item" key={value.title}>
                  <span className="about-value-icon">
                    <Icon size={22} />
                  </span>

                  <div className="about-value-copy">
                    <span className="about-value-number">
                      0{index + 1}
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cactora AI */}
      <section className="about-ai-section">
        <div className="about-section-container">
          <div className="about-ai-panel">
            <div className="about-ai-decoration about-ai-decoration-one" />
            <div className="about-ai-decoration about-ai-decoration-two" />

            <div className="about-ai-content">
              <span className="about-ai-label">
                <Sparkles size={16} />
                YOUR CACTUS COMPANION
              </span>

              <h2>
                Have a question?
                <br />
                <span>Let's grow your knowledge.</span>
              </h2>

              <p>
                Explore cactus-related questions with Cactora AI.
                From plant characteristics to everyday care, your
                next discovery is just a question away.
              </p>

              <Link to="/ai" className="about-primary-button">
                Ask Cactora AI
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="about-ai-visual" aria-hidden="true">
              <div className="about-ai-orbit">
                <div className="about-ai-orbit-dot" />
                <div className="about-ai-symbol">
                  <Sparkles size={46} />
                </div>
              </div>

              <span className="about-ai-leaf about-ai-leaf-one">
                <Leaf size={29} />
              </span>

              <span className="about-ai-leaf about-ai-leaf-two">
                <Flower2 size={26} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="about-cta-section">
        <div className="about-cta-icon">
          <Leaf size={27} />
        </div>

        <span className="about-eyebrow">
          EVERY CACTUS TELLS A STORY
        </span>

        <h2>
          Yours begins with
          <br />
          a little curiosity.
        </h2>

        <p>
          Discover fascinating cactus groups, learn about remarkable
          plants, and find something new to love about nature.
        </p>

        <Link to="/explore" className="about-primary-button">
          Start Exploring
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  )
}

export default About