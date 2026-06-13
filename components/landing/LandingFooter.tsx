'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export function LandingFooter() {
  const { t } = useI18n()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070d] py-12 pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+1.5rem)] sm:py-14 md:pb-14">
      <div className="absolute inset-x-0 top-0 h-px pointer-events-none bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute rounded-full pointer-events-none -left-28 top-6 h-72 w-72 bg-blue-600/15 blur-3xl" />
      <div className="absolute bottom-0 rounded-full pointer-events-none -right-28 h-80 w-80 bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_36%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 2xl:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Image
              src="/images/company-logos-bitflow/logo-2.png"
              alt="BITFLOW logo"
              width={120}
              height={36}
              className="w-auto h-8 opacity-95"
            />

            <p className="max-w-sm mt-5 text-sm leading-6 text-stone-200">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-14 xl:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                {t('footer.services')}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#historia" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.story')}
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.services')}
                  </a>
                </li>
                <li>
                  <a href="#marcas-alianzas" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.partners')}
                  </a>
                </li>
                <li>
                  <a href="#casos-exitosos" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.successStories')}
                  </a>
                </li>
                <li>
                  <a href="#proyectos-bitflow" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.projects')}
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.process')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                {t('footer.company')}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#testimonios" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.testimonials')}
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.about')}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                {t('footer.legal')}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.privacy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition text-stone-400 hover:text-white">
                    {t('footer.links.terms')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="text-sm text-center text-white">
            &copy; {new Date().getFullYear()} BITFLOW. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}