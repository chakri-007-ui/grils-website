import { pages, site, type PagePath } from '@/lib/seo'

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function BusinessData() {
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#business`,
    name: site.name,
    alternateName: 'Vizag Invisible Grills',
    url: site.url,
    logo: `${site.url}/images/prasad-enterprises-logo.png`,
    telephone: site.phone,
    areaServed: { '@type': 'State', name: 'Andhra Pradesh', containedInPlace: { '@type': 'Country', name: 'India' } },
    contactPoint: { '@type': 'ContactPoint', telephone: site.phone, contactType: 'customer service', areaServed: 'IN-AP' },
    sameAs: ['https://www.instagram.com/prasadorrupula/', 'https://www.facebook.com/profile.php?id=61594490063217'],
  }} />
}

export function ServiceData({ path, name }: { path: PagePath; name: string }) {
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${site.url}${path}#service`,
        name,
        description: pages[path].description,
        url: `${site.url}${path}`,
        provider: { '@id': `${site.url}/#business` },
        areaServed: { '@type': 'State', name: 'Andhra Pradesh' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name, item: `${site.url}${path}` },
        ],
      },
    ],
  }} />
}
