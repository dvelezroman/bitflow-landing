'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

const LOGO_URL = 'https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png'
const EMAIL = 'ventas@bitflow.bid'
const PHONE_DISPLAY = '+593 995 710 556'
const PHONE_WHATSAPP = '593995710556'

export default function Home() {
  const { t, language, setLanguage } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t('contact.success'))
    setName('')
    setEmail('')
    setPhone('')
    setService('')
    setMessage('')
  }

  const navLinkClass =
    'text-sm font-medium text-stone-600 transition hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded px-1'

  const LangBtn = ({ lang, label }: { lang: 'es' | 'en'; label: string }) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
        language === lang
          ? 'bg-stone-900 text-white'
          : 'text-stone-500 hover:text-stone-800'
      }`}
      aria-pressed={language === lang}
    >
      {label}
    </button>
  )

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#" className="flex shrink-0 items-center gap-2" onClick={closeMenu}>
            <img src={LOGO_URL} alt="BITFLOW" className="h-8 w-auto md:h-9" width={120} height={36} />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            <a href="#servicios" className={navLinkClass}>
              {t('nav.services')}
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
              className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 md:inline-flex"
            >
              {t('nav.cta')}
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-800 md:hidden"
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
            className="border-t border-stone-200 bg-stone-50 px-4 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Móvil">
              {[
                ['#servicios', t('nav.services')],
                ['#proceso', t('nav.process')],
                ['#nosotros', t('nav.about')],
                ['#faq', t('nav.faq')],
                ['#contacto', t('nav.contact')],
              ].map(([href, label]) => (
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

      <div id="contenido">
        <section className="border-b border-stone-200/80 pt-28 pb-20 md:pt-32 md:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              {t('hero.eyebrow')}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {t('hero.title')}{' '}
              <span className="text-stone-600">{t('hero.titleAccent')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {t('services.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('services.subtitle')}</p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: t('services.software.title'),
                  body: t('services.software.description'),
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  ),
                },
                {
                  title: t('services.consulting.title'),
                  body: t('services.consulting.description'),
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  ),
                },
                {
                  title: t('services.platforms.title'),
                  body: t('services.platforms.description'),
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  ),
                },
                {
                  title: t('services.security.title'),
                  body: t('services.security.description'),
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-1.061-1.764l-7-3.5a2 2 0 00-1.878 0l-7 3.5A2 2 0 003 9v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  ),
                  extra: true,
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-stone-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        {card.icon}
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900">{card.title}</h3>
                      <p className="mt-2 text-stone-600 leading-relaxed">{card.body}</p>
                      {card.extra && (
                        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-stone-600 sm:grid-cols-2">
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary-600" aria-hidden />
                            {t('services.security.bullets.alarms')}
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary-600" aria-hidden />
                            {t('services.security.bullets.cameras')}
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary-600" aria-hidden />
                            {t('services.security.bullets.fences')}
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary-600" aria-hidden />
                            {t('services.security.bullets.automation')}
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {t('process.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('process.subtitle')}</p>

            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { n: '01', title: t('process.step1.title'), desc: t('process.step1.description') },
                { n: '02', title: t('process.step2.title'), desc: t('process.step2.description') },
                { n: '03', title: t('process.step3.title'), desc: t('process.step3.description') },
              ].map((step) => (
                <li key={step.n} className="relative border-l-2 border-stone-200 pl-6 md:border-l-0 md:border-t-2 md:pt-8 md:pl-0">
                  <span className="absolute -left-[9px] top-0 flex h-4 w-4 rounded-full border-2 border-white bg-stone-900 md:left-0 md:-top-[9px]" aria-hidden />
                  <span className="text-xs font-semibold text-stone-400">{step.n}</span>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                  {t('about.title')}
                </h2>
                <p className="mt-4 text-lg text-stone-600">{t('about.description')}</p>
                <p className="mt-6 text-stone-600 leading-relaxed">{t('about.paragraph1')}</p>
                <p className="mt-4 text-stone-600 leading-relaxed">{t('about.paragraph2')}</p>
              </div>
              <aside className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="mt-6 font-semibold text-stone-900">{t('about.highlight')}</p>
                <p className="mt-1 text-sm text-primary-700">{t('about.role')}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-stone-900 py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t('cta.title')}</h2>
              <p className="mt-3 max-w-xl text-stone-300">{t('cta.description')}</p>
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 md:mt-0"
            >
              {t('cta.button')}
            </a>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {t('faq.title')}
            </h2>
            <div className="mt-10 space-y-3">
              {(['q1', 'q2', 'q3', 'q4'] as const).map((key) => (
                <details
                  key={key}
                  className="group rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none font-medium text-stone-900 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {t(`faq.${key}.question`)}
                      <span className="text-stone-400 transition group-open:rotate-180" aria-hidden>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {t(`faq.${key}.answer`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('contact.subtitle')}</p>

            <div className="mt-12 grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-stone-700">
                      {t('contact.name')}
                    </label>
                    <input
                      id="nombre"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="correo" className="block text-sm font-medium text-stone-700">
                        {t('contact.email')}
                      </label>
                      <input
                        id="correo"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-stone-700">
                        {t('contact.phone')}
                      </label>
                      <input
                        id="telefono"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder={t('contact.phonePlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-stone-700">
                      {t('contact.service')}
                    </label>
                    <select
                      id="servicio"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">{t('contact.servicePlaceholder')}</option>
                      <option value="software">{t('contact.serviceSoftware')}</option>
                      <option value="consulting">{t('contact.serviceConsulting')}</option>
                      <option value="platforms">{t('contact.servicePlatforms')}</option>
                      <option value="security">{t('contact.serviceSecurity')}</option>
                      <option value="other">{t('contact.serviceOther')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-stone-700">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="mensaje"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-1.5 w-full resize-y rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 sm:w-auto sm:px-10"
                  >
                    {t('contact.send')}
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                    {t('contact.channelsTitle')}
                  </h3>
                  <ul className="mt-6 space-y-5">
                    <li>
                      <p className="text-xs text-stone-500">{t('contact.emailLabel')}</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-1 block text-base font-medium text-primary-700 hover:text-primary-800"
                      >
                        {EMAIL}
                      </a>
                    </li>
                    <li>
                      <p className="text-xs text-stone-500">{t('contact.phoneLabel')}</p>
                      <a href={`tel:+${PHONE_WHATSAPP}`} className="mt-1 block text-base font-medium text-stone-900">
                        {PHONE_DISPLAY}
                      </a>
                    </li>
                  </ul>
                  <a
                    href={`https://wa.me/${PHONE_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-stone-50 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                  >
                    <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <img src={LOGO_URL} alt="" className="h-8 w-auto opacity-90" width={120} height={36} />
              <p className="mt-4 text-sm text-stone-600">{t('footer.tagline')}</p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{t('footer.services')}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="#servicios" className="text-stone-600 hover:text-stone-900">
                      {t('footer.links.services')}
                    </a>
                  </li>
                  <li>
                    <a href="#proceso" className="text-stone-600 hover:text-stone-900">
                      {t('footer.links.process')}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{t('footer.company')}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="#nosotros" className="text-stone-600 hover:text-stone-900">
                      {t('footer.links.about')}
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="text-stone-600 hover:text-stone-900">
                      {t('footer.links.contact')}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{t('footer.legal')}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-stone-600 hover:text-stone-900">
                      {t('footer.links.privacy')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-stone-600 hover:text-stone-900">
                      {t('footer.links.terms')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-12 border-t border-stone-100 pt-8 text-center text-sm text-stone-500">
            &copy; {new Date().getFullYear()} BITFLOW. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </main>
  )
}
