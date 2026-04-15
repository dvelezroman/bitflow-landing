'use client'

import { useI18n } from '@/lib/i18n'

export function LandingCta() {
  const { t } = useI18n()

  return (
    <section className="border-b border-stone-200/80 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 py-14 text-white sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:gap-12">
        <div className="min-w-0">
          <h2 className="text-balance text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">{t('cta.title')}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">{t('cta.description')}</p>
        </div>
        <a
          href="#contacto"
          className="mt-6 inline-flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-stone-900 shadow-soft transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 active:scale-[0.99] sm:mt-8 md:mt-0 md:w-auto md:min-w-[12rem]"
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  )
}
