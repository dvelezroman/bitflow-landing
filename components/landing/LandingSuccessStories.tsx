'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA, SUCCESS_PLATFORM_COUNT, SUCCESS_SECURITY_COUNT } from '@/content/media'

function TechPills({ line, label }: { line: string; label: string }) {
  const items = line
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean)
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label={label}>
      {items.map((tech) => (
        <li key={tech}>
          <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-xs font-medium text-stone-700">
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
  const securityIndices = Array.from({ length: SUCCESS_SECURITY_COUNT }, (_, i) => i)

  return (
    <section id="casos-exitosos" className="scroll-mt-24 border-b border-stone-200/80 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('successStories.title')}</h2>
        <p className="mt-4 max-w-3xl text-lg text-stone-600">{t('successStories.subtitle')}</p>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.15em] text-primary-800">
          {t('successStories.platformsHeading')}
        </h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {platformIndices.map((i) => {
            const { image } = MEDIA.successStories.platforms[i]
            return (
              <article
                key={`p-${i}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/50 shadow-sm transition hover:border-stone-300 hover:shadow-md"
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
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                    {t(`successStories.platforms.${i}.sector`)}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-stone-900">{t(`successStories.platforms.${i}.title`)}</h4>
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

        <h3 className="mt-20 text-sm font-semibold uppercase tracking-[0.15em] text-primary-800">
          {t('successStories.securityHeading')}
        </h3>
        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          {securityIndices.map((i) => {
            const { image } = MEDIA.successStories.security[i]
            return (
              <article
                key={`s-${i}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/50 shadow-sm transition hover:border-stone-300 hover:shadow-md"
              >
                <div className="aspect-[4/3] bg-stone-200">
                  <img
                    src={image}
                    alt={t(`successStories.security.${i}.imageAlt`)}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                    {t(`successStories.security.${i}.sector`)}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-stone-900">{t(`successStories.security.${i}.title`)}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{t(`successStories.security.${i}.solution`)}</p>
                  <TechPills line={t(`successStories.security.${i}.tech`)} label={techAria} />
                  <p className="mt-3 border-t border-stone-200 pt-3 text-sm font-medium text-stone-800">
                    {t(`successStories.security.${i}.result`)}
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
