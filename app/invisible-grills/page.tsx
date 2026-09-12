import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invisible Grills | Vizag Invisible Grills',
  description:
    'Invisible grills for balconies, windows and staircases by Vizag Invisible Grills.',
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

const details = [
  [
    '01',
    'Marine-grade stainless steel',
    '2.5mm high-tensile cables resist rust and corrosion in coastal air.',
  ],
  [
    '02',
    'A clear, open view',
    'Slim vertical lines let daylight, airflow and the horizon remain part of your home.',
  ],
  [
    '03',
    'Measured for your space',
    'Every installation is planned on-site and tensioned for a neat, dependable finish.',
  ],
]

export default function InvisibleGrillsPage() {
  return (
    <main className="details-page">

      {/* TOP BAR */}
     

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
            <small>INVISIBLE GRILLS</small>
          </span>
        </Link>

        <nav className="details-nav">
          <Link href="/">Home</Link>
          <a href="#systems">Systems</a>
          <a href="#why">Why invisible</a>
          <a href="#spaces">Applications</a>
        </nav>

        <Link
          className="header-cta"
          href="/#contact"
        >
          Get a free quote
          <Arrow />
        </Link>
      </header>

      {/* HERO */}
      <section className="details-hero scroll-reveal">
        <div className="details-hero-pattern" />

        <div className="details-hero-copy">
          <div className="eyebrow light">
            <span />
            THE INVISIBLE GRILLS GUIDE
          </div>

          <div className="details-hero-index">
            01 / PRODUCT SYSTEM
          </div>

          <h1>
            Protection that
            <br />
            <em>keeps the view.</em>
          </h1>

          <p>
            Invisible grills are a quiet layer of safety for balconies,
            windows and staircases. Strong where it matters, discreet
            everywhere else.
          </p>

          <div className="hero-actions">
            <Link
              className="button button-saffron"
              href="/#contact"
            >
              Plan your protection
              <Arrow />
            </Link>

            <Link
              className="text-link light-link"
              href="/"
            >
              Back to home
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="details-hero-meta">
          <span>316 SS</span>
          <small>MARINE-GRADE<br />STAINLESS STEEL</small>
        </div>
      </section>

      {/* PRODUCT SYSTEMS */}
      <section
        className="ig-editorial-showcase scroll-reveal"
        id="systems"
      >
        <div className="details-section-intro">
          <div>
            <span>THE SYSTEM</span>
            <strong>Three cable options.</strong>
          </div>

          <p>
            Select the system that best suits the opening, span and
            character of your home.
          </p>
        </div>

        {/* 2.5 MM */}
        <article className="ig-editorial-row scroll-reveal">
          <div className="ig-editorial-media">
            <span className="wire-number">01</span>

            <img
              src="/images/invisible-grills/wire-2-5mm.png"
              alt="2.5 mm invisible grill wire"
            />

            <div className="wire-label">
              2.5 MM
            </div>
          </div>

          <div className="ig-editorial-copy">
            <span className="ig-kicker">
              2.5 mm system
            </span>

            <h3>
              The everyday
              <br />
              <em>standard.</em>
            </h3>

            <p>
              High-tensile stainless-steel cables designed to stay strong,
              discreet and reliable in everyday balconies, windows and
              stair openings.
            </p>

            <div className="ig-spec-grid">
              <div>
                <strong>316 SS</strong>
                <small>
                  Marine-grade stainless steel
                </small>
              </div>

              <div>
                <strong>Nylon coating</strong>
                <small>
                  Weather-resistant smooth finish
                </small>
              </div>
            </div>

            <div className="ig-tagline">
              Open views
              <br />
              <em>safer lives.</em>
            </div>
          </div>
        </article>

        {/* 3 MM */}
        <article className="ig-editorial-row reverse scroll-reveal">
          <div className="ig-editorial-copy">
            <span className="ig-kicker">
              3 mm system
            </span>

            <h3>
              Built for
              <br />
              <em>stronger openings.</em>
            </h3>

            <p>
              For larger spans and high-use spaces, the 3 mm version adds
              reinforced strength without compromising the clean,
              uninterrupted look of the home.
            </p>

            <div className="ig-spec-grid">
              <div>
                <strong>Reinforced</strong>
                <small>
                  Higher load support
                </small>
              </div>

              <div>
                <strong>Low visibility</strong>
                <small>
                  Minimal visual interruption
                </small>
              </div>
            </div>

            <div className="ig-tagline">
              Clear views
              <br />
              <em>stronger boundaries.</em>
            </div>
          </div>

          <div className="ig-editorial-media">
            <span className="wire-number">02</span>

            <img
              src="/images/invisible-grills/wire-3mm.png"
              alt="3 mm invisible grill wire"
            />

            <div className="wire-label">
              3 MM
            </div>
          </div>
        </article>

        {/* 2 MM */}
        <article className="ig-editorial-row scroll-reveal">
          <div className="ig-editorial-media">
            <span className="wire-number">03</span>

            <img
              src="/images/invisible-grills/wire-2mm.png"
              alt="2 mm invisible grill wire"
            />

            <div className="wire-label">
              2 MM
            </div>
          </div>

          <div className="ig-editorial-copy">
            <span className="ig-kicker">
              2 mm system
            </span>

            <h3>
              Precision for
              <br />
              <em>daily living.</em>
            </h3>

            <p>
              Lightweight and finely tuned for compact openings, this
              system protects without visual bulk so the room keeps its
              original character.
            </p>

            <div className="ig-spec-grid">
              <div>
                <strong>Measured fit</strong>
                <small>
                  Custom layout planning
                </small>
              </div>

              <div>
                <strong>Clean finish</strong>
                <small>
                  Minimal visual weight
                </small>
              </div>
            </div>

            <div className="ig-tagline">
              Clear lines
              <br />
              <em>safer homes.</em>
            </div>
          </div>
        </article>
      </section>

      {/* WHY */}
      <section
        className="details-intro section-pad scroll-reveal"
        id="why"
      >
        <div className="section-kicker">
          WHY INVISIBLE GRILLS
        </div>

        <div className="details-intro-grid">
          <h2>
            Keep the parts of home you
            <em> love.</em>
          </h2>

          <p className="lead">
            Traditional metal bars can make a room feel enclosed. Our
            cable systems create a secure boundary without adding visual
            weight, so children and pets stay safer and your architecture
            stays open.
          </p>
        </div>
      </section>

      {/* FEATURE */}
      <section className="feature-split section-pad scroll-reveal">
        <div className="feature-split-image">
          <img
            src="/images/invisible-grills/feature-finish.jpg"
            alt="Invisible grill system with slim protective cables and open balcony"
          />
        </div>

        <div className="feature-split-copy">
          <div className="section-kicker">
            THE FINISH THAT STAYS INVISIBLE
          </div>

          <h2>
            Designed to disappear
            <em> into the view.</em>
          </h2>

          <p className="lead">
            Every line is placed to protect without crowding the room.
            The result is a discreet safety barrier that keeps the light,
            air and horizon feeling natural.
          </p>

          <ul className="feature-points">
            <li>
              Low-visibility stainless-steel line with a precise tensioned
              finish
            </li>

            <li>
              Strong enough for balconies, windows and stair openings in
              daily use
            </li>

            <li>
              Coastal-friendly finish designed for home environments
              across Vizag
            </li>
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
              One system.
              <br />
              <em>Many ways to live.</em>
            </h2>
          </div>

          <p>
            From a high-rise balcony to a quiet staircase, we fit
            protection around the way your home already works.
          </p>
        </div>

        <div className="details-use-grid">
          <div>
            <span>01</span>

            <img
              src="/images/invisible-grills/use-balcony.png"
              alt="Invisible grills installed across a balcony"
            />

            <h3>Balconies</h3>

            <p>
              Enjoy open air and wide views with a subtle child- and
              pet-safe barrier.
            </p>
          </div>

          <div>
            <span>02</span>

            <img
              src="/images/invisible-grills/use-window.png"
              alt="Invisible grills installed across an open passage"
            />

            <h3>Windows</h3>

            <p>
              Add confidence to open windows without blocking light or
              ventilation.
            </p>
          </div>

          <div>
            <span>03</span>

            <img
              src="/images/invisible-grills/use-staircase.png"
              alt="Invisible grill system detail"
            />

            <h3>Staircases</h3>

            <p>
              Follow the lines of your staircase with a neat,
              low-visual-impact finish.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="details-cta section-pad scroll-reveal">
        <div>
          <div className="section-kicker light">
            READY WHEN YOU ARE
          </div>

          <h2>
            Let your home
            <br />
            <em>stay open.</em>
          </h2>

          <p>
            Tell us what you want to protect and we will recommend the
            right invisible grill system for your space.
          </p>

          <Link
            className="button button-saffron"
            href="/#contact"
          >
            Get a free quote
            <Arrow />
          </Link>
        </div>

        <Link
          className="text-link light-link"
          href="/"
        >
          Return to Vizag Invisible Grills
          <Arrow />
        </Link>
      </section>


      {/* FOOTER */}

      {/* FLOATING SOCIAL MEDIA BUTTONS */}
      <div className="floating-socials" aria-label="Social media links">
        <a href="https://wa.me/917013378477" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="floating-social">
          <img src="/images/home/whatsapp.png" alt="WhatsApp" />
          <span className="floating-tooltip">WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/prasadorrupula?stkn=aWcyN2U0NTY5Ymc1" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="floating-social">
          <img src="/images/home/insta.png" alt="Instagram" />
          <span className="floating-tooltip">Instagram</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61594490063217&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="floating-social">
          <img src="/images/home/facebook.png" alt="Facebook" />
          <span className="floating-tooltip">Facebook</span>
        </a>
      </div>

      <footer className="details-footer">
        <Link className="brand" href="/">
          <img
            className="brand-mark"
            src="/images/prasad-enterprises-logo.png"
            alt="Vizag Invisible Grills"
          />

          <span>
            <strong>VIZAG</strong>
            <small>INVISIBLE GRILLS</small>
          </span>
        </Link>

        <span>
          Visakhapatnam · Andhra Pradesh
        </span>

        <a href="tel:+917013378477">
          +91 7013378477
        </a>
        
      </footer>
      <div className="site-copyright-bar">© 2026 Vizag Invisible Grills · All rights reserved. Images, designs and website content may not be reproduced without permission.</div>

    </main>
  )
}