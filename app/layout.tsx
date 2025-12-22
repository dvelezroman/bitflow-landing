import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BITFLOW - Notificaciones Instantáneas para tu Negocio',
  description: 'BITFLOW es la plataforma líder en notificaciones por mensajería instantánea. Envía alertas, eventos y propaganda a tus clientes de forma rápida y eficiente. Mejora tu comunicación empresarial con nuestra solución innovadora.',
  keywords: 'notificaciones instantáneas, mensajería empresarial, alertas SMS, notificaciones push, marketing por mensajería, comunicación empresarial, BITFLOW',
  authors: [{ name: 'BITFLOW' }],
  openGraph: {
    title: 'BITFLOW - Notificaciones Instantáneas para tu Negocio',
    description: 'Plataforma líder en notificaciones por mensajería instantánea para empresas',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BITFLOW - Notificaciones Instantáneas',
    description: 'Plataforma líder en notificaciones por mensajería instantánea',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png',
    shortcut: 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png',
    apple: 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

