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
  {
    key: 'security' as const,
    media: MEDIA.services.security,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-1.061-1.764l-7-3.5a2 2 0 00-1.878 0l-7 3.5A2 2 0 003 9v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
]

export function LandingServices() {
  const { t } = useI18n()

  return (
    <section id="servicios" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('services.title')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('services.subtitle')}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.key}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md"
            >
              <div className="relative aspect-[21/9] bg-stone-200">
                <img
                  src={card.media}
                  alt={t(`services.${card.key}.imageAlt`)}
                  width={800}
                  height={340}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-800">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      {card.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-stone-900">{t(`services.${card.key}.title`)}</h3>
                    <p className="mt-2 text-stone-600 leading-relaxed">{t(`services.${card.key}.description`)}</p>
                    {card.key === 'security' ? (
                      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-stone-600 sm:grid-cols-2">
                        {(['alarms', 'cameras', 'fences', 'automation'] as const).map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-primary-600" aria-hidden />
                            {t(`services.security.bullets.${b}`)}
                          </li>
                        ))}
                      </ul>
                    ) : null}
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
