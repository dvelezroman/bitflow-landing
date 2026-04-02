'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { SITE } from '@/lib/site'

const navLinkClass =
  'text-sm font-medium text-stone-600 transition hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded px-1'

export function LandingHeader() {
  const { t, language, setLanguage } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const LangBtn = ({ lang, label }: { lang: 'es' | 'en'; label: string }) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
        language === lang ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-800'
      }`}
      aria-pressed={language === lang}
    >
      {label}
    </button>
  )

  const mobileLinks: [string, string][] = [
    ['#servicios', t('nav.services')],
    ['#marcas-alianzas', t('nav.partners')],
    ['#experiencia', t('nav.showcase')],
    ['#casos', t('nav.cases')],
    ['#casos-exitosos', t('nav.successStories')],
    ['#testimonios', t('nav.testimonials')],
    ['#proceso', t('nav.process')],
    ['#nosotros', t('nav.about')],
    ['#faq', t('nav.faq')],
    ['#contacto', t('nav.contact')],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex shrink-0 items-center gap-2" onClick={closeMenu}>
          <img
            src={SITE.logoUrl}
            alt="BITFLOW"
            className="h-8 w-auto md:h-9"
            width={120}
            height={36}
          />
        </a>

        <nav className="hidden items-center gap-4 text-[0.8125rem] xl:flex xl:gap-5 xl:text-sm" aria-label="Principal">
          <a href="#servicios" className={navLinkClass}>
            {t('nav.services')}
          </a>
          <a href="#marcas-alianzas" className={navLinkClass}>
            {t('nav.partners')}
          </a>
          <a href="#experiencia" className={navLinkClass}>
            {t('nav.showcase')}
          </a>
          <a href="#casos" className={navLinkClass}>
            {t('nav.cases')}
          </a>
          <a href="#casos-exitosos" className={navLinkClass}>
            {t('nav.successStories')}
          </a>
          <a href="#testimonios" className={navLinkClass}>
            {t('nav.testimonials')}
          </a>
          <a href="#proceso" className={navLinkClass}>
            {t('nav.process')}
          </a>
          <a href="#nosotros" className={navLinkClass}>
            {t('nav.about')}
          </a>
          <a href="#faq" className={navLinkClass}>
            {t('nav.faq')}
          </a>
          <a href="#contacto" className={navLinkClass}>
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex rounded-lg border border-stone-200 bg-white p-0.5" role="group" aria-label="Idioma">
            <LangBtn lang="es" label="ES" />
            <LangBtn lang="en" label="EN" />
          </div>
          <a
            href="#contacto"
            className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 xl:inline-flex"
          >
            {t('nav.cta')}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-800 xl:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-stone-200 bg-stone-50 px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {mobileLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-100"
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 rounded-full bg-stone-900 px-4 py-3 text-center text-sm font-medium text-white"
              onClick={closeMenu}
            >
              {t('nav.cta')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
