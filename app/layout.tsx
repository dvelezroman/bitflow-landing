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
  title: 'BITFLOW — Software, consultoría y seguridad integrada',
  description:
    'Desarrollo de software, consultoría en soluciones digitales, plataformas de gestión e instalaciones de seguridad y domótica. BITFLOW acompaña a empresas y hogares.',
  keywords:
    'desarrollo software, consultoría TI, plataformas gestión, domótica, alarmas, cámaras, cercos eléctricos, BITFLOW',
  authors: [{ name: 'BITFLOW' }],
  openGraph: {
    title: 'BITFLOW — Software, consultoría y seguridad integrada',
    description:
      'Soluciones tecnológicas, desarrollo a medida y sistemas de seguridad para negocio y hogar.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BITFLOW',
    description: 'Software, consultoría y seguridad integrada.',
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
      <body className={`${plusJakarta.className} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
