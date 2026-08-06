'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { MEDIA } from '@/content/media'

export function LandingHero() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={MEDIA.hero.main}
          alt=""
          fill
          priority
          sizes="100vw"
          className="motion-safe:animate-ken-slow object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-20 md:pb-24 md:pt-32">
        <div className="motion-safe:animate-fade-up max-w-3xl">
          <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t('hero.eyebrow')}
          </p>
          <h1 className="mt-4 max-w-2xl text-balance text-xl font-medium leading-snug tracking-tight text-slate-100 sm:mt-5 sm:text-2xl md:text-3xl md:leading-snug">
            {t('hero.title')} <span className="text-teal-300/95">{t('hero.titleAccent')}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
            <a href="#contacto" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.99] sm:w-auto sm:min-w-[12rem]">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#servicios" className="btn-ghost-light w-full sm:w-auto">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
        aria-hidden
      >
        <span className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
