'use client'

import { useI18n } from '@/lib/i18n'
import { MEDIA, TESTIMONIAL_COUNT } from '@/content/media'

export function LandingTestimonials() {
  const { t } = useI18n()
  const indices = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => i)

  return (
    <section id="testimonios" className="scroll-mt-24 border-b border-stone-200/80 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('testimonials.title')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('testimonials.subtitle')}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {indices.map((i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50/80 p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={MEDIA.testimonials[i].avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white"
                  loading="lazy"
                />
                <div>
                  <figcaption className="font-semibold text-stone-900">{t(`testimonials.items.${i}.name`)}</figcaption>
                  <p className="text-sm text-stone-600">{t(`testimonials.items.${i}.role`)}</p>
                  <p className="text-xs text-stone-500">{t(`testimonials.items.${i}.company`)}</p>
                </div>
              </div>
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
