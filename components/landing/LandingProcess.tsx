'use client'

import { useI18n } from '@/lib/i18n'

export function LandingProcess() {
  const { t } = useI18n()
  const steps = [
    { n: '01', title: t('process.step1.title'), desc: t('process.step1.description') },
    { n: '02', title: t('process.step2.title'), desc: t('process.step2.description') },
    { n: '03', title: t('process.step3.title'), desc: t('process.step3.description') },
  ]

  return (
    <section id="proceso" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">{t('process.title')}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">{t('process.subtitle')}</p>

        <ol className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative border-l-2 border-stone-200 pl-5 sm:pl-6 md:border-l-0 md:border-t-2 md:pt-8 md:pl-0"
            >
              <span
                className="absolute -left-[9px] top-0 flex h-4 w-4 rounded-full border-2 border-white bg-stone-900 md:left-0 md:-top-[9px]"
                aria-hidden
              />
              <span className="text-xs font-semibold text-stone-400">{step.n}</span>
              <h3 className="mt-2 text-base font-semibold text-stone-900 sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
