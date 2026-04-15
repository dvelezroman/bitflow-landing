'use client'

import { useI18n } from '@/lib/i18n'

const PROJECT_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const

function Field({
  label,
  children,
  isFirst = false,
  className = '',
}: {
  label: string
  children: React.ReactNode
  isFirst?: boolean
  className?: string
}) {
  return (
    <div
      className={`min-w-0 pt-4 sm:pt-5 ${isFirst ? '' : 'border-t border-stone-100'} ${className}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-700 sm:text-xs">{label}</p>
      <p className="mt-2 text-base leading-[1.65] text-stone-700 sm:text-[0.9375rem] sm:leading-relaxed">
        <span className="block break-words [overflow-wrap:anywhere] [hyphens:auto]">{children}</span>
      </p>
    </div>
  )
}

export function LandingProjects() {
  const { t } = useI18n()

  return (
    <section
      id="proyectos-bitflow"
      className="scroll-mt-20 md:scroll-mt-24 overflow-x-clip border-b border-stone-200/80 bg-gradient-to-b from-white/90 to-stone-50/80 py-14 backdrop-blur-[2px] sm:py-20 md:py-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6">
        <h2 className="text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
          {t('projects.title')}
        </h2>
        <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-stone-600 sm:mt-4 sm:text-lg">
          {t('projects.subtitle')}
        </p>

        <div className="mt-8 flex min-w-0 flex-col gap-5 sm:mt-12 sm:gap-7 md:gap-8">
          {PROJECT_INDICES.map((i) => (
            <article
              key={i}
              className="min-w-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white/95 p-4 shadow-soft backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-8"
            >
              <h3 className="text-balance text-[1.0625rem] font-semibold leading-snug text-stone-900 sm:text-xl sm:leading-tight">
                {t(`projects.items.${i}.title`)}
              </h3>

              <div className="mt-5 min-w-0 sm:mt-7">
                <Field isFirst label={t('projects.labels.summary')}>
                  {t(`projects.items.${i}.summary`)}
                </Field>

                <div className="grid min-w-0 grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-10">
                  <Field className="sm:pr-1 lg:pr-0" label={t('projects.labels.need')}>
                    {t(`projects.items.${i}.need`)}
                  </Field>
                  <Field className="sm:pl-1 lg:pl-0" label={t('projects.labels.tech')}>
                    {t(`projects.items.${i}.tech`)}
                  </Field>
                </div>

                <Field label={t('projects.labels.outcome')}>{t(`projects.items.${i}.outcome`)}</Field>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-balance rounded-2xl border border-dashed border-primary-200/80 bg-primary-50/40 px-4 py-4 text-center text-[0.9375rem] font-medium leading-relaxed text-stone-800 sm:mt-12 sm:px-8 sm:py-5 sm:text-base">
          {t('projects.pipeline')}
        </p>
      </div>
    </section>
  )
}
