'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingAbout() {
  const { t } = useI18n()

  return (
    <section id="nosotros" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-4 text-base text-stone-600 sm:text-lg">{t('about.description')}</p>
            <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:mt-6 sm:text-base">{t('about.paragraph1')}</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">{t('about.paragraph2')}</p>
            <aside className="mt-8 rounded-2xl border border-stone-200/80 bg-white/95 p-5 shadow-soft backdrop-blur-sm sm:mt-10 sm:rounded-3xl sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-sky-50 text-stone-700 ring-1 ring-primary-100/80 sm:h-12 sm:w-12">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="mt-4 font-semibold text-stone-900">{t('about.highlight')}</p>
              <p className="mt-1 text-sm text-primary-700">{t('about.role')}</p>
            </aside>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-soft-lg ring-1 ring-white/30 sm:rounded-3xl lg:order-2">
            <img
              src={MEDIA.about.team}
              alt={t('about.imageAlt')}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
