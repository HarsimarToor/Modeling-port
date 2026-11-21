import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Used so link previews (iMessage, WhatsApp, etc.) can show the cover photo.
// Set NEXT_PUBLIC_SITE_URL to your real domain once you have one.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Harsimar Singh Toor - Model Portfolio',
  description: 'Professional modeling portfolio of Harsimar Singh Toor (Simar)',
  openGraph: {
    title: 'Harsimar Singh Toor - Model Portfolio',
    description: 'Runway, editorial and commercial modeling. Based in Davao, available worldwide.',
    images: [{ url: '/images/hero.jpg', width: 2400, height: 1800 }],
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
