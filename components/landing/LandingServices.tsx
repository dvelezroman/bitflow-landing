'use client'

import Image from 'next/image'
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
    <section id="servicios" className="section-pad">
      <div className="section-inner">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-lead">{t('services.subtitle')}</p>

        <div className="mt-10 border border-slate-800 bg-slate-900 px-5 py-7 text-slate-100 sm:mt-12 sm:px-8 sm:py-9">
          <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
            {t('services.engineering.title')}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            {t('services.engineering.intro')}
          </p>
          <ul className="mt-6 space-y-3 border-t border-slate-700/80 pt-6 text-sm text-slate-200 md:text-[0.9375rem]">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden />
                <span>{t(`services.engineering.points.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-3 md:gap-10">
          {cards.map((card) => (
            <article key={card.key} className="group flex flex-col">
              <div className="overflow-hidden bg-slate-200">
                <Image
                  src={card.media}
                  alt={t(`services.${card.key}.imageAlt`)}
                  width={800}
                  height={340}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-[21/10]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-slate-800 ring-1 ring-teal-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    {card.icon}
                  </svg>
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-slate-900">{t(`services.${card.key}.title`)}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{t(`services.${card.key}.description`)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
