'use client'

import { useI18n } from '@/lib/i18n'

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4'] as const

export function LandingFaq() {
  const { t } = useI18n()

  return (
    <section id="faq" className="scroll-mt-24 border-b border-stone-200/80 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('faq.title')}</h2>
        <div className="mt-10 space-y-3">
          {FAQ_KEYS.map((key) => (
            <details
              key={key}
              className="group rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-medium text-stone-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {t(`faq.${key}.question`)}
                  <span className="text-stone-400 transition group-open:rotate-180" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </summary>
              <p className="mt-3 border-t border-stone-100 pt-3 text-stone-600 leading-relaxed">{t(`faq.${key}.answer`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
