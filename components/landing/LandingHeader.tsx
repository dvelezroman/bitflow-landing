'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

const navLinkClass =
  'whitespace-nowrap rounded-lg px-1.5 py-2 text-[0.75rem] font-medium text-stone-600 transition hover:bg-stone-100/80 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 2xl:px-2 2xl:text-[0.8125rem]'

/** Stable width across ES/EN; shared by desktop + mobile drawer CTA. */
const navCtaClass =
  'inline-flex min-h-[40px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-gradient-to-b from-stone-800 to-stone-950 px-4 text-[0.75rem] font-semibold leading-none tracking-wide text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_2px_8px_-2px_rgba(15,23,42,0.35)] transition duration-200 hover:border-white/25 hover:from-stone-700 hover:to-stone-950 hover:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_8px_24px_-6px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 active:scale-[0.98] sm:text-[0.8125rem]'

export function LandingHeader() {
  const { t, language, setLanguage } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const ctaLabel = language === 'es' ? 'Consulta' : 'Consult'

  const LangBtn = ({ lang, label }: { lang: 'es' | 'en'; label: string }) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      className={`min-h-[40px] min-w-[44px] rounded-lg px-3 text-xs font-semibold transition ${
        language === lang
          ? 'bg-stone-900 text-white shadow-sm'
          : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
      }`}
      aria-pressed={language === lang}
    >
      {label}
    </button>
  )

  const CtaIcon = () => (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10h8M8 14h5m-8 5 3.5-3.5A7.5 7.5 0 1 1 12 19.5H5Z"
      />
    </svg>
  )

  const mobileLinks: [string, string][] = [
    ['#servicios', t('nav.services')],
    ['#historia', t('nav.story')],
    ['#marcas-alianzas', t('nav.partners')],
    ['#experiencia', t('nav.showcase')],
    ['#casos-exitosos', t('nav.successStories')],
    ['#proyectos-bitflow', t('nav.projects')],
    ['#testimonios', t('nav.testimonials')],
    ['#proceso', t('nav.process')],
    ['#nosotros', t('nav.about')],
    ['#faq', t('nav.faq')],
    ['#contacto', t('nav.contact')],
  ]

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/60 bg-white/80 pt-[env(safe-area-inset-top,0px)] shadow-sm shadow-stone-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex min-h-[3.25rem] max-w-[1400px] items-center justify-between gap-3 px-4 py-2 sm:min-h-16 sm:gap-4 sm:px-6 sm:py-0 2xl:px-8">
          <a href="#" className="flex items-center gap-2 shrink-0" onClick={closeMenu}>
            <Image
              src="/images/company-logos-bitflow/logo-1.png"
              alt="BITFLOW logo"
              width={120}
              height={36}
              priority
              className="w-auto h-8 md:h-9"
            />
          </a>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 text-[0.75rem] xl:flex 2xl:gap-2.5"
            aria-label="Principal"
          >
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
            <a href="#casos-exitosos" className={navLinkClass}>
              {t('nav.successStories')}
            </a>
            <a href="#proyectos-bitflow" className={navLinkClass}>
              {t('nav.projects')}
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

          <div className="flex items-center gap-2 shrink-0 md:gap-3">
            <div
              className="flex shrink-0 overflow-hidden rounded-xl border border-stone-200/90 bg-stone-50/80 p-0.5 shadow-sm"
              role="group"
              aria-label="Idioma"
            >
              <LangBtn lang="es" label="ES" />
              <LangBtn lang="en" label="EN" />
            </div>

            <a href="#contacto" className={`${navCtaClass} hidden md:inline-flex`}>
              <span>{ctaLabel}</span>
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200/90 bg-white text-stone-800 shadow-sm transition active:scale-[0.98] xl:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-sidebar"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-stone-950/45 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar"
        className={`fixed left-0 top-0 z-[70] h-dvh w-[min(86vw,22rem)] border-r border-stone-200/80 bg-white shadow-2xl shadow-stone-950/20 transition-transform duration-300 ease-out xl:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Menú móvil"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b border-stone-200/80">
            <a href="#" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/images/company-logos-bitflow/logo-1.png"
                alt="BITFLOW logo"
                width={116}
                height={34}
                priority
                className="w-auto h-8"
              />
            </a>

            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 transition hover:bg-stone-100 active:scale-[0.98]"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 overflow-y-auto" aria-label="Móvil">
            <div className="mb-3 px-2 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-stone-400">
              Menu
            </div>

            <div className="flex flex-col gap-1">
              {mobileLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 hover:text-stone-950 active:scale-[0.99]"
                  onClick={closeMenu}
                >
                  <span>{label}</span>

                  {/* <svg
                    className="h-4 w-4 text-stone-300 transition group-hover:translate-x-0.5 group-hover:text-stone-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg> */}
                </a>
              ))}
            </div>
          </nav>

          <div className="border-t border-stone-200/80 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href="#contacto"
              className={`${navCtaClass} flex min-h-[44px] w-full text-center`}
              onClick={closeMenu}
            >
              <span>{ctaLabel}</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}