import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shoe Racks | Vizag Invisible Grills',
  description:
    'Discover practical, stylish shoe rack solutions for entryways and homes in Visakhapatnam.',
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

const storageIdeas = [
  {
    number: '01',
    title: 'Entryways',
    copy: 'Keep everyday footwear together near the door and make coming and going feel more organised.',
    image: '/images/shoe-racks/entryways.png',
  },
  {
    number: '02',
    title: 'Compact corners',
    copy: 'Make useful storage of a smaller space with a shoe rack planned around the room.',
    image: '/images/shoe-racks/compact-corners.png',
  },
  {
    number: '03',
    title: 'Family storage',
    copy: 'Give frequently used footwear a neat, accessible place in your home.',
    image: '/images/shoe-racks/family-storage.png',
  },
]

export default function ShoeRacksPage() {
  return (
    <main className="details-page shoe-racks-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Vizag Invisible Grills home">
          <img
            className="brand-mark"
            src="/images/prasad-enterprises-logo.png"
            alt="Vizag Invisible Grills"
          />
          <span>
            <strong>VIZAG</strong>
            <small>SHOE RACKS</small>
          </span>
        </Link>

        <nav className="details-nav">
          <Link href="/">Home</Link>
          <a href="#storage">Storage ideas</a>
          <a href="#why">Why choose us</a>
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
            SMART SHOE STORAGE · VIZAG
          </div>
          <div className="details-hero-index">05 / EVERYDAY ORGANISATION</div>
          <h1>
            A place for every pair.
            <br />
            <em>A calmer entryway.</em>
          </h1>
          <p>
            Practical shoe racks designed to bring order to entryways and
            everyday living spaces.
          </p>
          <div className="hero-actions">
            <Link className="button button-saffron" href="/#contact">
              Plan your shoe rack <Arrow />
            </Link>
            <Link className="text-link light-link" href="/">
              Back to home <Arrow />
            </Link>
          </div>
        </div>
        <div className="details-hero-meta">
          <span>05</span>
          <small>
            NEAT, PRACTICAL
            <br />
            EVERYDAY STORAGE
          </small>
        </div>
      </section>

      <section className="details-intro section-pad scroll-reveal" id="storage">
        <div className="section-kicker">STORAGE THAT FITS YOUR HOME</div>
        <div className="details-intro-grid">
          <h2>
            Less clutter.
            <em> More room to come in.</em>
          </h2>
          <p className="lead">
            From a compact entryway to a dedicated storage area, a thoughtfully
            planned shoe rack keeps footwear easy to find and your space
            feeling tidy.
          </p>
        </div>
      </section>

      <section className="feature-split section-pad scroll-reveal">
        <div className="feature-split-image">
          <img
            src="/images/Shoeracks.png"
            alt="Organised shoe rack in a bright, modern home entryway"
          />
        </div>
        <div className="feature-split-copy">
          <div className="section-kicker">MADE FOR DAILY ROUTINES</div>
          <h2>
            Everyday order.
            <em> A thoughtful fit.</em>
          </h2>
          <p className="lead">
            Choose a shoe storage layout that works with your room and routine.
            We can help you plan around the space available and the footwear
            you want to keep close at hand.
          </p>
          <ul className="feature-points">
            <li>Storage planned to suit your available space</li>
            <li>Easy-to-reach organisation for everyday footwear</li>
            <li>A tidy look for entryways and living spaces</li>
          </ul>
        </div>
      </section>

      <section className="details-uses section-pad scroll-reveal" id="why">
        <div className="section-heading">
          <div>
            <div className="section-kicker">A SPOT FOR EVERY PAIR</div>
            <h2>
              Make the most
              <br />
              <em>of your space.</em>
            </h2>
          </div>
          <p>
            Explore practical storage ideas for the places where footwear
            naturally gathers at home.
          </p>
        </div>

        <div className="details-use-grid">
          {storageIdeas.map((idea) => (
            <div key={idea.number}>
              <span>{idea.number}</span>
              <img
                src={idea.image}
                alt={`${idea.title} shoe storage idea`}
              />
              <h3>{idea.title}</h3>
              <p>{idea.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="details-cta section-pad scroll-reveal">
        <div>
          <div className="section-kicker light">LET’S ORGANISE YOUR SPACE</div>
          <h2>
            Give every pair
            <br />
            <em>a place to belong.</em>
          </h2>
          <p>
            Tell us about your space and we will help you plan a practical shoe
            rack for your home.
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
            <small>SHOE RACKS</small>
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
