'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingShowcaseVideo() {
  const { t } = useI18n()

  return (
    <section id="experiencia" className="scroll-mt-24 border-b border-stone-200/80 bg-stone-100/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('showcase.title')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('showcase.subtitle')}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 shadow-lg">
          <video
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={MEDIA.showcase.poster}
            aria-label={t('showcase.videoAria')}
          >
            <source src={MEDIA.showcase.videoMp4} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
