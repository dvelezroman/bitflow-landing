'use client'

import { useI18n } from '@/lib/i18n'

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4'] as const

export function LandingFaq() {
  const { t } = useI18n()

  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="section-title">{t('faq.title')}</h2>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 sm:mt-10">
          {FAQ_KEYS.map((key) => (
            <details key={key} className="group py-1">
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
                <span>{t(`faq.${key}.question`)}</span>
                <span className="shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{t(`faq.${key}.answer`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
