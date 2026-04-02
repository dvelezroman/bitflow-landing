'use client'

import { useMemo } from 'react'
import { useI18n } from '@/lib/i18n'
import es from '@/locales/es.json'
import en from '@/locales/en.json'
import { PartnerSimpleIcon } from './partner-icons'

const CATEGORY_COUNT = 7

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
      <span className="inline-flex max-w-full items-center gap-2 rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-medium text-stone-800 shadow-sm">
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
    <section id="marcas-alianzas" className="scroll-mt-24 border-b border-stone-200/80 bg-stone-100/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('partners.title')}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">{t('partners.lead')}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {indices.map((i) => {
            const cat = categories[i]
            const title = cat?.title ?? ''
            const items = cat?.items

            return (
              <div
                key={i}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-stone-300 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-stone-900">{title}</h3>
                {items?.length ? (
                  <PartnerItemList items={items} label={tagsAria} />
                ) : (
                  <p className="mt-3 text-sm text-stone-500">—</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
