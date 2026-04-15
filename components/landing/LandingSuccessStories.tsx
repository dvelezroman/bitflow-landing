'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA, SUCCESS_PLATFORM_COUNT } from '@/content/media'

function TechPills({ line, label }: { line: string; label: string }) {
  const items = line
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label={label}>
      {items.map((tech) => (
        <li key={tech}>
          <span className="rounded-full border border-primary-100/90 bg-gradient-to-br from-primary-50/90 to-sky-50/40 px-2.5 py-1 text-xs font-medium text-stone-700">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function LandingSuccessStories() {
  const { t } = useI18n()
  const techAria = t('successStories.techAria')
  const platformIndices = Array.from({ length: SUCCESS_PLATFORM_COUNT }, (_, i) => i)

  return (
    <section id="casos-exitosos" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 bg-white/85 py-16 backdrop-blur-sm sm:py-20 md:py-28 supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
          {t('successStories.title')}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg">{t('successStories.subtitle')}</p>

        <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-primary-800 sm:mt-14 sm:text-sm">
          {t('successStories.platformsHeading')}
        </h3>
        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2 md:gap-8">
          {platformIndices.map((i) => {
            const { image } = MEDIA.successStories.platforms[i]
            return (
              <article
                key={`p-${i}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white/90 shadow-soft backdrop-blur-sm transition hover:border-primary-200/50 hover:shadow-soft-lg sm:rounded-3xl"
              >
                <div className="aspect-[16/10] bg-stone-200">
                  <img
                    src={image}
                    alt={t(`successStories.platforms.${i}.imageAlt`)}
                    width={1200}
                    height={750}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-700 sm:text-xs">
                    {t(`successStories.platforms.${i}.sector`)}
                  </p>
                  <h4 className="mt-2 text-balance text-lg font-semibold text-stone-900 sm:text-xl">
                    {t(`successStories.platforms.${i}.title`)}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{t(`successStories.platforms.${i}.solution`)}</p>
                  <TechPills line={t(`successStories.platforms.${i}.tech`)} label={techAria} />
                  <p className="mt-4 border-t border-stone-200 pt-4 text-sm font-medium text-stone-800">
                    {t(`successStories.platforms.${i}.result`)}
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
