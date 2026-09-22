'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const projects = [
  {
    title: 'Balcony cable installation',
    location: 'Visakhapatnam',
    image: '/images/projects/project-01.jpg',
  },
  {
    title: 'High-rise balcony protection',
    location: 'Visakhapatnam',
    image: '/images/projects/project-02.jpg',
  },
  {
    title: 'Night-time safety installation',
    location: 'Visakhapatnam',
    image: '/images/projects/project-03.jpg',
  },
  {
    title: 'Open balcony safety system',
    location: 'Visakhapatnam',
    image: '/images/projects/project-04.jpg',
  },
  {
    title: 'Coastal home protection',
    location: 'Visakhapatnam',
    image: '/images/projects/project-05.jpg',
  },
  {
    title: 'Window safety cables',
    location: 'Visakhapatnam',
    image: '/images/projects/project-06.jpg',
  },
  {
    title: 'Terrace edge protection',
    location: 'Visakhapatnam',
    image: '/images/projects/project-07.jpg',
  },
  {
    title: 'Wide-view balcony fitting',
    location: 'Visakhapatnam',
    image: '/images/projects/project-08.jpg',
  },
  {
    title: 'Residential safety upgrade',
    location: 'Visakhapatnam',
    image: '/images/projects/project-09.jpg',
  },
  {
    title: 'Rooftop safety installation',
    location: 'Visakhapatnam',
    image: '/images/projects/project-10.jpg',
  },
  {
    title: 'Clean ceiling anchoring',
    location: 'Visakhapatnam',
    image: '/images/projects/project-11.jpg',
  },
  {
    title: 'Service-area safety net',
    location: 'Visakhapatnam',
    image: '/images/projects/project-13.jpg',
  },
  {
    title: 'Wood-ceiling cable system',
    location: 'Visakhapatnam',
    image: '/images/projects/project-14.jpg',
  },
  {
    title: 'Precision cable installation',
    location: 'Visakhapatnam',
    image: '/images/projects/project-15.jpg',
  },
]

const faqs = [
  [
    'Are invisible grills safe?',
    'Yes. Our high-tensile stainless-steel cables are engineered for balcony, window and staircase safety while preserving your view.',
  ],
  [
    'How long does installation take?',
    'Most residential installations are completed within one day after a precise on-site measurement.',
  ],
  [
    'What warranty do you provide?',
    'Every installation includes a 10-year product warranty and clear after-sales support from our local team.',
  ],
]

const heroSlides = [
  {
    title: 'Invisible grills',
    image: '/images/home/hero-invisible-grill.jpg',
  },
  {
    title: 'Cricket nets',
    image: '/images/home/hero-cricket.jpg',
  },
  {
    title: 'Cloth hangers',
    image: '/images/home/hero-cloth-hanger.jpg',
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)
  const [revealPosition, setRevealPosition] = useState(52)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const revealSections = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.site > .trust-strip, .site > .proof-strip, .site > section:not(.hero)'
      )
    )

    revealSections.forEach((section) => {
      section.classList.add('scroll-reveal')

      Array.from(section.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          child.classList.add('scroll-reveal-item')
        }
      })
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -70px 0px',
      }
    )

    revealSections.forEach((section) => revealObserver.observe(section))

    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    if (selectedProject === null) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedProject])

  // Google Ads Contact conversion helper
  const gtag_report_conversion = (url?: string) => {
    const callback = () => {
      if (typeof url !== 'undefined') {
        window.location.href = url
      }
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18451411286/fr14COPprvgcENbiqN5E',
        event_callback: callback,
      })
    } else {
      callback()
    }

    return false
  }

  return (
    <main className="site">

      {/* TOP BAR */}
      <div className="utility">
        <div>VISAKHAPATNAM · ANDHRA PRADESH</div>

        <div className="utility-right">
          <span>30-year warranty</span>
          <span className="utility-dot" />
          <a href="tel:+917013378477">
            +91 70133 78477
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-header">
        <Link
          className="brand"
          href="#top"
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

        <nav
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          <a
            href="#solutions"
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </a>

          <a
            href="#why-us"
            onClick={() => setMenuOpen(false)}
          >
            Why us
          </a>

          <Link
            href="/invisible-grills"
            onClick={() => setMenuOpen(false)}
          >
            Invisible grills
          </Link>

          <Link
            href="/cricket-nets"
            onClick={() => setMenuOpen(false)}
          >
            Cricket nets
          </Link>

          <Link
            href="/cloth-hangers"
            onClick={() => setMenuOpen(false)}
          >
            Cloth hangers
          </Link>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        <a
          className="header-cta"
          href="#contact"
        >
          Get a free quote
          <Arrow />
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* HERO */}
      <section
        className="hero"
        id="top"
      >
        <div className="hero-background">

          <div
            className="hero-slides"
            aria-hidden="true"
          >
            {heroSlides.map((slide, index) => (
              <img
                key={slide.title}
                className={
                  index === heroIndex
                    ? 'hero-slide active'
                    : 'hero-slide'
                }
                src={slide.image}
                alt={slide.title}
              />
            ))}
          </div>

          <div className="hero-grid" />

          <div className="hero-glow" />
        </div>

        <div className="hero-copy">

          <div className="eyebrow light">
            <span />
            ENGINEERED FOR OPEN LIVING
          </div>

          <h1>
            Safety that
            <br />
            <em>disappears.</em>
          </h1>

          <p>
            Invisible grills that protect your home without putting a frame
            around your view. Designed, installed and supported locally in
            Visakhapatnam.
          </p>

          <div className="hero-actions">

            <a
              className="button button-saffron"
              href="#contact"
            >
              Plan your protection
              <Arrow />
            </a>

            <a
              className="text-link light-link"
              href="https://wa.me/917013378477"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
              <Arrow />
            </a>

          </div>

          <div className="hero-note">

            <span className="avatar-stack">
              <i />
              <i />
              <i />
            </span>

            <span>
              Trusted by <strong>1000+ homes</strong> across Vizag
            </span>

          </div>
        </div>

        <div className="hero-side">

          <div className="hero-number">
            {String(heroIndex + 1).padStart(2, '0')}
          </div>

          <div className="hero-side-line" />

          <span>
            {heroSlides[heroIndex].title.toUpperCase()}
            <br />
            PROTECTION
          </span>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>

          <span className="hero-scroll-line" />

          <span>VIZAG · 17°41′N</span>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-strip">

        <p>
          Made for the way Vizag lives
        </p>

        <div>
          <span>Sea air ready</span>
          <span>Child safe</span>
          <span>View preserved</span>
          <span>Locally installed</span>
        </div>

      </section>

      {/* PROOF */}
      <section className="proof-strip">

        <div>
          <strong>1000+</strong>
          <span>happy customers</span>
        </div>

        <div>
          <strong>10</strong>
          <span>year warranty</span>
        </div>

        <div>
          <strong>1 day</strong>
          <span>typical installation</span>
        </div>

        <p>
          Trusted protection,
          <br />
          measured in peace of mind.
        </p>

      </section>

      {/* INTRO */}
      <section
        className="intro section-pad"
        id="why-us"
      >

        <div className="section-kicker">
          THE BETTER BARRIER
        </div>

        <div className="intro-grid">

          <h2>
            A safer home should still feel like
            <em> home.</em>
          </h2>

          <div>

            <p className="lead">
              Traditional grills protect by taking something away. Our
              invisible safety systems give you peace of mind while keeping
              your architecture, light and the horizon exactly as you
              intended.
            </p>

            <a
              className="text-link"
              href="#solutions"
            >
              Explore our solutions
              <Arrow />
            </a>

          </div>

        </div>

        <div className="intro-statement">

          <span>01</span>

          <p>
            Protection should be felt,
            <br />
            not seen.
          </p>

        </div>

      </section>

      {/* COMPARISON */}
      <section className="comparison section-pad">

        <div className="comparison-heading">

          <div>

            <div className="section-kicker">
              SEE THE DIFFERENCE
            </div>

            <h2>
              From enclosed to
              <br />
              <em>effortlessly open.</em>
            </h2>

          </div>

          <p>
            Drag the line to see how a discreet Vizag installation changes
            the feeling of your home.
          </p>

        </div>

        <div className="reveal-wrap">

          <div className="reveal-stage">

            <div className="reveal-after-pane">

              <img
                className="reveal-image reveal-after"
                src="/images/home/before-grill.jpg"
                alt="Balcony before installation with bulky visible metal bars"
              />

              <div className="reveal-label reveal-label-after">
                After
                <span>Obstructed view</span>
              </div>

            </div>

            <div
              className="reveal-before"
              style={{
                width: `${revealPosition}%`,
              }}
            >

              <img
                className="reveal-image"
                src="/images/home/after-grill.jpg"
                alt="Balcony after installation with discreet invisible safety cables"
              />

              <div className="reveal-label reveal-label-before">
                Before
                <span>Open living</span>
              </div>

            </div>

            <div
              className="reveal-handle"
              style={{
                left: `${revealPosition}%`,
              }}
              aria-hidden="true"
            >
              <span>↔</span>
            </div>

            <input
              className="reveal-range"
              type="range"
              min="8"
              max="92"
              value={revealPosition}
              onChange={(event) =>
                setRevealPosition(
                  Number(event.target.value)
                )
              }
              aria-label="Compare balcony before and after installation"
            />

          </div>

          <div className="reveal-caption">

            <span>
              Drag to compare
            </span>

            <span>
              Vizag Invisible Grills · Coastal home, Vizag
            </span>

          </div>

        </div>

      </section>

      {/* SOLUTIONS */}
      <section
        className="solutions section-pad"
        id="solutions"
      >

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              WHERE WE HELP
            </div>

            <h2>
              One discreet system.
              <br />
              <em>Everyday confidence.</em>
            </h2>

          </div>

          <p>
            Precision-fitted stainless steel cables for the places that
            matter most.
          </p>

        </div>

        <div className="solution-grid">

          <article className="solution-card dark-card">

            <div className="card-number">
              01
            </div>

            <div className="solution-icon">
              ↗
            </div>

            <h3>
              Balconies & windows
            </h3>

            <p>
              Keep children and pets safer on high-rise openings without
              losing natural light or your view.
            </p>

            <a
              href="#contact"
              className="card-arrow"
            >
              <Arrow />
            </a>

          </article>

          <article className="solution-card image-card">

            <img
              src="/images/image copy.png"
              alt="Safety net and invisible grill installation across a balcony"
            />

            <div className="image-card-content">

              <span>02</span>

              <strong>
                Balcony safety
              </strong>

              <small>
                Clean protection for open spaces
              </small>

            </div>

          </article>

          <article className="solution-card sand-card">

            <div className="card-number">
              03
            </div>

            <div className="solution-icon">
              ↗
            </div>

            <h3>
              Staircases & passages
            </h3>

            <p>
              Subtle, strong protection that follows the lines of your home
              and lets the design breathe.
            </p>

            <a
              href="#contact"
              className="card-arrow"
            >
              <Arrow />
            </a>

          </article>

        </div>

      </section>

      {/* INVISIBLE GRILLS FEATURE */}
      <section className="invisible-grills-showcase section-pad">

        <div className="ig-showcase-copy">

          <div className="section-kicker">
            INVISIBLE GRILLS
          </div>

          <div className="ig-big-number">
            01
          </div>

          <h2>
            Protection
            <br />
            <em>without the frame.</em>
          </h2>

          <p>
            Invisible grills offer discreet protection for balconies,
            windows and staircases without compromising the openness of
            your home. It’s a clean, modern system that keeps your view,
            light and design intact.
          </p>

          <div className="ig-showcase-actions">

            <a
              className="button button-saffron"
              href="#contact"
            >
              Start your project
              <Arrow />
            </a>

            <Link
              className="text-link"
              href="/invisible-grills"
            >
              Explore the system
              <Arrow />
            </Link>

          </div>

        </div>

        <div className="ig-showcase-media">

          <img
            src="/images/invisible-grills-reference.png"
            alt="Invisible grill installation reference in a modern balcony"
          />

          <div className="ig-media-label">

            <span>
              316 SS
            </span>

            <small>
              Marine-grade cable system
            </small>

          </div>

        </div>

      </section>

      {/* CRICKET NETS */}
      <section className="cricket-nets section-pad">

        <div className="cricket-copy">

          <div className="section-kicker">
            CRICKET NETS
          </div>

          <span className="section-number">
            02
          </span>

          <h2>
            Safe practice.
            <br />
            <em>Sharper focus.</em>
          </h2>

          <p>
            Protective cricket nets for private practice spaces, terraces
            and homes where safety and clear space matter. Built to keep
            your training area secure without compromising the experience.
          </p>

          <div className="ig-showcase-actions">

            <a
              className="button button-saffron"
              href="#contact"
            >
              Plan your net
              <Arrow />
            </a>

            <Link
              className="text-link"
              href="/cricket-nets"
            >
              Explore the system
              <Arrow />
            </Link>

          </div>

        </div>

        <div className="cricket-video">

          <img
            src="/images/cricket-nets.jpeg"
            alt="Cricket net practice facility"
          />

          <div className="cricket-video-overlay" />

          <span className="cricket-video-label">
            Cricket net installation
          </span>

        </div>

      </section>

      {/* CLOTH HANGERS */}
      <section className="cloth-hangers-showcase section-pad">

        <div className="ig-showcase-copy cloth-showcase-copy">

          <div className="section-kicker">
            CLOTH HANGERS
          </div>

          <div className="ig-big-number">
            03
          </div>

          <h2>
            Organised living.
            <br />
            <em>With less visual noise.</em>
          </h2>

          <p>
            Thoughtful cloth hanger systems for balconies, utility corners and
            compact homes where smart storage matters just as much as the
            look of the room.
          </p>

          <div className="ig-showcase-actions">

            <a
              className="button button-saffron"
              href="#contact"
            >
              Plan your storage
              <Arrow />
            </a>

            <Link
              className="text-link"
              href="/cloth-hangers"
            >
              Explore the system
              <Arrow />
            </Link>

          </div>

        </div>

        <div className="ig-showcase-media cloth-showcase-media">

          <img
            src="/images/cloth-hangers/wall-mount.png"
            alt="Cloth hanger installation in a tidy modern home"
          />

          <div className="ig-media-label">

            <span>
              Smart storage
            </span>

            <small>
              Clean drying & hanger layouts
            </small>

          </div>

        </div>

      </section>

      {/* PIGEON NETS */}
      <section className="pigeon-safety section-pad">

        <div className="pigeon-copy">

          <div className="section-kicker">
            PIGEON SAFETY NETS
          </div>

          <span className="section-number">
            04
          </span>

          <h2>
            Keep balconies
            <br />
            <em>clean, calm & protected.</em>
          </h2>

          <p className="lead">
            Our discreet pigeon safety nets keep birds away from balconies,
            utility areas and open shafts without blocking daylight,
            airflow or the character of your home.
          </p>

          <div className="pigeon-points">

            <span>
              <b>01</b>
              Bird-safe mesh
            </span>

            <span>
              <b>02</b>
              Neat edge-to-edge fitting
            </span>

            <span>
              <b>03</b>
              Built for coastal homes
            </span>

          </div>

          <a
            className="button button-saffron"
            href="#contact"
          >
            Protect your space
            <Arrow />
          </a>

        </div>

        <div className="pigeon-video">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Pigeon safety net installation video"
          >
            <source
              src="/videos/pigeon-safety-nets.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pigeon-video-overlay" />

          <span className="pigeon-video-label">
            Pigeon net installation
          </span>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        className="projects section-pad"
        id="projects"
      >

        <div className="section-heading">

          <div>

            <div className="section-kicker">
              SELECTED INSTALLATIONS
            </div>

            <h2>
              Made for real
              <br />
              <em>homes, beautifully.</em>
            </h2>

          </div>

          <div className="project-heading-actions">

            <a
              className="text-link"
              href="#contact"
            >
              Start your project
              <Arrow />
            </a>

            <div className="slider-controls">

              <button
                type="button"
                aria-label="Previous installation"
                onClick={() =>
                  setActiveProject(
                    (activeProject - 1 + projects.length) %
                      projects.length
                  )
                }
              >
                ←
              </button>

              <span>
                {String(activeProject + 1).padStart(2, '0')}
                <i>/</i>
                {String(projects.length).padStart(2, '0')}
              </span>

              <button
                type="button"
                aria-label="Next installation"
                onClick={() =>
                  setActiveProject(
                    (activeProject + 1) % projects.length
                  )
                }
              >
                →
              </button>

            </div>

          </div>

        </div>

        <div className="project-slider">

          <div className="project-visual">

            {projects.map((project, index) => {

              const offset =
                (index - activeProject + projects.length) %
                projects.length

              const normalizedOffset =
                offset > projects.length / 2
                  ? offset - projects.length
                  : offset

              if (Math.abs(normalizedOffset) > 1) {
                return null
              }

              return (
                <button
                  className={
                    normalizedOffset === 0
                      ? 'project-gallery-card active'
                      : 'project-gallery-card'
                  }
                  key={project.title}
                  type="button"
                  onClick={() =>
                    normalizedOffset === 0
                      ? setSelectedProject(index)
                      : setActiveProject(index)
                  }
                  aria-label={
                    normalizedOffset === 0
                      ? `Open ${project.title}`
                      : `Show ${project.title}`
                  }
                  style={{
                    transform: `translateX(calc(-50% + ${
                      normalizedOffset * 34
                    }vw)) scale(${
                      normalizedOffset === 0 ? 1 : 0.78
                    })`,
                    opacity:
                      normalizedOffset === 0 ? 1 : 0.48,
                    zIndex:
                      normalizedOffset === 0 ? 3 : 2,
                  }}
                >

                  <div className="project-window-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="project-overlay">

                      <span className="project-location">
                        {project.location}
                      </span>

                      <strong>
                        {project.title}
                      </strong>

                      <span className="project-link">
                        View installation
                        <span>↗</span>
                      </span>

                    </div>

                  </div>

                </button>
              )
            })}

          </div>

        </div>

      </section>

      {/* LIGHTBOX */}
      {selectedProject !== null && (

        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Installation photo preview"
          onClick={() => setSelectedProject(null)}
        >

          <button
            className="lightbox-close"
            type="button"
            onClick={() => setSelectedProject(null)}
            aria-label="Close preview"
          >
            ×
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            type="button"
            onClick={(event) => {

              event.stopPropagation()

              setSelectedProject(
                (selectedProject - 1 + projects.length) %
                  projects.length
              )

            }}
            aria-label="Previous photo"
          >
            ←
          </button>

          <img
            src={projects[selectedProject].image}
            alt={projects[selectedProject].title}
            onClick={(event) =>
              event.stopPropagation()
            }
          />

          <button
            className="lightbox-nav lightbox-next"
            type="button"
            onClick={(event) => {

              event.stopPropagation()

              setSelectedProject(
                (selectedProject + 1) % projects.length
              )

            }}
            aria-label="Next photo"
          >
            →
          </button>

        </div>

      )}

      {/* PROCESS */}
      <section className="process section-pad">

        <div className="process-heading">

          <div className="section-kicker light">
            HOW IT WORKS
          </div>

          <h2>
            Simple from
            <br />
            <em>start to safe.</em>
          </h2>

          <p>
            A straightforward local process, from the first conversation
            to the final installation.
          </p>

        </div>

        <div className="steps">

          <div>
            <span>01</span>

            <h3>
              Talk it through
            </h3>

            <p>
              Tell us about your home, your view and what you want to
              protect.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>
              We measure
            </h3>

            <p>
              Our team visits, understands the space and recommends the
              right system.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>
              Live freely
            </h3>

            <p>
              Enjoy a clean, confident installation backed by our
              10-year warranty.
            </p>
          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="faq section-pad">

        <div>

          <div className="section-kicker">
            GOOD TO KNOW
          </div>

          <h2>
            Questions,
            <br />
            <em>answered.</em>
          </h2>

          <p>
            Still curious? Our team is only a call or WhatsApp away.
          </p>

          <a
            className="text-link"
            href="tel:+917013378477"
          >
            Talk to an expert
            <Arrow />
          </a>

        </div>

        <div className="faq-list">

          {faqs.map(([question, answer], index) => (

            <div
              className={
                openFaq === index
                  ? 'faq-item active'
                  : 'faq-item'
              }
              key={question}
            >

              <button
                onClick={() =>
                  setOpenFaq(
                    openFaq === index ? -1 : index
                  )
                }
                aria-expanded={openFaq === index}
              >

                <span>
                  {question}
                </span>

                <b>
                  {openFaq === index ? '−' : '+'}
                </b>

              </button>

              {openFaq === index && (
                <p>
                  {answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        className="contact section-pad"
        id="contact"
      >

        <div className="contact-copy">

          <div className="section-kicker light">
            LET’S MAKE IT INVISIBLE
          </div>

          <h2>
            Your view is worth
            <br />
            <em>protecting.</em>
          </h2>

          <p>
            Share a few details and our team will call you back with a
            clear recommendation and estimate.
          </p>

          <div className="contact-details">

            <a href="tel:+917013378477">
              +91 70133 78477
            </a>

            <a href="mailto:prasadenterprises1431@gmail.com">
              prasadenterprises1431@gmail.com
            </a>

          </div>

        </div>

        <form
          className="quote-form"
          onSubmit={(event) => {

            event.preventDefault()

            const formData = new FormData(
              event.currentTarget
            )

            const name = String(
              formData.get('name') ?? ''
            ).trim()

            const phone = String(
              formData.get('phone') ?? ''
            ).trim()

            const space = String(
              formData.get('space') ?? ''
            ).trim()

            const message = [
              'Hello Vizag Invisible Grills,',
              '',
              'I would like to request a free quote.',
              '',
              `Name: ${name}`,
              `Phone: ${phone}`,
              `What are you protecting?: ${
                space || 'Not specified'
              }`,
            ].join('\n')

            const whatsappUrl =
              `https://wa.me/917013378477?text=${
                encodeURIComponent(message)
              }`

            // Google Ads Contact conversion
            gtag_report_conversion(whatsappUrl)
          }}
        >

          {sent ? (

            <div className="form-success">

              <span>
                ✓
              </span>

              <h3>
                We’ve got it.
              </h3>

              <p>
                Thank you. Our Vizag team will be in touch shortly.
              </p>

              <button
                type="button"
                className="text-link"
                onClick={() => setSent(false)}
              >
                Send another enquiry
              </button>

            </div>

          ) : (

            <>

              <div className="form-title">

                <span>
                  START A CONVERSATION
                </span>

                <strong>
                  Tell us about your space.
                </strong>

              </div>

              <label>

                Your name

                <input
                  required
                  name="name"
                  placeholder="How should we call you?"
                />

              </label>

              <label>

                Phone number

                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                />

              </label>

              <label>

                What are you protecting?

                <select
                  name="space"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Select a space
                  </option>

                  <option>
                    Balcony
                  </option>

                  <option>
                    Windows
                  </option>

                  <option>
                    Staircase
                  </option>

                  <option>
                    Pigeon net
                  </option>

                  <option>
                    Cricket net
                  </option>

                  <option>
                    Not sure yet
                  </option>

                </select>

              </label>

              <button
                className="button button-saffron"
                type="submit"
              >
                Request a free quote
                <Arrow />
              </button>

            </>

          )}

        </form>

      </section>

      {/* FLOATING SOCIAL MEDIA BUTTONS */}
      <div
        className="floating-socials"
        aria-label="Social media links"
      >

        <a
          href="https://wa.me/917013378477"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="floating-social"
        >

          <img
            src="/images/home/whatsapp.png"
            alt="WhatsApp"
          />

          <span className="floating-tooltip">
            WhatsApp
          </span>

        </a>

        <a
          href="https://www.instagram.com/prasadorrupula?stkn=aWcyN2U0NTY5Ymc1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          className="floating-social"
        >

          <img
            src="/images/home/insta.png"
            alt="Instagram"
          />

          <span className="floating-tooltip">
            Instagram
          </span>

        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61594490063217&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
          className="floating-social"
        >

          <img
            src="/images/home/facebook.png"
            alt="Facebook"
          />

          <span className="floating-tooltip">
            Facebook
          </span>

        </a>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-shell">

          <div className="footer-intro">

            <div className="footer-brand-block">

              <Link
                className="footer-brand"
                href="#top"
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

              <span className="footer-kicker">
                INVISIBLE PROTECTION · OPEN LIVING
              </span>

              <h2>
                Safety that stays out of sight.
              </h2>

              <p>
                Premium invisible grills, safety nets and smart protection solutions
                designed for homes and spaces across Visakhapatnam.
              </p>

              <a
                className="footer-cta"
                href="#contact"
              >
                Get a free quote
                <Arrow />
              </a>

            </div>

            <div className="footer-contact-card">

              <span className="footer-label">
                TALK TO US
              </span>

              <a
                className="footer-phone"
                href="tel:+917013378477"
              >
                +91 7013378477
              </a>

              <p>
                For a site visit, product details or a quick quote,
                speak with our team.
              </p>

              <a
                className="footer-whatsapp"
                href="https://wa.me/917013378477"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
                <Arrow />
              </a>

            </div>

          </div>

          <div className="footer-nav-grid">

            <div className="footer-nav-column">

              <span className="footer-label">
                EXPLORE
              </span>

              <a href="#solutions">
                Solutions
              </a>

              <a href="#why-us">
                Why us
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

            <div className="footer-nav-column">

              <span className="footer-label">
                SERVICES
              </span>

              <Link href="/invisible-grills">
                Invisible grills
              </Link>

              <Link href="/cricket-nets">
                Cricket nets
              </Link>

              <Link href="/cloth-hangers">
                Cloth hangers
              </Link>

              <a href="#contact">
                Pigeon safety nets
              </a>

            </div>

            <div className="footer-nav-column footer-location">

              <span className="footer-label">
                LOCATION
              </span>

              <strong>
                Visakhapatnam
              </strong>

              <span>
                Andhra Pradesh, India
              </span>

              <span>
                Serving homes across Vizag
              </span>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 Vizag Invisible Grills
            </span>

            <span>
              30-YEAR WARRANTY · VISAKHAPATNAM
            </span>

            <span>
              ALL RIGHTS RESERVED
            </span>

          </div>

        </div>

      </footer>

    </main>
  )
}
