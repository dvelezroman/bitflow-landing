'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingHero() {
  const { t } = useI18n()

  return (
    <section className="border-b border-stone-200/80 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{t('hero.eyebrow')}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {t('hero.title')} <span className="text-stone-600">{t('hero.titleAccent')}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">{t('hero.description')}</p>
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
        <div className="relative w-full shrink-0 lg:max-w-[min(100%,480px)]">
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-sm">
              <img
                src={MEDIA.hero.main}
                alt=""
                width={640}
                height={480}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-sm">
              <img
                src={MEDIA.hero.secondary}
                alt=""
                width={480}
                height={360}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-stone-500">{t('hero.imageCredit')}</p>
        </div>
      </div>
    </section>
  )
}
