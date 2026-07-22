'use client'

import { useI18n } from '@/lib/i18n'

const CHAPTER_INDICES = [0, 1, 2, 3] as const

export function LandingStory() {
  const { t } = useI18n()

  return (
    <section id="historia" className="section-pad bg-white/70 backdrop-blur-[2px]">
      <div className="section-inner">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{t('story.eyebrow')}</p>
        <h2 className="section-title mt-4 max-w-4xl">{t('story.title')}</h2>
        <p className="section-lead max-w-3xl md:text-xl">{t('story.lead')}</p>

        <ol className="mt-12 divide-y divide-slate-200 border-y border-slate-200 sm:mt-14">
          {CHAPTER_INDICES.map((i) => (
            <li key={i} className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-8">
              <span className="font-display text-sm font-semibold text-slate-400">{(i + 1).toString().padStart(2, '0')}</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{t(`story.chapters.${i}.title`)}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                  {t(`story.chapters.${i}.body`)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="mt-12 border border-slate-800 bg-slate-900 px-5 py-8 text-slate-100 sm:mt-14 sm:px-8 sm:py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">{t('story.manifestoKicker')}</p>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {t('story.manifestoTitle')}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{t('story.manifestoBody')}</p>
        </aside>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base font-medium leading-relaxed text-slate-800 md:text-lg">
          {t('story.closing')}
        </p>
      </div>
    </section>
  )
}
