'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingAbout() {
  const { t } = useI18n()

  return (
    <section id="nosotros" className="section-pad">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-lead">{t('about.description')}</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base">{t('about.paragraph1')}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{t('about.paragraph2')}</p>
            <aside className="mt-8 border-l-2 border-teal-600 pl-5 sm:mt-10">
              <p className="font-semibold text-slate-900">{t('about.highlight')}</p>
              <p className="mt-1 text-sm text-teal-700">{t('about.role')}</p>
            </aside>
          </div>
          <div className="order-1 overflow-hidden bg-slate-200 lg:order-2">
            <Image
              src={MEDIA.about.team}
              alt={t('about.imageAlt')}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[420px]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
