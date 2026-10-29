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
    description:
      'Have a question, suggestion, or some feedback about Cactora? We would love to hear from you.',
    color: 'beige',
    action: 'Send us a message',
    href: '#contact-form',
  },
  {
    icon: Leaf,
    title: 'Cactus knowledge',
    description:
      'Curious about cactus species, their natural habitats, or how to care for them?',
    color: 'green',
    action: 'Ask a question',
    href: '#contact-form',
  },
  {
    icon: MessageCircle,
    title: 'Cactora AI',
    description:
      'Looking for quick guidance or curious to learn more about the fascinating world of cacti?',
    color: 'pink',
    action: 'Explore Cactora AI',
    href: '/ai',
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

    const recipient = 'rpabasara216@gmail.com'

    const subject = encodeURIComponent(
      `Cactora contact: ${formData.subject}`,
    )

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
    )

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`

    setEmailPrepared(true)
  }


  return (
    <MotionConfig reducedMotion="user">
      <main className="contact-page">
        {/* Hero */}
        <section className="contact-hero">
          <div
            className="contact-hero-decoration contact-decoration-one"
            aria-hidden="true"
          >
            <Flower2 />
          </div>

          <div
            className="contact-hero-decoration contact-decoration-two"
            aria-hidden="true"
          >
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
              LET'S CONNECT
            </span>

            <h1>
              Every great discovery
              <span> starts with a question.</span>
            </h1>

            <p>
              Whether you have a question about Cactora, an idea to
              share, or simply want to say hello, we are happy you are
              here. Let's make learning about cacti a little easier,
              together.
            </p>

            <a className="contact-hero-button" href="#contact-form">
              Get in touch
              <ArrowRight size={18} />
            </a>

            <p className="contact-hero-tagline">
              Every cactus tells a story.
            </p>
          </motion.div>

          {/* Decorative cactus illustration */}
          <motion.div
            className="contact-hero-art"
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="contact-art-circle">
              <div className="contact-art-sun" />

              <div className="contact-art-flower flower-left">✿</div>
              <div className="contact-art-flower flower-right">✿</div>

              <div className="contact-art-cactus">
                <div className="contact-cactus-arm arm-left" />
                <div className="contact-cactus-arm arm-right" />
                <div className="contact-cactus-flower">✿</div>
              </div>

              <div className="contact-art-pot">
                <div className="contact-art-pot-rim" />
              </div>

              <div className="contact-art-ground" />

              <span className="contact-art-sparkle sparkle-one">✦</span>
              <span className="contact-art-sparkle sparkle-two">✳</span>
            </div>

            <span className="contact-art-caption">
              A little curiosity goes a long way.
            </span>
          </motion.div>
        </section>

        {/* Contact options */}
        <section className="contact-options-section">
          <div className="contact-section-heading">
            <span className="contact-small-label">WE'RE HERE TO HELP</span>

            <h2>What would you like to know?</h2>

            <p>
              Choose a topic or send us a message. We are always glad
              to hear from fellow cactus enthusiasts.
            </p>
          </div>

          <div className="contact-options-grid">
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              const isInternalRoute = option.href.startsWith('/')

              return (
                <motion.article
                  className={`contact-option-card ${option.color}`}
                  key={option.title}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                >
                  <div className="contact-option-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3>{option.title}</h3>

                  <p>{option.description}</p>

                  {isInternalRoute ? (
                    <Link to={option.href} className="contact-option-link">
                      {option.action}
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <a href={option.href} className="contact-option-link">
                      {option.action}
                      <ArrowRight size={16} />
                    </a>
                  )}
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* Contact form */}
        <section className="contact-form-section" id="contact-form">
          <div className="contact-form-intro">
            <span className="contact-small-label">DROP US A LINE</span>

            <h2>
              We would love
              <span> to hear from you.</span>
            </h2>

            <p>
              Tell us what is on your mind. Whether you have a question,
              a suggestion, or feedback about your experience with
              Cactora, your message is welcome.
            </p>

            <div className="contact-promise">
              <div className="contact-promise-icon" aria-hidden="true">
                <Leaf size={22} />
              </div>

              <div>
                <strong>Curiosity makes us grow</strong>

                <p>
                  Every question is an opportunity to learn something
                  new about the wonderful world of cacti.
                </p>
              </div>
            </div>

            <div className="contact-form-decoration" aria-hidden="true">
              <span>✿</span>
              <span>🌵</span>
              <span>✦</span>
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
              <span className="contact-form-heading-icon">
                <Mail size={20} />
              </span>

              <div>
                <h3>Send a message</h3>
                <p>Fields marked with * are required.</p>
              </div>
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
              <label htmlFor="contact-subject">What is this about? *</label>

              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="General inquiry">General inquiry</option>
                <option value="Cactus information">Cactus information</option>
                <option value="Website feedback">Website feedback</option>
                <option value="AI assistant feedback">
                  AI assistant feedback
                </option>
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
              Prepare your email
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
          <div className="contact-cta-icon" aria-hidden="true">
            <Leaf size={27} />
          </div>

          <span className="contact-small-label">KEEP DISCOVERING</span>

          <h2>There is always more to discover.</h2>

          <p>
            Explore fascinating cactus species, learn about their
            unique characteristics, and let your curiosity grow.
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