'use client'

import { useI18n } from '@/lib/i18n'

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4'] as const

export function LandingFaq() {
  const { t } = useI18n()

  return (
    <section id="faq" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">{t('faq.title')}</h2>
        <div className="mt-8 space-y-2 sm:mt-10 sm:space-y-3">
          {FAQ_KEYS.map((key) => (
            <details
              key={key}
              className="group rounded-2xl border border-stone-200/80 bg-white/95 shadow-soft backdrop-blur-sm open:border-primary-100/80 open:shadow-soft-lg"
            >
              <summary className="min-h-[52px] cursor-pointer list-none px-4 py-3.5 font-medium text-stone-900 sm:min-h-0 sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3 sm:gap-4">
                  {t(`faq.${key}.question`)}
                  <span className="text-stone-400 transition group-open:rotate-180" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </summary>
              <p className="border-t border-stone-100 px-4 pb-4 pt-3 text-sm leading-relaxed text-stone-600 sm:px-5 sm:text-base">
                {t(`faq.${key}.answer`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
