'use client'

import { useI18n } from '@/lib/i18n'

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconListen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 3a5 5 0 015 5v4a3 3 0 01-6 0V8a5 5 0 015-5z" strokeLinecap="round" />
      <path d="M8 10v1a4 4 0 004 4M16 10v1a4 4 0 01-4 4" strokeLinecap="round" />
      <path d="M12 19v3M8 22h8" strokeLinecap="round" />
    </svg>
  )
}

function IconProposal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinejoin="round" />
      <path d="M14 2v6h6M8 13h8M8 17h5" strokeLinecap="round" />
    </svg>
  )
}

function IconShip({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 14l2 7h12l2-7M4 14h16M4 14L6 4h12l2 10" strokeLinejoin="round" />
      <path d="M9 10h6" strokeLinecap="round" />
    </svg>
  )
}

export function LandingShowcaseFlow() {
  const { t } = useI18n()

  const steps = [
    { Icon: IconListen, title: t('process.step1.title'), desc: t('process.step1.description') },
    { Icon: IconProposal, title: t('process.step2.title'), desc: t('process.step2.description') },
    { Icon: IconShip, title: t('process.step3.title'), desc: t('process.step3.description') },
  ]

  return (
    <section id="experiencia" className="section-pad">
      <div className="section-inner">
        <h2 className="section-title">{t('showcase.title')}</h2>
        <p className="section-lead">{t('showcase.subtitle')}</p>

        <div className="mt-10 sm:mt-12" role="img" aria-label={t('showcase.diagramAria')}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t('showcase.flowIntro')}</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex gap-4 border-l-2 border-teal-600 pl-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                <IconCode className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{t('showcase.laneSoftware')}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{t('showcase.laneSoftwareHint')}</p>
              </div>
            </div>
            <div className="flex gap-4 border-l-2 border-slate-900 pl-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                <IconShip className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{t('showcase.laneSustain')}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{t('showcase.laneSustainHint')}</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t('showcase.mergeHint')}
          </p>

          <ol className="mt-8 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3 md:gap-10">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-3 md:flex-col md:gap-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white md:mb-4">
                  <step.Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-teal-700">0{i + 1}</span>
                  <h3 className="mt-0.5 text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">{t('showcase.footnote')}</p>
      </div>
    </section>
  )
}
