'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export function LandingContact() {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t('contact.success'))
    setName('')
    setEmail('')
    setPhone('')
    setService('')
    setMessage('')
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{t('contact.title')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">{t('contact.subtitle')}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-stone-700">
                  {t('contact.name')}
                </label>
                <input
                  id="nombre"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-stone-700">
                    {t('contact.email')}
                  </label>
                  <input
                    id="correo"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-stone-700">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="telefono"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-stone-700">
                  {t('contact.service')}
                </label>
                <select
                  id="servicio"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                >
                  <option value="">{t('contact.servicePlaceholder')}</option>
                  <option value="software">{t('contact.serviceSoftware')}</option>
                  <option value="consulting">{t('contact.serviceConsulting')}</option>
                  <option value="platforms">{t('contact.servicePlatforms')}</option>
                  <option value="security">{t('contact.serviceSecurity')}</option>
                  <option value="other">{t('contact.serviceOther')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-stone-700">
                  {t('contact.message')}
                </label>
                <textarea
                  id="mensaje"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1.5 w-full resize-y rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 sm:w-auto sm:px-10"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">{t('contact.channelsTitle')}</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <p className="text-xs text-stone-500">{t('contact.emailLabel')}</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-base font-medium text-primary-700 hover:text-primary-800"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs text-stone-500">{t('contact.phoneLabel')}</p>
                  <a href={`tel:+${SITE.phoneE164Digits}`} className="mt-1 block text-base font-medium text-stone-900">
                    {SITE.phoneDisplay}
                  </a>
                </li>
              </ul>
              <a
                href={`https://wa.me/${SITE.phoneE164Digits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-stone-50 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('contact.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
