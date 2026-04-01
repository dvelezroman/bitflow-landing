'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingAbout() {
  const { t } = useI18n()

  return (
    <section id="nosotros" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('about.title')}</h2>
            <p className="mt-4 text-lg text-stone-600">{t('about.description')}</p>
            <p className="mt-6 text-stone-600 leading-relaxed">{t('about.paragraph1')}</p>
            <p className="mt-4 text-stone-600 leading-relaxed">{t('about.paragraph2')}</p>
            <aside className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="mt-4 font-semibold text-stone-900">{t('about.highlight')}</p>
              <p className="mt-1 text-sm text-primary-700">{t('about.role')}</p>
            </aside>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-sm lg:order-2">
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
