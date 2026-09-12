import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloth Hangers | Vizag Invisible Grills',
  description: 'Smart and space-saving cloth hanger solutions for homes, apartments and service spaces in Visakhapatnam.',
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

const benefits = [
  ['01', 'Space-efficient storage', 'Neatly organised hangers keep clothing accessible without crowding your room or utility area.'],
  ['02', 'Built for daily use', 'Designed for homes, wardrobes, balconies and compact service spaces that need practical storage.'],
  ['03', 'Clean installation', 'Our layout approach keeps the installation tidy, durable and easy to maintain in daily use.'],
]

const mountOptions = [
  {
    title: 'Wall Mount',
    copy: 'A clean, space-smart wall-mounted cloth hanger system built for balconies, utility rooms and compact drying corners.',
    sizes: ['3 ft', '5 ft', '6 ft', '7 ft', '8 ft', '9 ft', '10 ft'],
    image: '/images/cloth-hangers/wall-mount.png',
    alt: 'Wall mount cloth hanger system',
  },
  {
    title: 'Ceiling Mount',
    copy: 'An elevated ceiling-mounted drying layout that keeps garments organised while preserving open floor and wall space.',
    sizes: ['3 ft', '4 ft', '5 ft', '6 ft', '7 ft', '8 ft', '9 ft', '10 ft'],
    image: '/images/cloth-hangers/ceiling-mount.png',
    alt: 'Ceiling mount cloth hanger system',
  },
]

export default function ClothHangersPage() {
  return (
    <main className="cloth-hangers-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Vizag Invisible Grills home"><img className="brand-mark" src="/images/prasad-enterprises-logo.png" alt="Vizag Invisible Grills" /><span><strong>VIZAG</strong><small>INVISIBLE GRILLS</small></span></Link>
        <Link className="header-cta" href="/#contact">Get a free quote <Arrow /></Link>
      </header>

      <section className="cloth-hero scroll-reveal">
        <div className="cloth-hero-overlay" />
        <div className="cloth-hero-content">
          <div className="eyebrow light"><span /> CLOTH HANGERS · VIZAG</div>
          <h1>Smart storage for<br /><em>everyday living.</em></h1>
          <p>Clean, durable cloth hanger systems that bring order to balconies, wardrobes and service spaces without cluttering the room.</p>
          <div className="hero-actions"><Link className="button button-saffron" href="/#contact">Plan your storage <Arrow /></Link><Link className="text-link light-link" href="/">Back to home <Arrow /></Link></div>
        </div>
        <div className="image-caption"><span>Cloth hanger systems</span><span>Organised by design</span></div>
      </section>


      <section className="cloth-benefits section-pad scroll-reveal">
        <div className="section-heading"><div><div className="section-kicker">WHY VIZAG HANGERS</div><h2>Built for real homes.<br /><em>Made to last.</em></h2></div><p>Functional storage with a considered finish for homes and service spaces.</p></div>
        <div className="cloth-benefit-grid">{benefits.map(([number, title, copy]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
      </section>

      <section className="cloth-installation section-pad scroll-reveal">
        {mountOptions.map((option) => (
          <article key={option.title} className="cloth-install-item scroll-reveal">
            <div className="cloth-install-media">
              <img src={option.image} alt={option.alt} />
            </div>
            <div className="cloth-install-copy">
              <div className="section-kicker">{option.title.toUpperCase()} · SIZES</div>
              <h2>{option.title}</h2>
              <p>{option.copy}</p>
              <ul className="cloth-size-list">
                {option.sizes.map((size) => (
                  <li key={`${option.title}-${size}`}>{size}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      

      <section className="details-cta section-pad scroll-reveal"><div><div className="section-kicker light">READY TO ORGANISE</div><h2>Let’s design<br /><em>your storage.</em></h2><p>Tell us where you want the system installed and we will recommend the most practical and durable hanger layout.</p><Link className="button button-saffron" href="/#contact">Get a free quote <Arrow /></Link></div><Link className="text-link light-link" href="/">Return to Vizag Invisible Grills <Arrow /></Link></section>
      <div className="site-copyright-bar">© 2026 Vizag Invisible Grills · All rights reserved. Images, designs and website content may not be reproduced without permission.</div>
    
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

</main>
  )
}
