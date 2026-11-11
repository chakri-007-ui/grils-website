import Link from 'next/link'
import { AreaEnquiry } from '@/components/area-enquiry'
import { SiteImage } from '@/components/site-image'
import { pageMetadata, site } from '@/lib/seo'

export const metadata = pageMetadata('/service-areas')

export default function ServiceAreasPage() {
  return (
    <main className="coverage-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Prasad Enterprises home">
          <SiteImage className="brand-mark" src="/images/prasad-enterprises-logo.png" alt="Prasad Enterprises" />
          <span><strong>PRASAD</strong><small>ENTERPRISES</small></span>
        </Link>
        <Link className="header-cta" href="/#contact">Request a quote ↗</Link>
      </header>
      <section className="coverage-intro section-pad">
        <nav className="coverage-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Service areas</span></nav>
        <div className="section-kicker">PRASAD ENTERPRISES</div>
        <h1>Installation service areas in Andhra Pradesh</h1>
        <p>Our Visakhapatnam team serves homes and businesses across Andhra Pradesh. Ask about invisible grills, cloth hangers, iron grills, shoe racks and cricket nets in your town.</p>
        <section className="area-location" aria-labelledby="area-location-title">
          <div>
            <h2 id="area-location-title">Check service for your location</h2>
            <p>Choose a service and enter your town or village and PIN code. We’ll confirm availability, visit timing and any travel charges on WhatsApp.</p>
            <a className="text-link" href={site.maps} target="_blank" rel="noopener noreferrer">Open our Visakhapatnam listing on Google Maps ↗</a>
          </div>
          <AreaEnquiry phone={site.phone} />
        </section>
        <div className="coverage-service-grid">
          <article><h2>Invisible grills</h2><p>Discuss stainless-steel cable options for your balcony, windows or staircase. Send opening dimensions and photos so we can recommend a layout and prepare an estimate.</p><Link className="text-link" href="/invisible-grills">View cable systems ↗</Link></article>
          <article><h2>Cloth drying hangers</h2><p>Choose a ceiling-mounted or wall-mounted drying system for a balcony or utility area. Share the available width, ceiling height and mounting surface to discuss a suitable size.</p><Link className="text-link" href="/cloth-hangers">View hanger options and sizes ↗</Link></article>
          <article><h2>Iron grills</h2><p>Send photos and measurements of your window or balcony to discuss a grill design and fitting.</p><Link className="text-link" href="/Iron-grills">View iron grill options ↗</Link></article>
          <article><h2>Shoe racks</h2><p>Share the available width, depth and storage needs to find a rack for your entrance or utility space.</p><Link className="text-link" href="/shoe-racks">Explore shoe racks ↗</Link></article>
          <article><h2>Safety and cricket nets</h2><p>Tell us about the area you want enclosed, its dimensions and intended use. We can discuss netting and fitting requirements before arranging a visit.</p><Link className="text-link" href="/cricket-nets">Explore netting options ↗</Link></article>
        </div>
        <h2>How to arrange service for your PIN code</h2>
        <ol className="coverage-steps">
          <li>Send your town or village, district and six-digit PIN code, along with the service you need.</li>
          <li>Share photos, approximate measurements and any building access requirements.</li>
          <li>Our team will confirm the visit schedule and provide a quotation, including any travel or installation charges, before work begins.</li>
        </ol>
        <p>We serve Andhra Pradesh statewide. PIN codes help us plan visits; please contact us to confirm the next available appointment for your address.</p>
        <div className="hero-actions"><a className="button button-saffron" href="https://wa.me/917013378477?text=Hello%20Prasad%20Enterprises%2C%20my%20town%20and%20PIN%20code%20are%3A%20">Send your location ↗</a><a className="text-link" href={`tel:${site.phone}`}>Call +91 70133 78477 ↗</a></div>
        <div className="coverage-faq">
          <h2>Service questions</h2>
          <details><summary>Do you serve areas outside Visakhapatnam?</summary><p>Yes. Prasad Enterprises provides installation across Andhra Pradesh. Send your address and PIN code so we can confirm scheduling and a quotation.</p></details>
          <details><summary>Can I get a price before a site visit?</summary><p>Share the service, approximate dimensions and photos for an initial discussion. Final pricing depends on the measurements, materials, fitting requirements and location.</p></details>
          <details><summary>What should I send for cloth hanger installation?</summary><p>Send your town and PIN code, a photo of the drying area, its approximate dimensions, and whether you prefer a ceiling or wall mount.</p></details>
        </div>
      </section>
      <footer className="details-footer"><Link href="/">Prasad Enterprises</Link><span>Visakhapatnam · Serving Andhra Pradesh</span><a href={`tel:${site.phone}`}>+91 70133 78477</a></footer>
    </main>
  )
}
