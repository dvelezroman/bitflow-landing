'use client'

import { useI18n } from '@/lib/i18n'
import { TESTIMONIAL_COUNT } from '@/content/media'

export function LandingTestimonials() {
  const { t } = useI18n()
  const indices = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => i)

  return (
    <section id="testimonios" className="section-pad bg-white/70">
      <div className="section-inner">
        <h2 className="section-title">{t('testimonials.title')}</h2>
        <p className="section-lead">{t('testimonials.subtitle')}</p>

        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3 md:gap-10">
          {indices.map((i) => (
            <figure key={i} className="flex flex-col border-t border-slate-900 pt-6">
              <blockquote className="flex-1 text-base leading-relaxed text-slate-700">
                <span className="font-display text-3xl leading-none text-teal-600/40" aria-hidden>
                  &ldquo;
                </span>
                {t(`testimonials.items.${i}.quote`)}
                <span className="sr-only">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold text-slate-900">{t(`testimonials.items.${i}.name`)}</span>
                <span className="mt-0.5 block text-sm text-slate-600">{t(`testimonials.items.${i}.role`)}</span>
                <span className="mt-0.5 block text-xs text-slate-500">{t(`testimonials.items.${i}.company`)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
