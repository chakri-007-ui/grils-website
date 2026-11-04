import Link from 'next/link'

const guides = {
  grills: {
    title: 'Plan your invisible grill installation in Visakhapatnam',
    introduction: 'Prasad Enterprises, also known as Vizag Invisible Grills, installs cable grill systems for balconies, windows and staircases. Start with the opening you need covered: its dimensions, how it is used and where the cables can be fixed. These details help us discuss a suitable installation rather than quote from floor area alone.',
    sections: [
      ['Balcony, window or staircase?', 'A balcony usually needs coverage across an open span, while a window may need a layout that preserves access to the shutters. Staircases have changing heights and fixing positions. Send a full photograph of the opening as well as close-up photographs of the proposed fixing surfaces. Tell us about doors, handles, AC units and other items that must remain accessible.'],
      ['Compare cable options before deciding', 'Our range includes 2 mm, 2.5 mm and 3 mm cable systems. Discuss the material, coating, spacing, opening size and fixing arrangement together. Thickness alone does not establish suitability. Ask the installer to explain the proposed specification and the reason for choosing it for your opening.'],
      ['What affects the installation price?', 'A quotation depends on the measured area, cable specification, fixing surfaces, access and installation location. Share the approximate width and height of each separate opening for an initial discussion. Confirm the final measurements, included fittings, installation charges and written warranty terms before work starts.'],
      ['Installation and ongoing access', 'Let us know about apartment association permissions, permitted work hours and access arrangements before a visit. Discuss any required access to the outside of windows or the balcony before finalising the layout. Ask for guidance on cleaning, checking cable tension and reporting a loose fitting after installation.'],
    ],
    faqs: [
      ['Can you install invisible grills near my home?', 'We are based in Visakhapatnam and provide installation across Andhra Pradesh. Send your town, district and PIN code so our team can confirm travel arrangements, visit availability and an estimate for your address.'],
      ['What should I send to get an estimate?', 'Send photographs plus the approximate width and height of each balcony, window or staircase opening. Include your location and any restrictions on building access. Final pricing follows confirmation of the site requirements.'],
      ['Should I choose invisible grills or a safety net?', 'They are different systems with different materials, visibility and fixing requirements. Tell us what you want the barrier to do, who uses the space and how you need to access it. We can discuss both options for your opening.'],
    ],
    related: ['/balcony-safety-nets', 'Compare balcony safety nets'],
  },
  hangers: {
    title: 'Choose a cloth drying hanger for your balcony or utility room',
    introduction: 'Prasad Enterprises installs ceiling-mounted and wall-mounted cloth drying hangers in Visakhapatnam and across Andhra Pradesh. The right choice depends on the available mounting surface, clear drying space and how you reach the hanger in daily use. Compare both layouts before choosing the size.',
    sections: [
      ['Ceiling-mounted cloth hangers', 'A ceiling-mounted layout uses overhead space and leaves more of the floor clear. Check the ceiling height and discuss how you will reach or operate the system. Send photographs showing ceiling beams, fans, lights and doors so the proposed drying position can be reviewed before installation.'],
      ['Wall-mounted cloth hangers', 'A wall-mounted layout can suit a balcony or utility corner with an appropriate fixing surface. Measure the available wall width and the clear space in front of it. Include doors, windows, taps and other fixtures in your photographs so the hanger does not interfere with everyday access.'],
      ['Measure the usable space', 'Measure the width, depth and height of the drying area, rather than just the room dimensions. The wall-mounted sizes shown above range from 3 ft to 10 ft, and the ceiling-mounted sizes range from 3 ft to 10 ft with different available options. Confirm the specific size and mechanism with our team before ordering.'],
      ['Get a clear installation quote', 'The chosen size, mounting surface, fitting requirements and location affect the quotation. Ask which fittings, installation work and any travel charges are included. If you have an existing hanger, tell us whether it will stay or needs to be discussed as part of the work.'],
    ],
    faqs: [
      ['Do you install ceiling cloth hangers near me?', 'We provide installation in Visakhapatnam and across Andhra Pradesh. Share your town, district and PIN code so we can confirm scheduling and the quotation for your location.'],
      ['Which is better: a ceiling or wall mount?', 'Neither layout suits every home. A ceiling mount uses overhead space, while a wall mount needs suitable wall space and clearance. Photos and measurements help us discuss which arrangement fits your drying area and daily routine.'],
      ['Can I get a quote from photographs?', 'Photographs and approximate measurements help with an initial discussion. Send the mounting surface, drying area, nearby fixtures and your location. Our team will confirm whether a measurement visit is needed before final pricing.'],
    ],
    related: ['/invisible-grills', 'Explore invisible grills for your balcony'],
  },
} as const

export function InstallationGuide({ kind }: { kind: keyof typeof guides }) {
  const guide = guides[kind]
  return (
    <section className="installation-guide section-pad">
      <nav className="coverage-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">{kind === 'grills' ? 'Invisible grills' : 'Cloth hangers'}</span></nav>
      <div className="section-kicker">MEASUREMENTS · OPTIONS · QUOTATION</div>
      <h2>{guide.title}</h2>
      <p className="guide-intro">{guide.introduction}</p>
      <div className="installation-guide-grid">{guide.sections.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <h2>Common installation questions</h2>
      <div className="coverage-faq">{guide.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <div className="hero-actions"><Link className="button button-saffron" href="/#contact">Request a measurement and quote ↗</Link><Link className="text-link" href={guide.related[0]}>{guide.related[1]} ↗</Link></div>
    </section>
  )
}
