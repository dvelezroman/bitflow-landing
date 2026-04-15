'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

const cards = [
  {
    key: 'software' as const,
    media: MEDIA.services.software,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    key: 'consulting' as const,
    media: MEDIA.services.consulting,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
  },
  {
    key: 'platforms' as const,
    media: MEDIA.services.platforms,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
  },
]

export function LandingServices() {
  const { t } = useI18n()

  return (
    <section id="servicios" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">{t('services.title')}</h2>
        <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">{t('services.subtitle')}</p>

        <div className="mt-10 rounded-2xl border border-stone-700/30 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 px-5 py-7 text-stone-100 shadow-soft-lg sm:rounded-3xl sm:px-8 sm:py-9">
          <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">{t('services.engineering.title')}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-300 md:text-base">{t('services.engineering.intro')}</p>
          <ul className="mt-6 space-y-3 border-t border-stone-700 pt-6 text-sm text-stone-200 md:text-[0.9375rem]">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" aria-hidden />
                <span>{t(`services.engineering.points.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.key}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white/95 shadow-soft backdrop-blur-sm transition hover:border-primary-200/50 hover:shadow-soft-lg sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] bg-stone-200 sm:aspect-[21/9]">
                <img
                  src={card.media}
                  alt={t(`services.${card.key}.imageAlt`)}
                  width={800}
                  height={340}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-sky-50 text-stone-800 ring-1 ring-primary-100/80">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      {card.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-stone-900">{t(`services.${card.key}.title`)}</h3>
                    <p className="mt-2 text-stone-600 leading-relaxed">{t(`services.${card.key}.description`)}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
