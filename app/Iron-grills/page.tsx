import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iron Grills | Vizag Invisible Grills',
  description:
    'Explore durable and stylish iron grills for balconies, windows and homes in Visakhapatnam.',
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

const details = [
  [
    '01',
    'Strong iron construction',
    'Durable iron grill designs for everyday home security.',
  ],
  [
    '02',
    'Classic and modern designs',
    'Choose decorative patterns or clean, contemporary grill styles.',
  ],
  [
    '03',
    'Custom-fitted installation',
    'Grills measured and fitted to suit your windows, balconies and entrances.',
  ],
]

export default function IronGrillsPage() {
  return (
    <main className="details-page iron-grills-page">
      {/* HEADER */}
      <header className="site-header">
        <Link
          className="brand"
          href="/"
          aria-label="Vizag Invisible Grills home"
        >
          <img
            className="brand-mark"
            src="/images/prasad-enterprises-logo.png"
            alt="Vizag Invisible Grills"
          />

          <span>
            <strong>VIZAG</strong>
            <small>IRON GRILLS</small>
          </span>
        </Link>

        <nav className="details-nav">
          <Link href="/">Home</Link>
          <a href="#systems">Our designs</a>
          <a href="#why">Why iron grills</a>
          <a href="#spaces">Applications</a>
        </nav>

        <Link className="header-cta" href="/#contact">
          Get a free quote <Arrow />
        </Link>
      </header>

      {/* HERO */}
      <section className="details-hero scroll-reveal">
        <div className="details-hero-pattern" />

        <div className="details-hero-copy">
          <div className="eyebrow light">
            <span />
            STRENGTH MEETS STYLE
          </div>

          <div className="details-hero-index">
            03 / IRON GRILL COLLECTION
          </div>

          <h1>
            Strong protection
            <br />
            <em>timeless design.</em>
          </h1>

          <p>
            Discover durable iron grills designed for balconies,
            windows and entrances. Bring together dependable
            protection and designs that complement your home.
          </p>

          <div className="hero-actions">
            <Link className="button button-saffron" href="/#contact">
              Explore iron grills <Arrow />
            </Link>

            <Link
              className="text-link light-link"
              href="/"
            >
              Back to home <Arrow />
            </Link>
          </div>
        </div>

        <div className="details-hero-meta">
          <span>IRON</span>
          <small>
            STRONG &amp; DURABLE
            <br />
            GRILL DESIGNS
          </small>
        </div>
      </section>

      {/* PRODUCT SYSTEMS */}
      <section
        className="ig-editorial-showcase scroll-reveal"
        id="systems"
      >
        <div className="details-section-intro">
          <div>
            <span>THE COLLECTION</span>
            <strong>Iron grill designs.</strong>
          </div>

          <p>
            Discover grill styles for different areas of your home,
            with custom measurements and installation.
          </p>
        </div>

        {/* DESIGN 1 */}
        <article className="ig-editorial-row scroll-reveal">
          <div className="ig-editorial-media">
            <span className="wire-number">01</span>

            <img
              src="/images/IronGrills.png"
              alt="Modern black iron grills installed on a balcony"
            />

            <div className="wire-label">MODERN</div>
          </div>

          <div className="ig-editorial-copy">
            <span className="ig-kicker">Modern iron grills</span>

            <h3>
              Clean lines
              <br />
              <em>strong character.</em>
            </h3>

            <p>
              Contemporary iron grill designs with neat vertical
              bars and clean geometric details, ideal for modern
              balconies, windows and residential spaces.
            </p>

            <div className="ig-spec-grid">
              <div>
                <strong>Contemporary</strong>
                <small>Clean geometric styling</small>
              </div>

              <div>
                <strong>Custom fit</strong>
                <small>Designed for your space</small>
              </div>
            </div>

            <div className="ig-tagline">
              Simple lines
              <br />
              <em>lasting style.</em>
            </div>
          </div>
        </article>


        {/* DESIGN 3 */}
        <article className="ig-editorial-row scroll-reveal">
          <div className="ig-editorial-media">
            <span className="wire-number">03</span>

            <img
              src="/images/window.png"
              alt="Iron window grills fitted to a modern home"
            />

            <div className="wire-label">WINDOWS</div>
          </div>

          <div className="ig-editorial-copy">
            <span className="ig-kicker">Window iron grills</span>

            <h3>
              Everyday security
              <br />
              <em>neatly finished.</em>
            </h3>

            <p>
              Practical iron grill installations for windows and
              other suitable openings, designed to complement the
              building and fit the available space.
            </p>

            <div className="ig-spec-grid">
              <div>
                <strong>Secure fitting</strong>
                <small>Installed to suit the opening</small>
              </div>

              <div>
                <strong>Custom design</strong>
                <small>Multiple styles available</small>
              </div>
            </div>

            <div className="ig-tagline">
              Everyday strength
              <br />
              <em>thoughtful design.</em>
            </div>
          </div>
        </article>
      </section>

      {/* WHY IRON GRILLS */}
      <section
        className="details-intro section-pad scroll-reveal"
        id="why"
      >
        <div className="section-kicker">
          WHY CHOOSE IRON GRILLS
        </div>

        <div className="details-intro-grid">
          <h2>
            Protection that
            <em> complements your home.</em>
          </h2>

          <p className="lead">
            Iron grills offer a traditional and versatile option
            for residential protection. Choose from modern,
            decorative and practical designs to suit your
            home's architecture and requirements.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="feature-split section-pad scroll-reveal">
        <div className="feature-split-image">
          <img
            src="/images/IronGrills.png"
            alt="Black iron grill installation on a modern residential balcony"
          />
        </div>

        <div className="feature-split-copy">
          <div className="section-kicker">
            DESIGNED FOR YOUR HOME
          </div>

          <h2>
            Strong by design
            <em> finished your way.</em>
          </h2>

          <p className="lead">
            From simple vertical bars to decorative patterns,
            select an iron grill style that suits your space.
            Our installation is planned around the dimensions
            and requirements of your property.
          </p>

          <ul className="feature-points">
            <li>Modern and traditional design options</li>
            <li>Custom measurements for suitable openings</li>
            <li>Professional fitting for residential spaces</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        className="details-uses section-pad scroll-reveal"
        id="spaces"
      >
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              MADE FOR EVERYDAY SPACES
            </div>

            <h2>
              One collection.
              <br />
              <em>Many applications.</em>
            </h2>
          </div>

          <p>
            Explore iron grill options for different openings
            and areas around your home.
          </p>
        </div>

        <div className="details-use-grid">
          <div>
            <span>01</span>
            <img
              src="/images/IronGrills.png"
              alt="Iron grill installation on a balcony"
            />
            <h3>Balconies</h3>
            <p>
              Iron railing and grill designs for suitable
              residential balcony spaces.
            </p>
          </div>

          <div>
            <span>02</span>
            <img
              src="/images/window.png"
              alt="Iron security grills fitted to a window"
            />
            <h3>Windows</h3>
            <p>
              Practical window grill designs fitted to
              the dimensions of your openings.
            </p>
          </div>

          <div>
            <span>03</span>
            <img
              src="/images/door.jpeg"
              alt="Decorative iron grill gate at a residential entrance"
            />
            <h3>Entrances</h3>
            <p>
              Decorative iron grill options for suitable
              entrances and access areas.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="details-cta section-pad scroll-reveal">
        <div>
          <div className="section-kicker light">
            LET'S PLAN YOUR PROJECT
          </div>

          <h2>
            Make your home
            <br />
            <em>stronger in style.</em>
          </h2>

          <p>
            Tell us about your space and explore iron grill
            options that suit your requirements.
          </p>

          <Link className="button button-saffron" href="/#contact">
            Get a free quote <Arrow />
          </Link>
        </div>

        <Link className="text-link light-link" href="/">
          Return to home <Arrow />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="details-footer">
        <Link className="brand" href="/">
          <img
            className="brand-mark"
            src="/images/prasad-enterprises-logo.png"
            alt="Vizag Invisible Grills"
          />

          <span>
            <strong>VIZAG</strong>
            <small>IRON GRILLS</small>
          </span>
        </Link>

        <span>Visakhapatnam · Andhra Pradesh</span>

        <a href="tel:+917013378477">
          +91 7013378477
        </a>
      </footer>

      <div className="site-copyright-bar">
        © 2026 Vizag Invisible Grills · All rights reserved.
      </div>
    </main>
  )
}