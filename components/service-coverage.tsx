import Link from 'next/link'

export function ServiceCoverage() {
  return (
    <section className="service-coverage section-pad" aria-labelledby="service-coverage-title">
      <div>
        <div className="section-kicker">PRASAD ENTERPRISES · ANDHRA PRADESH</div>
        <h2 id="service-coverage-title">Installation across Andhra Pradesh</h2>
        <p>Based in Visakhapatnam (Vizag), Prasad Enterprises installs invisible grills, ceiling and wall-mounted cloth hangers, and safety nets across Andhra Pradesh.</p>
        <p>Share your town, six-digit PIN code, measurements and photos of the space. Our team will confirm a site visit, installation schedule and quotation for your location.</p>
      </div>
      <div className="coverage-links">
        <Link href="/invisible-grills">Explore invisible grills ↗</Link>
        <Link href="/cloth-hangers">Explore cloth drying hangers ↗</Link>
        <Link href="/service-areas">Check service coverage ↗</Link>
        <a href="https://maps.app.goo.gl/AANEyzxQZG1mXv27A" target="_blank" rel="noopener noreferrer">Find Prasad Enterprises on Google Maps ↗</a>
        <a href="https://wa.me/917013378477?text=Hello%20Prasad%20Enterprises%2C%20I%20would%20like%20installation%20in%20Andhra%20Pradesh.%20My%20town%20and%20PIN%20code%20are%3A%20">Send your location on WhatsApp ↗</a>
      </div>
    </section>
  )
}
