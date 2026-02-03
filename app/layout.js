import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-cormorant' })

export const metadata = {
  title: 'Harsimar Singh Toor - Model Portfolio',
  description: 'Professional modeling portfolio of Harsimar Singh Toor (Simar)',
}

export default function RootLayout({ children }) {
  return (
    <html lang= "en" className = {`${inter.variable} ${cormorant.variable}`
}>
  <body className="antialiased" > { children } </body>
    </html>
  )
}
