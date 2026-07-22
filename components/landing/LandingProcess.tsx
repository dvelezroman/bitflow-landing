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
    <section id="proceso" className="section-pad bg-white/70">
      <div className="section-inner">
        <h2 className="section-title">{t('process.title')}</h2>
        <p className="section-lead">{t('process.subtitle')}</p>

        <ol className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li key={step.n} className="relative border-t border-slate-900 pt-6">
              <span className="font-display text-xs font-semibold tracking-wide text-teal-700">{step.n}</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{step.desc}</p>
              {i < steps.length - 1 ? (
                <span className="absolute -right-5 top-6 hidden h-px w-10 bg-slate-200 md:block" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
