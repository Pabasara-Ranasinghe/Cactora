
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Flower2,
  Globe2,
  Leaf,
  Mountain,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sprout,
  Sun,
  Trees,
} from 'lucide-react'

import './MaihuenioideaeGuide.css'

const facts = [
  {
    icon: Globe2,
    label: 'Native range',
    value: 'Argentina and Chile',
    detail: 'Patagonia and parts of the Andes',
  },
  {
    icon: Snowflake,
    label: 'Climate',
    value: 'Cold and exposed',
    detail: 'Adapted to harsh mountain conditions',
  },
  {
    icon: Leaf,
    label: 'Distinctive feature',
    value: 'Permanent leaves',
    detail: 'Small, fleshy, cylindrical leaves',
  },
  {
    icon: Sprout,
    label: 'Growth habit',
    value: 'Low cushion mats',
    detail: 'Close to the ground and spreading',
  },
]

const highlights = [
  {
    icon: Snowflake,
    title: 'Cacti that embrace the cold',
    text: 'Maihuenia is among the most cold-tolerant members of the cactus family. Its natural habitats experience cold winds, frost, and seasonal snow. Its low-growing form helps it cope with exposed conditions.',
    tag: 'Cold adaptation',
  },
  {
    icon: Leaf,
    title: 'Leaves that stay',
    text: 'Unlike most familiar cacti, Maihuenia retains small, fleshy leaves. These remain part of the plant’s photosynthetic system alongside its green stems, giving it a distinctive appearance.',
    tag: 'Unusual foliage',
  },
  {
    icon: Sun,
    title: 'A different photosynthetic strategy',
    text: 'Maihuenia is notable for using C3 photosynthesis, rather than the CAM pathway typical of most cacti. This makes it especially interesting to botanists studying the diversity and evolution of cactus adaptations.',
    tag: 'Plant science',
  },
  {
    icon: Flower2,
    title: 'Bright flowers on green cushions',
    text: 'Its flowers are generally white to pale yellow and open in suitable sunlight. Following flowering, the plant develops small fruits containing seeds, continuing its life cycle in demanding environments.',
    tag: 'Flowering',
  },
]

const growthFeatures = [
  {
    number: '01',
    title: 'A compact cushion',
    text: 'Branches spread close to the ground, forming dense mats that reduce exposure to strong winds.',
  },
  {
    number: '02',
    title: 'A remarkable root system',
    text: 'Roots help anchor plants in rocky or thin soils and access available moisture.',
  },
  {
    number: '03',
    title: 'A specialist’s cactus',
    text: 'Slow growth and particular drainage requirements make these plants better suited to experienced growers.',
  },
]

const comparisons = [
  ['Growth form', 'Low, spreading cushions', 'Columns, globes, pads, shrubs, or vines'],
  ['True leaves', 'Small and persistent', 'Absent in most; present in some groups'],
  ['Glochids', 'Absent', 'Present in Opuntioideae'],
  ['Cold tolerance', 'Often highly frost-tolerant', 'Varies considerably by species'],
  ['Photosynthesis', 'C3 pathway', 'CAM is common in cacti'],
  ['Winter care', 'Excellent drainage; avoid cold, wet soil', 'Depends on the species and climate'],
]

const careItems = [
  {
    icon: Mountain,
    title: 'Soil and drainage',
    text: 'Use a very mineral, gritty growing medium. Pumice, lava rock, and coarse mineral grit can improve drainage. Avoid dense soil that remains wet around the roots.',
  },
  {
    icon: Sun,
    title: 'Light and airflow',
    text: 'Provide bright light and good ventilation. Introduce plants to stronger sunlight gradually to reduce the risk of sun damage.',
  },
  {
    icon: Sprout,
    title: 'Watering',
    text: 'Water during active growth when the growing medium has dried appropriately. Reduce watering during dormancy and never leave the roots sitting in water.',
  },
  {
    icon: Snowflake,
    title: 'Cold and winter care',
    text: 'These cacti can tolerate substantial cold when properly acclimated, but tolerance depends on the species, plant health, and growing conditions. Protect plants from prolonged cold and wet soil.',
  },
]

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="maihu-section-heading">
      <div className="maihu-section-icon">
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <div>
        <span className="maihu-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default function MaihuenioideaeGuide() {
  return (
    <main className="maihu-guide">
      <section className="maihu-hero">
        <div className="maihu-hero-orb maihu-hero-orb-one" />
        <div className="maihu-hero-orb maihu-hero-orb-two" />

        <div className="maihu-hero-content">
          <a href="/explore" className="maihu-back-link">
            <ArrowLeft size={17} />
            <span>Back to Explore</span>
          </a>

          <div className="maihu-hero-badge">
            <Snowflake size={15} />
            <span>THE COLD-ADAPTED CACTI</span>
          </div>

          <h1>
            Meet the
            <span> Maihuenioideae</span>
          </h1>

          <p className="maihu-hero-subtitle">
            The Patagonian Cushion Cactus Subfamily
          </p>

          <p className="maihu-hero-description">
            Discover the remarkable cacti that hug the ground in the cold,
            windswept landscapes of southern South America. With permanent
            leaves, compact growth, and an unusual tolerance for cold, these
            plants reveal another side of cactus evolution.
          </p>

          <div className="maihu-hero-tags">
            <span>
              <Leaf size={14} /> Leaf-bearing
            </span>
            <span>
              <Mountain size={14} /> Patagonian
            </span>
            <span>
              <Snowflake size={14} /> Cold-adapted
            </span>
          </div>

          <a href="#maihu-overview" className="maihu-primary-link">
            Explore this subfamily
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="maihu-hero-illustration" aria-hidden="true">
          <div className="maihu-snowflake maihu-snowflake-one">✳</div>
          <div className="maihu-snowflake maihu-snowflake-two">✳</div>
          <div className="maihu-mountain-shape maihu-mountain-back" />
          <div className="maihu-mountain-shape maihu-mountain-front" />
          <div className="maihu-ground" />

          <div className="maihu-cushion maihu-cushion-back">
            <span />
            <span />
            <span />
          </div>

          <div className="maihu-cushion maihu-cushion-front">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="maihu-flower maihu-flower-one">
            <span />
          </div>
          <div className="maihu-flower maihu-flower-two">
            <span />
          </div>

          <div className="maihu-illustration-label">
            <Leaf size={15} />
            <span>Small leaves. Big resilience.</span>
          </div>
        </div>
      </section>

      <section className="maihu-intro" id="maihu-overview">
        <div className="maihu-intro-copy">
          <span className="maihu-eyebrow">A UNIQUE CACTUS LINEAGE</span>
          <h2>
            Not every cactus
            <span> needs a desert.</span>
          </h2>
          <p>
            When we think of cacti, we often imagine hot deserts and blazing
            sunshine. Maihuenia challenges that picture. These distinctive
            plants are native to southern South America, where exposure,
            cold weather, and rocky terrain shape how they grow.
          </p>
          <p>
            Maihuenia is the only genus in the subfamily Maihuenioideae. Its
            persistent fleshy leaves and C3 photosynthesis make it an
            especially intriguing branch of cactus diversity.
          </p>
        </div>

        <div className="maihu-intro-note">
          <div className="maihu-note-icon">
            <Sparkles size={22} />
          </div>
          <span className="maihu-eyebrow">DID YOU KNOW?</span>
          <h3>A cactus with real leaves</h3>
          <p>
            Its small, fleshy leaves are not just temporary features of young
            growth. They remain an important part of the plant’s unusual
            appearance throughout its life.
          </p>
          <div className="maihu-note-footer">
            <Leaf size={16} />
            <span>A distinctive botanical feature</span>
          </div>
        </div>
      </section>

      <section className="maihu-facts-section">
        <SectionHeading
          eyebrow="THE ESSENTIALS"
          title="Maihuenioideae at a glance"
          description="The key facts behind this unusual cactus subfamily."
          icon={BookOpen}
        />

        <div className="maihu-facts-grid">
          {facts.map((fact) => {
            const Icon = fact.icon

            return (
              <article className="maihu-fact-card" key={fact.label}>
                <div className="maihu-fact-icon">
                  <Icon size={22} />
                </div>
                <span className="maihu-fact-label">{fact.label}</span>
                <h3>{fact.value}</h3>
                <p>{fact.detail}</p>
              </article>
            )
          })}
        </div>

        <div className="maihu-info-table-wrap">
          <table className="maihu-info-table">
            <thead>
              <tr>
                <th>Detail</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Native range</td>
                <td>Southern South America, especially Argentina and Chile</td>
              </tr>
              <tr>
                <td>Taxonomy</td>
                <td>One genus: Maihuenia</td>
              </tr>
              <tr>
                <td>Recognised species</td>
                <td>
                  Two commonly recognised species: Maihuenia poeppigii and
                  Maihuenia patagonica
                </td>
              </tr>
              <tr>
                <td>Common names</td>
                <td>Patagonian cushion cactus; mountain cushion cactus</td>
              </tr>
              <tr>
                <td>Flowers</td>
                <td>Generally white to pale yellow</td>
              </tr>
              <tr>
                <td>Leaves</td>
                <td>Small, fleshy, and persistent</td>
              </tr>
              <tr>
                <td>Soil preference</td>
                <td>Open, mineral-rich soil with excellent drainage</td>
              </tr>
              <tr>
                <td>Growing challenge</td>
                <td>Balancing adequate light and cold tolerance with dry roots</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="maihu-table-note">
          Taxonomic classifications and recognised species may vary between
          botanical references.
        </p>
      </section>

      <section className="maihu-highlights-section">
        <SectionHeading
          eyebrow="NATURE'S SPECIALISTS"
          title="Fascinating facts"
          description="Explore the features that set Maihuenia apart from most other cacti."
          icon={Sparkles}
        />

        <div className="maihu-highlights-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <article className="maihu-highlight-card" key={item.title}>
                <div className="maihu-highlight-top">
                  <span className="maihu-highlight-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="maihu-highlight-icon">
                    <Icon size={23} />
                  </div>
                </div>

                <span className="maihu-highlight-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="maihu-growth-section">
        <div className="maihu-growth-heading">
          <span className="maihu-eyebrow">BUILT FOR THE ELEMENTS</span>
          <h2>
            Small in stature.
            <span> Strong by nature.</span>
          </h2>
          <p>
            A low profile, specialised roots, and gradual growth help these
            cacti live in landscapes where conditions can change dramatically.
          </p>
        </div>

        <div className="maihu-growth-list">
          {growthFeatures.map((feature) => (
            <article className="maihu-growth-item" key={feature.number}>
              <span className="maihu-growth-number">{feature.number}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="maihu-comparison-section">
        <SectionHeading
          eyebrow="QUICK IDENTIFICATION"
          title="How to recognise Maihuenioideae"
          description="Compare its most distinctive features with those of other cactus subfamilies."
          icon={ShieldCheck}
        />

        <div className="maihu-comparison-wrap">
          <table className="maihu-comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Maihuenioideae</th>
                <th>Other subfamilies</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map(([feature, maihu, others]) => (
                <tr key={feature}>
                  <td>{feature}</td>
                  <td>
                    <span className="maihu-comparison-check">
                      <CheckCircle2 size={16} />
                    </span>
                    {maihu}
                  </td>
                  <td>{others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="maihu-care-section">
        <SectionHeading
          eyebrow="GROWING GUIDE"
          title="Caring for Maihuenia"
          description="These specialist cacti need conditions that reflect their natural habitats."
          icon={Sprout}
        />

        <div className="maihu-care-grid">
          {careItems.map((item) => {
            const Icon = item.icon

            return (
              <article className="maihu-care-card" key={item.title}>
                <div className="maihu-care-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>

        <div className="maihu-care-warning">
          <div className="maihu-warning-icon">
            <ShieldCheck size={21} />
          </div>
          <div>
            <h3>Remember: cold does not mean wet</h3>
            <p>
              Even a cold-hardy cactus can suffer when its roots remain wet
              during cold weather. Prioritise excellent drainage and adjust
              winter protection to your local climate.
            </p>
          </div>
        </div>
      </section>

      <section className="maihu-summary-section">
        <div className="maihu-summary-decoration" aria-hidden="true">
          <Trees size={100} strokeWidth={0.8} />
        </div>

        <div className="maihu-summary-content">
          <span className="maihu-eyebrow">A LITTLE BOTANICAL WONDER</span>
          <h2>
            A cactus that
            <span> conquered the cold.</span>
          </h2>
          <p>
            Maihuenioideae reminds us that the cactus family is far more
            diverse than its desert reputation suggests. With permanent
            leaves, C3 photosynthesis, and a compact growth habit suited to
            exposed landscapes, this remarkable lineage offers a glimpse into
            the many ways plants adapt to challenging environments.
          </p>

          <div className="maihu-summary-tags">
            <span>
              <Leaf size={15} /> Unusual leaves
            </span>
            <span>
              <Snowflake size={15} /> Cold adaptation
            </span>
            <span>
              <Mountain size={15} /> Patagonian origins
            </span>
          </div>

          <a href="/explore" className="maihu-summary-link">
            <ArrowLeft size={17} />
            Discover more cactus groups
          </a>
        </div>
      </section>
    </main>
  )
}
