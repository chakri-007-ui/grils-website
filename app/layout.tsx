import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { pageMetadata, site } from '@/lib/seo'
import { BusinessData } from '@/components/structured-data'

export const metadata: Metadata = {
  ...pageMetadata('/'),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f6f2',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        <BusinessData />
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18451411286"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18451411286');
          `}
        </Script>
      </body>
    </html>
  )
}
