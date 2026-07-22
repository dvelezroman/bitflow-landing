'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA, SUCCESS_PLATFORM_COUNT } from '@/content/media'

function TechTags({ line, label }: { line: string; label: string }) {
  const items = line
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
  return (
    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1" aria-label={label}>
      {items.map((tech) => (
        <li key={tech} className="text-xs font-medium text-slate-500">
          {tech}
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
    <section id="casos-exitosos" className="section-pad bg-white/70">
      <div className="section-inner">
        <h2 className="section-title">{t('successStories.title')}</h2>
        <p className="section-lead max-w-3xl">{t('successStories.subtitle')}</p>

        <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-teal-800 sm:mt-14 sm:text-sm">
          {t('successStories.platformsHeading')}
        </h3>
        <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
          {platformIndices.map((i) => {
            const { image } = MEDIA.successStories.platforms[i]
            return (
              <article key={`p-${i}`} className="group flex flex-col">
                <div className="overflow-hidden bg-slate-200">
                  <img
                    src={image}
                    alt={t(`successStories.platforms.${i}.imageAlt`)}
                    width={1200}
                    height={750}
                    className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-700 sm:text-xs">
                    {t(`successStories.platforms.${i}.sector`)}
                  </p>
                  <h4 className="mt-2 text-balance text-lg font-semibold text-slate-900 sm:text-xl">
                    {t(`successStories.platforms.${i}.title`)}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {t(`successStories.platforms.${i}.solution`)}
                  </p>
                  <TechTags line={t(`successStories.platforms.${i}.tech`)} label={techAria} />
                  <p className="mt-4 border-t border-slate-200 pt-4 text-sm font-medium text-slate-800">
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
