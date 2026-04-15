import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BITFLOW — Desarrollo de software y soluciones digitales',
  description:
    'Software a medida, plataformas y consultoría con criterio de ingeniería. BITFLOW: No bullshit software — código mantenible, honesto y pensado para durar.',
  keywords:
    'desarrollo software, consultoría TI, plataformas gestión, integraciones API, nube AWS Google Cloud, blockchain, BITFLOW',
  authors: [{ name: 'BITFLOW' }],
  openGraph: {
    title: 'BITFLOW — Desarrollo de software y soluciones digitales',
    description:
      'Soluciones digitales serias para empresas: producto, nube, integraciones y calidad sin humo.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BITFLOW',
    description: 'No bullshit software — desarrollo y plataformas digitales para empresas.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png',
    shortcut: 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png',
    apple: 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png" />
      </head>
      <body className={`${plusJakarta.className} font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
