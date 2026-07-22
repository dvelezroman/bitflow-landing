'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'

const PRIMARY_LINKS = [
  { href: '#servicios', key: 'nav.services' },
  { href: '#trabajo', key: 'nav.work' },
  { href: '#proceso', key: 'nav.process' },
  { href: '#nosotros', key: 'nav.about' },
  { href: '#contacto', key: 'nav.contact' },
] as const

const SECONDARY_LINKS = [
  { href: '#historia', key: 'nav.story' },
  { href: '#faq', key: 'nav.faq' },
] as const

export function LandingHeader() {
  const { t, language, setLanguage } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const closeMenu = () => setMenuOpen(false)
  const solid = scrolled || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...PRIMARY_LINKS, ...SECONDARY_LINKS].map((l) => l.href.slice(1))
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const linkClass = (href: string) => {
    const active = activeHref === href
    if (!solid) {
      return `rounded-lg px-2.5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
        active ? 'bg-white text-slate-900' : 'text-white/85 hover:bg-white/10 hover:text-white'
      }`
    }
    return `rounded-lg px-2.5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
      active ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100/90 hover:text-slate-900'
    }`
  }

  const LangBtn = ({ lang, label }: { lang: 'es' | 'en'; label: string }) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      className={`min-h-[40px] min-w-[40px] rounded-lg px-2.5 text-xs font-semibold transition ${
        language === lang
          ? solid
            ? 'bg-slate-900 text-white'
            : 'bg-white text-slate-900'
          : solid
            ? 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            : 'text-white/80 hover:bg-white/10 hover:text-white'
      }`}
      aria-pressed={language === lang}
    >
      {label}
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-[background,border,box-shadow] duration-300 ${
        solid
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex min-h-[3.25rem] max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:min-h-16 sm:px-6 sm:py-0">
        <a href="#" className="flex shrink-0 items-center gap-2" onClick={closeMenu}>
          <Image
            src="/images/company-logos-bitflow/logo-1.png"
            alt="BITFLOW"
            width={120}
            height={36}
            priority
            className={`h-8 w-auto transition md:h-9 ${solid ? '' : 'brightness-0 invert'}`}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {PRIMARY_LINKS.map(({ href, key }) => (
            <a key={href} href={href} className={linkClass(href)}>
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`flex shrink-0 overflow-hidden rounded-xl p-0.5 ${
              solid ? 'border border-slate-200/90 bg-white/80' : 'border border-white/20 bg-white/10'
            }`}
            role="group"
            aria-label="Idioma"
          >
            <LangBtn lang="es" label="ES" />
            <LangBtn lang="en" label="EN" />
          </div>
          <a
            href="#contacto"
            className={`hidden min-w-[10.5rem] md:inline-flex ${
              solid
                ? 'btn-primary'
                : 'inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
            }`}
          >
            {t('nav.cta')}
          </a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition active:scale-[0.98] lg:hidden ${
              solid
                ? 'border border-slate-200/90 bg-white text-slate-800'
                : 'border border-white/25 bg-white/10 text-white'
            }`}
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
        <>
          <button
            type="button"
            className="fixed inset-0 top-[calc(3.25rem+env(safe-area-inset-top,0px))] z-40 bg-slate-900/25 backdrop-blur-[2px] lg:hidden sm:top-16"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />
          <div
            id="mobile-menu"
            className="relative z-50 border-t border-slate-200/80 bg-white px-4 py-4 shadow-soft-lg lg:hidden"
          >
            <nav
              className="flex max-h-[min(70dvh,calc(100dvh-5rem))] flex-col gap-1 overflow-y-auto overscroll-y-contain pb-[max(0.75rem,env(safe-area-inset-bottom))]"
              aria-label="Móvil"
            >
              {PRIMARY_LINKS.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  className={`rounded-xl px-3 py-3.5 text-base font-medium ${
                    activeHref === href ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                  onClick={closeMenu}
                >
                  {t(key)}
                </a>
              ))}
              <div className="my-2 border-t border-slate-100 pt-2">
                {SECONDARY_LINKS.map(({ href, key }) => (
                  <a
                    key={href}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    onClick={closeMenu}
                  >
                    {t(key)}
                  </a>
                ))}
              </div>
              <a href="#contacto" className="btn-primary mt-1 w-full" onClick={closeMenu}>
                {t('nav.cta')}
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
