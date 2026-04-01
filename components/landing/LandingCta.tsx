'use client'

import { useI18n } from '@/lib/i18n'

export function LandingCta() {
  const { t } = useI18n()

  return (
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
  )
}
