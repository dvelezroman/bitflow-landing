'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export function LandingFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-slate-200 bg-white py-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+1.5rem)] sm:py-12 md:pb-12">
      <div className="section-inner">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/company-logos-bitflow/logo-1.png"
              alt="BITFLOW logo"
              width={120}
              height={36}
              className="h-8 w-auto opacity-90"
            />
            <p className="mt-4 text-sm text-slate-600">{t('footer.tagline')}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t('footer.services')}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#servicios" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.services')}
                  </a>
                </li>
                <li>
                  <a href="#trabajo" className="text-slate-600 transition hover:text-slate-900">
                    {t('nav.work')}
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.process')}
                  </a>
                </li>
                <li>
                  <a href="#historia" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.story')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t('footer.company')}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#nosotros" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.about')}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-slate-600 transition hover:text-slate-900">
                    {t('nav.faq')}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t('footer.legal')}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.privacy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 transition hover:text-slate-900">
                    {t('footer.links.terms')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} BITFLOW. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
