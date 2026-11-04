import Link from 'next/link'
import { pageMetadata, site } from '@/lib/seo'
import { SiteImage } from '@/components/site-image'
import { ServiceCoverage } from '@/components/service-coverage'
import { ServiceData } from '@/components/structured-data'

const services = {
  balcony: {
    path: '/balcony-safety-nets',
    name: 'Balcony safety net installation',
    heading: 'Balcony safety nets in Visakhapatnam',
    image: '/images/cricket-net-catalog/01_Balcony_Safety_Nets.png',
    introduction: 'Prasad Enterprises installs balcony safety nets in Visakhapatnam and across Andhra Pradesh. Discuss your balcony layout, the purpose of the net and the fixing surfaces with our team before arranging a measurement visit.',
    sections: [
      ['Plan around your balcony', 'Send a photograph showing the full open area, including the balcony edges and overhead surfaces. Explain how the balcony is used and what you want the net to do. Note doors, windows, plants, AC equipment and any areas that must remain accessible. This helps us discuss the layout before a site visit.'],
      ['Discuss material and fixing requirements', 'Ask which net material and mesh size are proposed, how the edges will be fixed and what access is needed during installation. The intended use and site conditions should guide the recommendation. Do not assume that every net is suitable for every purpose or that a net removes the need for supervision.'],
      ['Measurements and quotation', 'Share the approximate width and height of each opening, your town and PIN code. Price depends on the measured area, selected netting, fixing requirements, access and installation location. Confirm what is included in the written quotation and ask about maintenance and any applicable warranty terms.'],
      ['Invisible grills or a net?', 'Invisible grills use tensioned cables; a net uses a mesh enclosure. Compare the appearance, fixing requirements, access and intended use for your particular opening. We offer both services and can discuss the differences when you send photos and measurements.'],
    ],
    faqs: [
      ['Can you visit my apartment?', 'Send your location, photographs and any apartment association or work-hour restrictions. Our team will confirm measurement visit availability and the access arrangements needed for your building.'],
      ['Can you cover more than one opening?', 'Send a separate photograph and approximate dimensions for each opening. Each area may need a different layout or fixing arrangement, so the quotation should identify the areas included.'],
      ['How do I maintain the installed net?', 'Ask for care instructions for the selected material and fittings at installation. Report damage, loose edges or changes to the fixing surfaces promptly so the installation can be assessed.'],
    ],
  },
  pigeon: {
    path: '/pigeon-safety-nets',
    name: 'Pigeon safety net installation',
    heading: 'Pigeon safety nets in Visakhapatnam',
    image: '/images/cricket-net-catalog/05_Pigeon_Nets.png',
    introduction: 'Prasad Enterprises provides pigeon net installation for balconies, utility areas and open shafts in Visakhapatnam and across Andhra Pradesh. A planned mesh enclosure can help restrict bird entry while keeping the space usable.',
    sections: [
      ['Identify where birds enter', 'Photograph the full space and the gaps that birds use. Include the top, sides and edges of the balcony or utility area, rather than just the floor. Tell us about AC units, pipes, windows and doors so the installation can account for the equipment you need to reach.'],
      ['Plan the enclosure and access', 'Discuss how the perimeter will be closed and which areas must remain accessible for cleaning or maintenance. A large opening, narrow shaft and compact balcony can require different fixing arrangements. Confirm the mesh, material and installation details with the team before work starts.'],
      ['Prepare for the visit', 'Tell us whether birds are currently inside the space or whether you have noticed a nest. Keep the team informed before installation so the next steps can be discussed. Share your building access rules, permitted work hours and any restrictions from the apartment association.'],
      ['Understand the quotation', 'The covered area, material, perimeter fixing, access and location affect the estimate. Send approximate measurements, photographs, your town and PIN code. Ask whether the quotation includes all fixing points and travel charges, and request the care instructions for the installed net.'],
    ],
    faqs: [
      ['Do you install pigeon nets near me?', 'We are based in Visakhapatnam and serve Andhra Pradesh. Send your town, district, PIN code and a photo of the area so we can confirm a visit schedule and discuss a quotation.'],
      ['Can a pigeon net also be used as a child safety net?', 'Do not assume that bird exclusion netting is suitable for another purpose. Explain each intended use to the installer so the material, fixing and layout can be discussed for your site.'],
      ['Can the installation leave access to my AC unit?', 'Tell us where access is required and send photographs before the visit. The team can discuss the arrangement and include the agreed access requirements in the installation plan.'],
    ],
  },
} as const

export function netMetadata(kind: keyof typeof services) { return pageMetadata(services[kind].path) }

export function NetServicePage({ kind }: { kind: keyof typeof services }) {
  const service = services[kind]
  return <main className="coverage-page">
    <ServiceData path={service.path} name={service.name} />
    <header className="site-header"><Link className="brand" href="/"><SiteImage className="brand-mark" src="/images/prasad-enterprises-logo.png" alt="Prasad Enterprises" /><span><strong>VIZAG</strong><small>INVISIBLE GRILLS</small></span></Link><Link className="header-cta" href="/#contact">Request a quote ↗</Link></header>
    <section className="coverage-intro section-pad">
      <nav className="coverage-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">{service.name}</span></nav>
      <div className="section-kicker">PRASAD ENTERPRISES · VIZAG INVISIBLE GRILLS</div>
      <h1>{service.heading}</h1><p>{service.introduction}</p>
      <div className="net-guide-hero"><SiteImage src={service.image} alt={`${service.name} product reference`} loading="eager" fetchPriority="high" sizes="(max-width: 760px) 100vw, 70vw" /></div>
      <div className="installation-guide-grid">{service.sections.map(([heading, text]) => <article key={heading}><h2>{heading}</h2><p>{text}</p></article>)}</div>
      <h2>Questions about {kind === 'balcony' ? 'balcony safety nets' : 'pigeon nets'}</h2>
      <div className="coverage-faq">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <div className="hero-actions"><Link className="button button-saffron" href="/#contact">Request a site measurement ↗</Link><a className="text-link" href={`tel:${site.phone}`}>Call +91 70133 78477 ↗</a></div>
      <nav className="net-related" aria-label="Related services"><Link href="/invisible-grills">Invisible grills ↗</Link><Link href="/cloth-hangers">Cloth drying hangers ↗</Link><Link href={kind === 'balcony' ? '/pigeon-safety-nets' : '/balcony-safety-nets'}>{kind === 'balcony' ? 'Pigeon safety nets' : 'Balcony safety nets'} ↗</Link></nav>
    </section>
    <ServiceCoverage />
    <footer className="details-footer"><Link href="/">Prasad Enterprises</Link><span>Visakhapatnam · Serving Andhra Pradesh</span><a href={`tel:${site.phone}`}>+91 70133 78477</a></footer>
  </main>
}
