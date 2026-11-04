import type { Metadata } from 'next'

export const site = {
  name: 'Prasad Enterprises',
  url: 'https://www.invisiblegrillsinvishakhapatnam.com',
  phone: '+917013378477',
}

export const pages = {
  '/': {
    title: 'Invisible Grills & Cloth Hangers in Andhra Pradesh',
    description: 'Prasad Enterprises installs invisible grills, ceiling cloth hangers and safety nets in Visakhapatnam and across Andhra Pradesh. Call for a site visit and quote.',
  },
  '/invisible-grills': {
    title: 'Invisible Grills in Visakhapatnam & Andhra Pradesh',
    description: 'Explore stainless-steel invisible grills for balconies, windows and staircases. Prasad Enterprises provides installation across Andhra Pradesh. Request a quote.',
  },
  '/cloth-hangers': {
    title: 'Ceiling & Wall Cloth Hangers in Andhra Pradesh',
    description: 'Ceiling-mounted and wall-mounted cloth drying hangers for balconies and utility rooms. Prasad Enterprises provides installation across Andhra Pradesh. Get a quote.',
  },
  '/cricket-nets': {
    title: 'Cricket Nets Installation in Andhra Pradesh',
    description: 'Cricket practice nets and enclosures for homes, schools and sports spaces. Contact Prasad Enterprises for installation in Visakhapatnam and across Andhra Pradesh.',
  },
  '/Iron-grills': {
    title: 'Iron Grills in Visakhapatnam & Andhra Pradesh',
    description: 'Explore iron grills for windows, balconies and homes. Contact Prasad Enterprises for measurements and installation across Andhra Pradesh.',
  },
  '/shields': {
    title: 'Rain Protection Shields in Andhra Pradesh',
    description: 'Rain protection shields for balconies, parking areas and outdoor spaces. Ask Prasad Enterprises about measurements and installation across Andhra Pradesh.',
  },
  '/shoe-racks': {
    title: 'Shoe Racks in Visakhapatnam & Andhra Pradesh',
    description: 'Explore shoe rack solutions for home entryways and compact spaces. Contact Prasad Enterprises for sizing and service across Andhra Pradesh.',
  },
  '/service-areas': {
    title: 'Andhra Pradesh Installation Service Areas',
    description: 'Prasad Enterprises serves Andhra Pradesh with invisible grills, cloth hangers and safety net installation. Share your town and PIN code to arrange a site visit.',
  },
} as const

export type PagePath = keyof typeof pages

export function pageMetadata(path: PagePath): Metadata {
  const { title, description } = pages[path]
  const fullTitle = `${title} | ${site.name}`
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: `${site.url}${path === '/' ? '/' : path}` },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: site.name,
      title: fullTitle,
      description,
      url: `${site.url}${path === '/' ? '/' : path}`,
      images: [{ url: `${site.url}/images/home/hero-invisible-grill.jpg`, alt: 'Invisible grills by Prasad Enterprises' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${site.url}/images/home/hero-invisible-grill.jpg`],
    },
  }
}
