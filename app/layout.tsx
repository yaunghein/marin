import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import LenisProvider from './components/lenis-provider'
import StringTuneProvider from './components/string-tune-provider'
import './globals.css'

const satoshi = localFont({
  src: '../public/fonts/satoshi.ttf',
  variable: '--font-satoshi',
  weight: '300 900',
  display: 'swap',
})

const ppRightDidone = localFont({
  src: '../public/fonts/pp-right-didone-light.otf',
  variable: '--font-didone',
  weight: '300',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000')

const siteDescription =
  'A creative strategist and designer with a deep passion for visual storytelling. I approach brand building the way a director approaches a film focusing on narrative, tone, and the emotional journey of the audience.'

const faviconPath = '/images/favicon'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Marin Okada - Brand Designer',
    template: '%s | Marin Okada',
  },
  description: siteDescription,
  icons: {
    icon: [
      {
        url: `${faviconPath}/favicon-96x96.png`,
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: `${faviconPath}/favicon.svg`,
        type: 'image/svg+xml',
      },
    ],
    shortcut: `${faviconPath}/favicon.ico`,
    apple: `${faviconPath}/apple-touch-icon.png`,
  },
  manifest: `${faviconPath}/site.webmanifest`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Marin Okada',
    title:
      'A creative strategist and designer with a deep passion for visual storytelling. I approach brand building the way a director approaches a film focusing on narrative, tone, and the emotional journey of the audience.',
    description: siteDescription,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Hi, I'm Marin Okada — brand designer portfolio",
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hi, I'm Marin Okada",
    description: siteDescription,
    images: ['/images/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#fff8e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${ppRightDidone.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>
          <StringTuneProvider>{children}</StringTuneProvider>
        </LenisProvider>
      </body>
    </html>
  )
}
