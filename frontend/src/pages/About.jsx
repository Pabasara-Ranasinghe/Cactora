
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Flower2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import './About.css'

const features = [
  {
    icon: Leaf,
    title: 'Discover Cacti',
    description:
      'Explore different cactus species, learn about their unique characteristics, and discover where they grow naturally.',
  },
  {
    icon: BookOpen,
    title: 'Learn with Confidence',
    description:
      'Find helpful information about cactus appearance, habitats, growing conditions, and everyday care.',
  },
  {
    icon: Sparkles,
    title: 'Ask Cactora AI',
    description:
      'Get assistance with cactus-related questions and explore new topics with the help of our AI assistant.',
  },
  {
    icon: Users,
    title: 'Grow Together',
    description:
      'Join a community of cactus enthusiasts by sharing knowledge and contributing information about cacti.',
  },
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            <Leaf size={16} />
            ABOUT CACTORA
          </span>

          <h1>
            A little more knowledge.
            <br />
            <span>A deeper love for cacti.</span>
          </h1>

          <p className="about-hero-description">
            Cactora is a modern cactus knowledge platform created
            to help everyone discover, understand, and care for the
            fascinating world of cacti.
          </p>

          <div className="about-hero-actions">
            <Link to="/explore" className="about-primary-button">
              Explore Cacti
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="about-secondary-button">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="about-hero-art" aria-hidden="true">
          <div className="about-art-circle about-art-circle-one" />
          <div className="about-art-circle about-art-circle-two" />

          <div className="about-plant-card">
            <div className="about-plant-icon">
              <Flower2 size={34} />
            </div>

            <div className="about-cactus-illustration">
              <span className="about-cactus-arm about-cactus-arm-left" />
              <span className="about-cactus-arm about-cactus-arm-right" />
              <span className="about-cactus-body" />
            </div>

            <p>Nature is full of wonders.</p>
            <span>Discover them with Cactora</span>
          </div>

          <span className="about-floating-leaf about-floating-leaf-one">
            ✳
          </span>
          <span className="about-floating-leaf about-floating-leaf-two">
            ✦
          </span>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-section-heading">
          <span className="about-section-label">OUR STORY</span>
          <h2>Making cactus knowledge accessible to everyone.</h2>
        </div>

        <div className="about-story-content">
          <p>
            Cacti are more than plants with spines. They have
            remarkable adaptations, diverse shapes, beautiful
            flowers, and fascinating natural habitats.
          </p>

          <p>
            Cactora brings cactus information together in one place,
            making it easier to explore different species, understand
            their characteristics, and learn how to care for them.
            Whether you are just starting your plant journey or
            already love collecting cacti, there is always something
            new to discover.
          </p>

          <p>
            Our goal is to make learning about cacti engaging,
            approachable, and enjoyable for everyone.
          </p>
        </div>
      </section>

      <section className="about-features-section">
        <div className="about-section-heading about-centered-heading">
          <span className="about-section-label">WHAT YOU CAN DO</span>
          <h2>Explore. Learn. Grow.</h2>
          <p>
            Everything you need to begin or continue your cactus
            discovery journey.
          </p>
        </div>

        <div className="about-features-grid">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article className="about-feature-card" key={feature.title}>
                <div className="about-feature-icon">
                  <Icon size={25} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-content">
          <span className="about-section-label">WHAT MATTERS TO US</span>
          <h2>Knowledge that grows with the community.</h2>
          <p>
            We believe useful plant knowledge should be easy to
            discover and share. Cactora is designed to bring together
            learning, technology, and a shared appreciation for nature.
          </p>
        </div>

        <div className="about-value-list">
          <div className="about-value-item">
            <span className="about-value-icon">
              <BookOpen size={21} />
            </span>
            <div>
              <h3>Accessible Learning</h3>
              <p>Presenting cactus information in a clear, approachable way.</p>
            </div>
          </div>

          <div className="about-value-item">
            <span className="about-value-icon">
              <ShieldCheck size={21} />
            </span>
            <div>
              <h3>Responsible Contributions</h3>
              <p>
                Reviewing community-submitted information before
                including it in the platform.
              </p>
            </div>
          </div>

          <div className="about-value-item">
            <span className="about-value-icon">
              <Sparkles size={21} />
            </span>
            <div>
              <h3>Continuous Discovery</h3>
              <p>
                Encouraging curiosity about cactus species and their
                natural environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta-icon">
          <Leaf size={27} />
        </div>

        <span className="about-section-label">YOUR JOURNEY STARTS HERE</span>

        <h2>Ready to explore the world of cacti?</h2>

        <p>
          Discover fascinating species, learn something new, and
          let your curiosity grow with Cactora.
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
