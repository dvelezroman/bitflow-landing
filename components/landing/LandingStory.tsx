'use client'

import { useI18n } from '@/lib/i18n'

const CHAPTER_INDICES = [0, 1, 2, 3] as const

export function LandingStory() {
  const { t } = useI18n()

  return (
    <section
      id="historia"
      className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 bg-gradient-to-b from-white/95 to-stone-50/90 py-16 backdrop-blur-[2px] sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">{t('story.eyebrow')}</p>
        <h2 className="mt-4 max-w-4xl text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
          {t('story.title')}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 sm:mt-6 sm:text-lg md:text-xl">
          {t('story.lead')}
        </p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 md:gap-6">
          {CHAPTER_INDICES.map((i) => (
            <article
              key={i}
              className="rounded-2xl border border-stone-200/80 bg-white/90 p-5 shadow-soft backdrop-blur-sm sm:rounded-3xl sm:p-7 md:p-8"
            >
              <span className="text-xs font-bold text-stone-400">{(i + 1).toString().padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg font-semibold text-stone-900 md:text-xl">{t(`story.chapters.${i}.title`)}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">{t(`story.chapters.${i}.body`)}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-stone-800/80 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 px-5 py-7 text-stone-100 shadow-soft-lg ring-1 ring-white/10 sm:mt-12 sm:rounded-3xl sm:px-8 sm:py-9 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">{t('story.manifestoKicker')}</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{t('story.manifestoTitle')}</p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-stone-300 md:text-base">{t('story.manifestoBody')}</p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium leading-relaxed text-stone-800 sm:mt-10 md:text-lg">
          {t('story.closing')}
        </p>
      </div>
    </section>
  )
}
