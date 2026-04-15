'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { SITE } from '@/lib/site'

const navLinkClass =
  'rounded-lg px-2 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-100/80 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'

export function LandingHeader() {
  const { t, language, setLanguage } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const LangBtn = ({ lang, label }: { lang: 'es' | 'en'; label: string }) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      className={`min-h-[40px] min-w-[44px] rounded-lg px-3 text-xs font-semibold transition ${
        language === lang ? 'bg-stone-900 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
      }`}
      aria-pressed={language === lang}
    >
      {label}
    </button>
  )

  const mobileLinks: [string, string][] = [
    ['#servicios', t('nav.services')],
    ['#historia', t('nav.story')],
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/60 bg-white/80 pt-[env(safe-area-inset-top,0px)] shadow-sm shadow-stone-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex min-h-[3.25rem] max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:min-h-16 sm:gap-4 sm:px-6 sm:py-0">
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
          <a href="#historia" className={navLinkClass}>
            {t('nav.story')}
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
          <div className="flex shrink-0 overflow-hidden rounded-xl border border-stone-200/90 bg-stone-50/80 p-0.5 shadow-sm" role="group" aria-label="Idioma">
            <LangBtn lang="es" label="ES" />
            <LangBtn lang="en" label="EN" />
          </div>
          <a
            href="#contacto"
            className="hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gradient-to-br from-stone-900 to-stone-800 px-4 text-sm font-medium text-white shadow-soft transition hover:from-stone-800 hover:to-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 md:inline-flex"
          >
            {t('nav.cta')}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200/90 bg-white text-stone-800 shadow-sm transition active:scale-[0.98] xl:hidden"
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
        <div
          id="mobile-menu"
          className="border-t border-stone-200/80 bg-white/95 px-4 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 xl:hidden"
        >
          <nav
            className="flex max-h-[min(70dvh,calc(100dvh-5rem))] flex-col gap-0.5 overflow-y-auto overscroll-y-contain pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            aria-label="Móvil"
          >
            {mobileLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-3 py-3.5 text-base font-medium text-stone-800 active:bg-stone-100 hover:bg-stone-50"
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-br from-stone-900 to-stone-800 px-4 text-center text-sm font-medium text-white shadow-soft"
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
