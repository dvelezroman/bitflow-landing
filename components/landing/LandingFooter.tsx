'use client'

import { useI18n } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export function LandingFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-stone-200/80 bg-white/90 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+1.5rem)] backdrop-blur-sm sm:py-12 md:pb-12 supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img src={SITE.logoUrl} alt="" className="h-8 w-auto opacity-90" width={120} height={36} />
            <p className="mt-4 text-sm text-stone-600">{t('footer.tagline')}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{t('footer.services')}</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#historia" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.story')}
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.services')}
                  </a>
                </li>
                <li>
                  <a href="#marcas-alianzas" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.partners')}
                  </a>
                </li>
                <li>
                  <a href="#casos" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.cases')}
                  </a>
                </li>
                <li>
                  <a href="#casos-exitosos" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.successStories')}
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.process')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{t('footer.company')}</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#testimonios" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.testimonials')}
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.about')}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{t('footer.legal')}</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.privacy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900">
                    {t('footer.links.terms')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-stone-100 pt-8 text-center text-sm text-stone-500">
          &copy; {new Date().getFullYear()} BITFLOW. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
