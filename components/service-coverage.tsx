import Link from 'next/link'
import { businessAddress, directionsUrl, site } from '@/lib/seo'

export function ServiceCoverage() {
  return (
    <section className="service-coverage section-pad" aria-labelledby="service-coverage-title">
      <div>
        <div className="section-kicker">PRASAD ENTERPRISES · ANDHRA PRADESH</div>
        <h2 id="service-coverage-title">Installation across Andhra Pradesh</h2>
        <p>Based in Visakhapatnam (Vizag), Prasad Enterprises installs invisible grills, ceiling and wall-mounted cloth hangers, and safety nets across Andhra Pradesh.</p>
        <p><strong>Our location:</strong> {businessAddress}.</p>
        <p>Share your town, six-digit PIN code, measurements and photos of the space. Our team will confirm a site visit, installation schedule and quotation for your location.</p>
      </div>
      <div className="coverage-links">
        <Link href="/invisible-grills">Explore invisible grills ↗</Link>
        <Link href="/cloth-hangers">Explore cloth drying hangers ↗</Link>
        <Link href="/balcony-safety-nets">Explore balcony safety nets ↗</Link>
        <Link href="/pigeon-safety-nets">Explore pigeon safety nets ↗</Link>
        <Link href="/service-areas">Check your town and PIN code ↗</Link>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer">Directions to NTR Statue ↗</a>
        <a href={`tel:${site.phone}`}>Call +91 70133 78477 ↗</a>
        <a href={site.maps} target="_blank" rel="noopener noreferrer">View our Google Maps listing ↗</a>
        <a href="https://wa.me/917013378477?text=Hello%20Prasad%20Enterprises%2C%20I%20would%20like%20installation%20in%20Andhra%20Pradesh.%20My%20town%20and%20PIN%20code%20are%3A%20">Send your location on WhatsApp ↗</a>
      </div>
    </section>
  )
}
