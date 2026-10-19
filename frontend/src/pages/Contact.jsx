import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Flower2,
  Leaf,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import './Contact.css'

const contactOptions = [
  {
    icon: Mail,
    title: 'General inquiries',
    description: 'Questions, feedback, or just want to say hello?',
    color: 'beige',
  },
  {
    icon: Leaf,
    title: 'Cactus contributions',
    description: 'Share cactus knowledge and help our community grow.',
    color: 'green',
  },
  {
    icon: MessageCircle,
    title: 'Cactora AI',
    description: 'Explore cactus care and discover something new.',
    color: 'lavender',
  },
]

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General inquiry',
    message: '',
  })

  const [emailPrepared, setEmailPrepared] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setEmailPrepared(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Cactora contact: ${formData.subject}`,
    )

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
    )

    // Opens the visitor's default email application.
    // Replace the empty recipient with your official contact email
    // when you are ready to configure email delivery.
    window.location.href = `mailto:?subject=${subject}&body=${body}`

    setEmailPrepared(true)
  }

  return (
    <MotionConfig reducedMotion="user">
      <main className="contact-page">
        {/* Hero section */}
        <section className="contact-hero">
          <div className="contact-hero-decoration contact-decoration-one" aria-hidden="true">
            <Flower2 />
          </div>

          <div className="contact-hero-decoration contact-decoration-two" aria-hidden="true">
            <Leaf />
          </div>

          <motion.div
            className="contact-hero-content"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact-eyebrow">
              <Sparkles size={16} />
              WE'D LOVE TO HEAR FROM YOU
            </span>

            <h1>
              Let's grow something
              <span> wonderful together.</span>
            </h1>

            <p>
              Have a question, an idea, or a cactus story to share?
              Reach out and let's make the world of cacti a little
              more wonderful together.
            </p>

            <a className="contact-hero-button" href="#contact-form">
              Get in touch
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* CSS cactus illustration */}
          <motion.div
            className="contact-hero-art"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="contact-art-circle">
              <div className="contact-art-sun" />

              <div className="contact-art-flower flower-left" aria-hidden="true">
                ✿
              </div>

              <div className="contact-art-flower flower-right" aria-hidden="true">
                ✿
              </div>

              <div className="contact-art-cactus">
                <div className="contact-cactus-arm arm-left" />
                <div className="contact-cactus-arm arm-right" />
                <div className="contact-cactus-flower">✿</div>
              </div>

              <div className="contact-art-pot">
                <div className="contact-art-pot-rim" />
              </div>

              <div className="contact-art-ground" />
            </div>

            <span className="contact-art-caption">
              Growing together, one conversation at a time 🌱
            </span>
          </motion.div>
        </section>

        {/* Contact options */}
        <section className="contact-options-section">
          <div className="contact-section-heading">
            <span className="contact-small-label">HERE FOR YOU</span>

            <h2>How can we help?</h2>

            <p>
              Whatever is on your mind, there's a place for it here.
            </p>
          </div>

          <div className="contact-options-grid">
            {contactOptions.map((option, index) => {
              const Icon = option.icon

              return (
                <motion.article
                  className={`contact-option-card ${option.color}`}
                  key={option.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -5 }
                  }
                >
                  <div className="contact-option-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3>{option.title}</h3>

                  <p>{option.description}</p>

                  {option.title === 'Cactora AI' ? (
                    <Link to="/" className="contact-option-link">
                      Explore Cactora
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <a href="#contact-form" className="contact-option-link">
                      Send us a message
                      <ArrowRight size={16} />
                    </a>
                  )}
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* Contact form section */}
        <section className="contact-form-section" id="contact-form">
          <div className="contact-form-intro">
            <span className="contact-small-label">DROP US A LINE</span>

            <h2>
              Your message
              <span> matters to us.</span>
            </h2>

            <p>
              Fill in the form and tell us what's on your mind.
              Whether it's a question, a suggestion, or a new cactus
              discovery, we're happy you're here.
            </p>

            <div className="contact-promise">
              <div className="contact-promise-icon" aria-hidden="true">
                💚
              </div>

              <div>
                <strong>A community that grows together</strong>

                <p>
                  Every idea can help make Cactora better for
                  cactus lovers everywhere.
                </p>
              </div>
            </div>

            <div className="contact-form-decoration" aria-hidden="true">
              <span>🌵</span>
              <span>🌵</span>
              <span>🌵</span>
            </div>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-form-heading">
              <h3>Send a message</h3>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your name *</label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address *</label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={150}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">
                What is this about? *
              </label>

              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="General inquiry">General inquiry</option>
                <option value="Cactus information">Cactus information</option>
                <option value="Cactus contribution">Cactus contribution</option>
                <option value="Website feedback">Website feedback</option>
                <option value="Technical issue">Technical issue</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message *</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us a little more..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={3000}
                required
              />

              <span className="contact-character-count">
                {formData.message.length}/3000
              </span>
            </div>

            <button className="contact-submit-button" type="submit">
              Send your message
              <Send size={17} />
            </button>

            {emailPrepared && (
              <p className="contact-form-notice" role="status">
                <CheckCircle2 size={18} />
                Your email application should open with your message
                prepared. Send the email there to complete delivery.
              </p>
            )}

            <p className="contact-form-footnote">
              This form opens your default email application. Messages
              are not sent directly or stored by this website.
            </p>
          </motion.form>
        </section>

        {/* Final call to action */}
        <section className="contact-bottom-cta">
          <div className="contact-cta-flower" aria-hidden="true">
            🌵
          </div>

          <span className="contact-small-label">KEEP EXPLORING</span>

          <h2>There's always more to discover.</h2>

          <p>
            Find your next favorite cactus and keep growing your
            botanical knowledge.
          </p>

          <Link to="/explore" className="contact-cta-button">
            Discover cacti
            <ArrowRight size={18} />
          </Link>
        </section>
      </main>
    </MotionConfig>
  )
}

export default Contact