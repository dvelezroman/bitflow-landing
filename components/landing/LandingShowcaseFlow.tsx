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

function FlowArrowDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 40" fill="none" aria-hidden>
      <path d="M24 4v24M14 24l10 10 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <section
      id="experiencia"
      className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 bg-gradient-to-b from-sky-50/50 via-white/80 to-stone-50/90 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">{t('showcase.title')}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">{t('showcase.subtitle')}</p>

        <div
          className="mt-10 rounded-2xl border border-stone-200/80 bg-white/95 p-5 shadow-soft-lg backdrop-blur-sm sm:mt-12 sm:rounded-3xl sm:p-8 md:p-10"
          role="img"
          aria-label={t('showcase.diagramAria')}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-stone-400">{t('showcase.flowIntro')}</p>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex gap-3 rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50 to-white p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm sm:h-12 sm:w-12">
                <IconCode className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">{t('showcase.laneSoftware')}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{t('showcase.laneSoftwareHint')}</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/90 to-white p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-sm sm:h-12 sm:w-12">
                <IconShip className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">{t('showcase.laneSustain')}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{t('showcase.laneSustainHint')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center py-4 text-stone-400 md:py-6">
            <p className="rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-wide text-stone-600">
              {t('showcase.mergeHint')}
            </p>
            <FlowArrowDown className="mt-2 h-10 w-12 text-stone-400" />
          </div>

          <div className="rounded-2xl border border-stone-200/60 bg-gradient-to-b from-stone-50/90 to-white/80 p-5 sm:rounded-2xl sm:p-6 md:p-8">
            <ol className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-3 sm:gap-4 md:flex-col md:items-center md:text-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-stone-900 text-white shadow-md ring-4 ring-stone-100">
                    <step.Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-primary-600">0{i + 1}</span>
                    <h3 className="mt-0.5 text-base font-semibold text-stone-900 md:mt-2">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-stone-500">{t('showcase.footnote')}</p>
      </div>
    </section>
  )
}
