import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cricket Nets | Vizag Invisible Grills',
  description: 'Professional cricket net installations for homes, schools and sports spaces in Visakhapatnam.',
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

const benefits = [
  ['01', 'Play without limits', 'A dependable, neatly tensioned net keeps every session focused and the ball where it belongs.'],
  ['02', 'Built for busy spaces', 'Designed for terraces, academies, schools and backyard practice areas across Vizag.'],
  ['03', 'Measured to fit', 'We plan the posts, cable lines and mesh around the exact shape and rhythm of your space.'],
]

const netTypes = [
  { number: '01', name: 'Balcony Safety Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/01_Balcony_Safety_Nets (1).png' },
  { number: '02', name: 'Duct Area Safety Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/02_Duct_Area_Safety_Nets (1).png' },
  { number: '03', name: 'Children Safety Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/03_Children_Safety_Nets (1).png' },
  { number: '04', name: 'House Covering Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/04_House_Covering_Nets (1).png' },
  { number: '05', name: 'Pigeon Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/05_Pigeon_Nets (1).png' },
  { number: '06', name: 'Cricket Box Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/06_Cricket_Box_Nets (1).png' },
  { number: '07', name: 'Cricket Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/07_Cricket_Nets (1).png' },
  { number: '08', name: 'Shed Nets', text: '1.5 mm', image: '/images/cricket-net-catalog/08_Shed_Nets (1).png' },
  { number: '09', name: 'Mosquito Nets', text: '1.5 mm', image: '/images/cricket-net-catalog/09_Mosquito_Nets (1).png' },
  { number: '10', name: 'Pickleball Nets', text: '2.5 mm | 2 mm | 1.5 mm', image: '/images/cricket-net-catalog/10_Pickleball_Nets (1).png' },
]

const materialTypes = [
  { title: 'Tuff Nets', copy: 'Heavy-duty braided mesh built for extra strength and long-term use.', image: '/images/net-materials/11_Tuff_Nets (1).png' },
  { title: 'Garver Nets', copy: 'Dependable green mesh for practical, high-visibility coverage.', image: '/images/cricket-net-catalog/12_Ganna_Nets.png' },
  { title: 'Nylon Nets', copy: 'Smooth, strong and flexible for regular everyday usage.', image: '/images/net-materials/13_Nylon_Nets (1).png' },
  { title: 'Transparent Nets', copy: 'Low-visibility material ideal when clarity and openness matter.', image: '/images/net-materials/14_Transparent_Nets (1).png' },
  { title: 'Local Nets', copy: 'Reliable local-grade mesh made for solid, cost-effective coverage.', image: '/images/net-materials/15_Local_Nets (1).png' },
]

export default function CricketNetsPage() {
  return (
    <main className="cricket-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Vizag Invisible Grills home"><img className="brand-mark" src="/images/prasad-enterprises-logo.png" alt="Vizag Invisible Grills" /><span><strong>VIZAG</strong><small>INVISIBLE GRILLS</small></span></Link>
        <Link className="header-cta" href="/#contact">Get a free quote <Arrow /></Link>
      </header>

      <section className="cricket-hero scroll-reveal">
        <div className="cricket-hero-overlay" />
        <div className="cricket-hero-content">
          <div className="eyebrow light"><span /> CRICKET NETS · VIZAG</div>
          <h1>Make room for<br /><em>the next shot.</em></h1>
          <p>Professional cricket nets that turn open terraces, school grounds and training spaces into safer, sharper places to play.</p>
          <div className="hero-actions"><Link className="button button-saffron" href="/#contact">Plan your net <Arrow /></Link><Link className="text-link light-link" href="/">Back to home <Arrow /></Link></div>
        </div>
        <div className="image-caption"><span>Cricket net installations</span><span>Built around your game</span></div>
      </section>

      <section className="cricket-intro section-pad scroll-reveal">
        <div className="section-kicker">THE PLAYING SPACE</div>
        <div className="cricket-intro-grid"><h2>More practice.<br /><em>Less compromise.</em></h2><p className="lead">A well-fitted cricket net gives every player more confidence to train, while keeping nearby walls, windows and walkways protected. We create clean, practical enclosures that feel considered from every angle.</p></div>
      </section>

      <section className="cricket-benefits section-pad scroll-reveal">
        <div className="section-heading"><div><div className="section-kicker">WHY VIZAG NETS</div><h2>Strong in play.<br /><em>Quiet in the background.</em></h2></div><p>Thoughtful planning and durable materials for cricket spaces that get used.</p></div>
        <div className="cricket-benefit-grid">{benefits.map(([number, title, copy]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
      </section>

      <section className="cricket-types section-pad scroll-reveal">
        <div className="section-kicker">TEN NET TYPES</div>
        <div className="cricket-types-header">
          <h2>Choose the net that fits your routine.</h2>
          <p>From compact residential practice areas to full-size training bays, each solution is planned around your available area and how you play.</p>
        </div>
        <div className="cricket-type-grid">
          {netTypes.map((item) => (
            <article key={item.number} className="cricket-type-card scroll-reveal">
              <img src={item.image} alt={item.name} />
              <div className="cricket-type-copy">
                <span>{item.number}</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cricket-materials section-pad scroll-reveal">
        <div className="section-kicker">MATERIAL OPTIONS</div>
        <div className="cricket-materials-header">
          <h2>Five materials. One right fit.</h2>
        </div>
        <div className="cricket-material-grid">
          {materialTypes.map((item) => (
            <article key={item.title} className="cricket-material-card scroll-reveal">
              <img src={item.image} alt={item.title} />
              <div className="cricket-material-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="details-cta section-pad scroll-reveal"><div><div className="section-kicker light">READY FOR YOUR NEXT SESSION</div><h2>Let’s build<br /><em>your crease.</em></h2><p>Share the dimensions and intended use of your space. We will recommend the right netting and installation approach.</p><Link className="button button-saffron" href="/#contact">Get a free quote <Arrow /></Link></div><Link className="text-link light-link" href="/">Return to Vizag Invisible Grills <Arrow /></Link></section>
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
