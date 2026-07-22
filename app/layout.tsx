import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Syne } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BITFLOW — Software y plataformas digitales sin humo',
  description:
    'Desarrollo a medida, plataformas y consultoría al grano. BITFLOW: No bullshit software — código que se mantiene, alcance honesto y hecho para producción.',
  keywords:
    'desarrollo software, consultoría TI, plataformas gestión, integraciones API, nube AWS Google Cloud, blockchain, BITFLOW, LatAm',
  authors: [{ name: 'BITFLOW' }],
  openGraph: {
    title: 'BITFLOW — Software y plataformas digitales sin humo',
    description:
      'Producto digital serio para empresas: software, nube e integraciones — sin vueltas ni humo.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BITFLOW',
    description: 'No bullshit software — desarrollo y plataformas digitales para equipos en LatAm.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'images/company-logos-bitflow/logo-no_text-2.png',
    shortcut: 'images/company-logos-bitflow/logo-no_text-2.png',
    apple: 'images/company-logos-bitflow/logo-no_text-2.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png" />
      </head>
      <body className={`${plusJakarta.className} font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
