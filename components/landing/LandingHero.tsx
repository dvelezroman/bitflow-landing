'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingHero() {
  const { t } = useI18n()

  return (
    <section className="relative border-b border-stone-200/70 pb-14 pt-[calc(3.5rem+env(safe-area-inset-top,0px)+1rem)] sm:pb-16 sm:pt-[calc(4rem+env(safe-area-inset-top,0px)+0.75rem)] md:pb-20 md:pt-32 lg:pt-36">
      <div className="motion-safe:animate-fade-up mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:gap-12 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700 sm:text-xs">
            {t('hero.eyebrow')}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {t('hero.title')} <span className="text-stone-500">{t('hero.titleAccent')}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg md:text-xl">
            {t('hero.description')}
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-br from-stone-900 to-stone-800 px-6 text-sm font-semibold text-white shadow-soft transition hover:from-stone-800 hover:to-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.99] sm:w-auto sm:min-w-[11rem]"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-stone-300/90 bg-white/90 px-6 text-sm font-semibold text-stone-800 shadow-sm backdrop-blur-sm transition hover:border-primary-300/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-[0.99] sm:w-auto"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
        <div className="relative w-full shrink-0 lg:max-w-[min(100%,480px)]">
          <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5 sm:max-w-none sm:gap-3 lg:mx-0">
            <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-soft-lg ring-1 ring-white/40 sm:rounded-3xl">
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
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-soft-lg ring-1 ring-white/40 sm:mt-8 sm:rounded-3xl">
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
        </div>
      </div>
    </section>
  )
}
