'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { SITE } from '@/lib/site'
import { matchChatIntent, normalizeChatInput } from '@/lib/chatbot-intents'

type Role = 'user' | 'assistant'

interface ChatMessage {
  id: string
  role: Role
  text: string
}

function formatAnswerSegments(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) => {
    const m = p.match(/^\*\*([^*]+)\*\*$/)
    if (m) {
      return (
        <strong key={i} className="font-semibold text-stone-900">
          {m[1]}
        </strong>
      )
    }
    return <span key={i}>{p}</span>
  })
}

function typingDelayMs(): number {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 0
  }
  return 400 + Math.floor(Math.random() * 500)
}

function buildContactPayload(
  name: string,
  email: string,
  phone: string,
  message: string,
  lang: string,
): string {
  const n = name.trim()
  const e = email.trim()
  const ph = phone.trim()
  const m = message.trim() || (lang === 'es' ? 'Consulta desde el asistente web.' : 'Inquiry from the web assistant.')
  if (lang === 'es') {
    return `Hola BITFLOW,\n\nNombre: ${n}\nCorreo: ${e || '(no indicado)'}\nTeléfono: ${ph || '(no indicado)'}\n\nConsulta:\n${m}`
  }
  return `Hello BITFLOW,\n\nName: ${n}\nEmail: ${e || '(not provided)'}\nPhone: ${ph || '(not provided)'}\n\nMessage:\n${m}`
}

export function ChatWidget() {
  const { t, language } = useI18n()
  const [open, setOpen] = useState(false)
  const [panelMode, setPanelMode] = useState<'chat' | 'contact'>('chat')
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  const [cName, setCName] = useState('')
  const [cEmail, setCEmail] = useState('')
  const [cPhone, setCPhone] = useState('')
  const [cMessage, setCMessage] = useState('')
  const [contactError, setContactError] = useState(false)

  const scrollToBottom = useCallback(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing, open, panelMode, scrollToBottom])

  useEffect(() => {
    if (open && !greeted) {
      setGreeted(true)
      setMessages([{ id: 'g0', role: 'assistant', text: t('chatbot.greeting') }])
    }
  }, [open, greeted, t])

  const pushAssistant = useCallback(
    (text: string) => {
      const id = `a-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      setMessages((prev) => [...prev, { id, role: 'assistant', text }])
    },
    [setMessages],
  )

  const runReply = useCallback(
    (userVisibleText: string) => {
      const normalized = normalizeChatInput(userVisibleText)
      const answerKey = matchChatIntent(normalized)
      const reply = t(answerKey)
      setTyping(true)
      window.setTimeout(() => {
        setTyping(false)
        pushAssistant(reply)
      }, typingDelayMs())
    },
    [pushAssistant, t],
  )

  const sendUserText = useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      if (!trimmed) return
      const id = `u-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      setMessages((prev) => [...prev, { id, role: 'user', text: trimmed }])
      runReply(trimmed)
    },
    [runReply],
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendUserText(input)
    setInput('')
  }

  const openContact = () => {
    setPanelMode('contact')
    setContactError(false)
  }

  const validateContact = () => {
    const ok = cName.trim() && (cEmail.trim() || cPhone.trim())
    setContactError(!ok)
    return !!ok
  }

  const openWhatsapp = () => {
    if (!validateContact()) return
    const body = buildContactPayload(cName, cEmail, cPhone, cMessage, language)
    const url = `https://wa.me/${SITE.phoneE164Digits}?text=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const openMailto = () => {
    if (!validateContact()) return
    const body = buildContactPayload(cName, cEmail, cPhone, cMessage, language)
    const subject =
      language === 'es' ? 'Consulta desde sitio BITFLOW (asistente)' : 'BITFLOW website inquiry (assistant)'
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const quick = (key: 'quickServices' | 'quickPhilosophy' | 'quickContact' | 'quickPricing') => {
    const label = t(`chatbot.${key}`)
    if (key === 'quickContact') {
      setMessages((prev) => [...prev, { id: `u-${Date.now()}`, role: 'user', text: label }])
      setTyping(true)
      window.setTimeout(() => {
        setTyping(false)
        pushAssistant(t('chatbot.answers.contactPrompt'))
        openContact()
      }, typingDelayMs())
      return
    }
    sendUserText(label)
  }

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-[90] flex flex-col items-end gap-3 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px)+0.5rem)] sm:p-6 sm:pb-6">
      {open && (
        <div
          className="pointer-events-auto flex h-[min(28rem,calc(100vh-7rem))] w-[min(100vw-2rem,22rem)] min-h-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl shadow-stone-900/10"
          role="dialog"
          aria-label={t('chatbot.title')}
        >
          <header className="flex items-center justify-between border-b border-stone-100 bg-stone-900 px-4 py-3 text-white">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary-300">{t('chatbot.subtitle')}</p>
              <p className="text-sm font-semibold">{t('chatbot.title')}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
              }}
              className="rounded-lg px-2 py-1 text-xs text-stone-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              {t('chatbot.close')}
            </button>
          </header>

          {panelMode === 'contact' ? (
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-4">
              <button
                type="button"
                onClick={() => setPanelMode('chat')}
                className="mb-3 self-start text-xs font-medium text-primary-600 hover:text-primary-800"
              >
                ← {t('chatbot.backToChat')}
              </button>
              <h3 className="text-sm font-semibold text-stone-900">{t('chatbot.contactTitle')}</h3>
              <p className="mt-1 text-xs text-stone-600">{t('chatbot.contactHint')}</p>
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700">{t('chatbot.fieldName')}</label>
                  <input
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700">{t('chatbot.fieldEmail')}</label>
                  <input
                    type="email"
                    value={cEmail}
                    onChange={(e) => setCEmail(e.target.value)}
                    autoComplete="email"
                    className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700">{t('chatbot.fieldPhone')}</label>
                  <input
                    type="tel"
                    value={cPhone}
                    onChange={(e) => setCPhone(e.target.value)}
                    autoComplete="tel"
                    className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700">{t('chatbot.fieldMessage')}</label>
                  <textarea
                    value={cMessage}
                    onChange={(e) => setCMessage(e.target.value)}
                    rows={3}
                    className="mt-1 w-full resize-y rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                {contactError && <p className="text-xs text-red-600">{t('chatbot.requiredHint')}</p>}
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    type="button"
                    onClick={openWhatsapp}
                    className="w-full rounded-full bg-emerald-600 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    {t('chatbot.sendWhatsapp')}
                  </button>
                  <button
                    type="button"
                    onClick={openMailto}
                    className="w-full rounded-full border border-stone-300 bg-white py-2.5 text-sm font-medium text-stone-800 transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    {t('chatbot.sendEmail')}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div ref={listRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'rounded-br-md bg-primary-600 text-white'
                          : 'rounded-bl-md border border-stone-100 bg-stone-50 text-stone-800'
                      }`}
                    >
                      <div className={m.role === 'user' ? '' : 'whitespace-pre-wrap'}>
                        {m.role === 'assistant' ? formatAnswerSegments(m.text) : m.text}
                      </div>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-md border border-stone-100 bg-stone-50 px-3 py-2 text-xs text-stone-500">
                      {t('chatbot.typing')}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-stone-100 px-3 pb-3 pt-2">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-stone-400">
                  {t('chatbot.quickLabel')}
                </p>
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {(['quickServices', 'quickPhilosophy', 'quickPricing', 'quickContact'] as const).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => quick(k)}
                      className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-900"
                    >
                      {t(`chatbot.${k}`)}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={openContact}
                  className="mb-2 w-full text-center text-[11px] font-medium text-primary-600 hover:text-primary-800"
                >
                  {t('chatbot.contactFormCta')}
                </button>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('chatbot.placeholder')}
                    className="min-w-0 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    aria-label={t('chatbot.placeholder')}
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-stone-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    {t('chatbot.send')}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v)
          if (!open) setPanelMode('chat')
        }}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-white shadow-lg shadow-stone-900/25 transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-label={open ? t('chatbot.close') : t('chatbot.open')}
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <span className="text-lg font-semibold" aria-hidden>
            BF
          </span>
        )}
      </button>
    </div>
  )
}
