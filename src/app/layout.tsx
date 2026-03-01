import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Adam Troxell — Full-Stack Engineer',
    template: '%s | Adam Troxell',
  },
  description:
    'Full-stack engineer and hands-on former CTO. I build production systems across web, data, and IoT.',
  metadataBase: new URL('https://troxellendeavors.com'),
  openGraph: {
    type: 'website',
    url: 'https://troxellendeavors.com',
    siteName: 'Adam Troxell',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
