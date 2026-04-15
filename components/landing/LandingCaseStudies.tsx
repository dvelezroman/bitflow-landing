'use client'

import { useI18n } from '@/lib/i18n'
import { CASE_STUDY_COUNT, MEDIA } from '@/content/media'

export function LandingCaseStudies() {
  const { t } = useI18n()
  const indices = Array.from({ length: CASE_STUDY_COUNT }, (_, i) => i)

  return (
    <section id="casos" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
          {t('caseStudies.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">{t('caseStudies.subtitle')}</p>

        <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-16">
          {indices.map((i) => {
            const isOdd = i % 2 === 1
            const img = MEDIA.caseStudies[i]
            return (
              <article
                key={i}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${isOdd ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200 shadow-soft-lg ring-1 ring-white/30 sm:rounded-3xl">
                  <img
                    src={img.image}
                    alt={t(`caseStudies.items.${i}.imageAlt`)}
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full object-cover lg:aspect-[3/2]"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                    {t(`caseStudies.items.${i}.sector`)}
                  </p>
                  <h3 className="mt-2 text-balance text-xl font-semibold text-stone-900 sm:text-2xl">{t(`caseStudies.items.${i}.title`)}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">{t(`caseStudies.items.${i}.summary`)}</p>
                  <p className="mt-6 rounded-2xl border border-primary-100/80 bg-gradient-to-br from-primary-50/90 to-sky-50/50 px-4 py-3 text-sm font-medium text-stone-800 shadow-sm">
                    {t(`caseStudies.items.${i}.result`)}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
