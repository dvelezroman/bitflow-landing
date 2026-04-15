'use client'

import { useI18n } from '@/lib/i18n'
import { TESTIMONIAL_COUNT } from '@/content/media'

export function LandingTestimonials() {
  const { t } = useI18n()
  const indices = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => i)

  return (
    <section id="testimonios" className="scroll-mt-20 md:scroll-mt-24 border-b border-stone-200/80 bg-white/85 py-16 backdrop-blur-sm sm:py-20 md:py-28 supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
          {t('testimonials.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">{t('testimonials.subtitle')}</p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3 md:gap-6">
          {indices.map((i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-stone-200/80 bg-white/90 p-5 shadow-soft backdrop-blur-sm sm:rounded-3xl sm:p-6"
            >
              <figcaption>
                <span className="block font-semibold text-stone-900">{t(`testimonials.items.${i}.name`)}</span>
                <span className="mt-0.5 block text-sm text-stone-600">{t(`testimonials.items.${i}.role`)}</span>
                <span className="mt-0.5 block text-xs text-stone-500">{t(`testimonials.items.${i}.company`)}</span>
              </figcaption>
              <blockquote className="mt-5 flex-1 text-stone-700 leading-relaxed">
                <span className="text-3xl font-serif leading-none text-stone-300" aria-hidden>
                  &ldquo;
                </span>
                {t(`testimonials.items.${i}.quote`)}
                <span className="sr-only">&rdquo;</span>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
