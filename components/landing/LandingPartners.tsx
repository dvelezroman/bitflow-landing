'use client'

import { useMemo } from 'react'
import { useI18n } from '@/lib/i18n'
import es from '@/locales/es.json'
import en from '@/locales/en.json'
import { PartnerSimpleIcon } from './partner-icons'

const CATEGORY_COUNT = 4

type PartnerItem = { label: string; icon?: string }

function isPartnerAssetPath(s: string): boolean {
  return /^\/images\/partners\/[a-z0-9-]+\.svg$/i.test(s)
}

function PartnerItemRow({ item }: { item: PartnerItem }) {
  const { label, icon } = item
  const hasSimpleIcon = icon && !icon.startsWith('/')
  const assetOk = icon?.startsWith('/') && isPartnerAssetPath(icon)

  return (
    <li>
      <span className="inline-flex max-w-full items-center gap-2 border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800">
        {assetOk ? (
          <img
            src={icon}
            alt=""
            width={80}
            height={24}
            className="h-5 w-auto max-w-[5.5rem] shrink-0 object-contain object-left"
            loading="lazy"
            decoding="async"
          />
        ) : hasSimpleIcon ? (
          <PartnerSimpleIcon slug={icon!} className="h-5 w-5 shrink-0" />
        ) : null}
        <span className="min-w-0 leading-snug">{label}</span>
      </span>
    </li>
  )
}

function PartnerItemList({ items, label }: { items: PartnerItem[]; label: string }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label={label}>
      {items.map((item, j) => (
        <PartnerItemRow key={j} item={item} />
      ))}
    </ul>
  )
}

export function LandingPartners() {
  const { t, language } = useI18n()
  const tagsAria = t('partners.tagsAria')

  const categories = useMemo(() => {
    const bundle = language === 'en' ? en : es
    const raw = bundle.partners.categories
    if (!Array.isArray(raw) || raw.length !== CATEGORY_COUNT) return []
    return raw as { title: string; items?: PartnerItem[]; tags?: string }[]
  }, [language])

  const indices = Array.from({ length: CATEGORY_COUNT }, (_, i) => i)

  return (
    <section id="marcas-alianzas" className="section-pad">
      <div className="section-inner">
        <h2 className="section-title">{t('partners.title')}</h2>
        <p className="section-lead max-w-3xl">{t('partners.lead')}</p>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {indices.map((i) => {
            const cat = categories[i]
            const title = cat?.title ?? ''
            const items = cat?.items

            return (
              <div key={i} className="border-t border-slate-900 pt-5">
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                {items?.length ? (
                  <PartnerItemList items={items} label={tagsAria} />
                ) : (
                  <p className="mt-3 text-sm text-slate-500">—</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
