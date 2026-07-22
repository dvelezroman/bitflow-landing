'use client'

import { useI18n } from '@/lib/i18n'

export function LandingCta() {
  const { t } = useI18n()

  return (
    <section className="border-b border-slate-800 bg-slate-900 py-14 text-white sm:py-16 md:py-20">
      <div className="section-inner md:flex md:items-center md:justify-between md:gap-12">
        <div className="min-w-0">
          <h2 className="font-display text-balance text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {t('cta.title')}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{t('cta.description')}</p>
        </div>
        <a
          href="#contacto"
          className="mt-6 inline-flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.99] sm:mt-8 md:mt-0 md:w-auto md:min-w-[12rem]"
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  )
}
