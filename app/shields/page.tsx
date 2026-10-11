import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rain Protection Shields | Vizag Invisible Grills',
  description:
    'Explore custom rain protection shields for balconies, parking areas and outdoor spaces in Visakhapatnam.',
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

const applications = [
  {
    number: '01',
    title: 'Balconies',
    copy: 'Add practical cover to balcony spaces while keeping the exterior of your home looking considered.',
    image: '/images/Balcony.png',
    alt: 'Modern balcony rain shield installation on a residential apartment',
  },
  {
    number: '02',
    title: 'Parking areas',
    copy: 'Plan a weather shield for cars and two-wheelers parked at your home.',
    image: '/images/Sheid.png',
    alt: 'Residential parking sheltered by a modern weather shield',
  },
  {
    number: '03',
    title: 'Outdoor spaces',
    copy: 'Create a more usable covered area for patios, terraces and other suitable outdoor spaces.',
    image: '/images/door.jpeg',
    alt: 'Covered residential driveway and outdoor entrance',
  },
]

export default function ShieldsPage() {
  return (
    <main className="details-page shields-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Vizag Invisible Grills home">
          <img
            className="brand-mark"
            src="/images/prasad-enterprises-logo.png"
            alt="Vizag Invisible Grills"
          />
          <span>
            <strong>VIZAG</strong>
            <small>RAIN SHIELDS</small>
          </span>
        </Link>

        <nav className="details-nav">
          <Link href="/">Home</Link>
          <a href="#design">The design</a>
          <a href="#applications">Applications</a>
        </nav>

        <Link className="header-cta" href="/#contact">
          Get a free quote <Arrow />
        </Link>
      </header>

      <section className="details-hero scroll-reveal">
        <div className="details-hero-pattern" />
        <div className="details-hero-copy">
          <div className="eyebrow light">
            <span />
            WEATHER PROTECTION · VIZAG
          </div>
          <div className="details-hero-index">04 / HOME &amp; OUTDOOR</div>
          <h1>
            Cover your space.
            <br />
            <em>Keep your style.</em>
          </h1>
          <p>
            Rain protection shields thoughtfully planned for balconies,
            parking areas and outdoor spaces around your home.
          </p>
          <div className="hero-actions">
            <Link className="button button-saffron" href="/#contact">
              Plan your shield <Arrow />
            </Link>
            <Link className="text-link light-link" href="/">
              Back to home <Arrow />
            </Link>
          </div>
        </div>
        <div className="details-hero-meta">
          <span>04</span>
          <small>
            BALCONY + PARKING
            <br />
            WEATHER PROTECTION
          </small>
        </div>
      </section>

      <section className="details-intro section-pad scroll-reveal" id="design">
        <div className="section-kicker">DESIGNED FOR YOUR SPACE</div>
        <div className="details-intro-grid">
          <h2>
            A little more
            <em> shelter outdoors.</em>
          </h2>
          <p className="lead">
            A well-planned shield can help protect everyday spaces from rain
            and harsh sun. We discuss the location, dimensions and look of your
            installation before recommending a solution.
          </p>
        </div>
      </section>

      <section className="feature-split section-pad scroll-reveal">
        <div className="feature-split-image">
          <img
            src="/images/Balcony.png"
            alt="Covered residential balcony with a modern rain shield"
          />
        </div>
        <div className="feature-split-copy">
          <div className="section-kicker">A FIT THAT FEELS RIGHT</div>
          <h2>
            Made for your home.
            <em> Planned around you.</em>
          </h2>
          <p className="lead">
            Every property is different. Share how you use your balcony,
            parking or outdoor area, and we can help plan a shield that suits
            the space and complements your home.
          </p>
          <ul className="feature-points">
            <li>Suitable layouts for balconies and parking areas</li>
            <li>Measurements planned around your available space</li>
            <li>A clean design that complements your property</li>
          </ul>
        </div>
      </section>

      <section
        className="details-uses section-pad scroll-reveal"
        id="applications"
      >
        <div className="section-heading">
          <div>
            <div className="section-kicker">WHERE IT WORKS</div>
            <h2>
              More cover.
              <br />
              <em>More ways to use your space.</em>
            </h2>
          </div>
          <p>
            Tell us where you need protection and we will help you explore a
            suitable layout for your home.
          </p>
        </div>

        <div className="details-use-grid">
          {applications.map((application) => (
            <div key={application.number}>
              <span>{application.number}</span>
              <img
                src={application.image}
                alt={application.alt}
              />
              <h3>{application.title}</h3>
              <p>{application.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="details-cta section-pad scroll-reveal">
        <div>
          <div className="section-kicker light">LET’S PLAN YOUR PROJECT</div>
          <h2>
            Find the right
            <br />
            <em>cover for your space.</em>
          </h2>
          <p>
            Get in touch to discuss your space and explore rain shield options
            for your home.
          </p>
          <Link className="button button-saffron" href="/#contact">
            Get a free quote <Arrow />
          </Link>
        </div>
        <Link className="text-link light-link" href="/">
          Return to home <Arrow />
        </Link>
      </section>

      <footer className="details-footer">
        <Link className="brand" href="/">
          <img
            className="brand-mark"
            src="/images/prasad-enterprises-logo.png"
            alt="Vizag Invisible Grills"
          />
          <span>
            <strong>VIZAG</strong>
            <small>RAIN SHIELDS</small>
          </span>
        </Link>
        <span>Visakhapatnam · Andhra Pradesh</span>
        <a href="tel:+917013378477">+91 7013378477</a>
      </footer>

      <div className="site-copyright-bar">
        © 2026 Vizag Invisible Grills · All rights reserved.
      </div>
    </main>
  )
}
