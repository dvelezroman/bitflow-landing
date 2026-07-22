'use client'

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { useI18n } from '@/lib/i18n'
import { SITE } from '@/lib/site'
import { CONTACT_ANSWER_KEY, matchChatIntent, normalizeChatInput } from '@/lib/chatbot-intents'
import Image from 'next/image'
import { X } from 'lucide-react'

type Role = 'user' | 'assistant'

interface ChatMessage {
  id: string
  role: Role
  text: string
}

function formatAnswerSegments(text: string, onNavigate?: () => void) {
  const nodes: ReactNode[] = []
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\((#[^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>)
    }
    if (match[1]) {
      nodes.push(
        <strong key={`b-${match.index}`} className="font-semibold text-stone-900">
          {match[1]}
        </strong>,
      )
    } else if (match[2] && match[3]) {
      nodes.push(
        <a
          key={`a-${match.index}`}
          href={match[3]}
          className="font-medium text-primary-700 underline underline-offset-2 hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          onClick={() => onNavigate?.()}
        >
          {match[2]}
        </a>,
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex)}</span>)
  }

  return nodes.length > 0 ? nodes : text
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
  const m =
    message.trim() ||
    (lang === 'es' ? 'Consulta desde el chat del sitio.' : 'Inquiry from the site chat.')
  if (lang === 'es') {
    return `Hola BITFLOW,\n\nNombre: ${n}\nCorreo: ${e || '(no indicado)'}\nTeléfono: ${ph || '(no indicado)'}\n\nConsulta:\n${m}`
  }
  return `Hi BITFLOW,\n\nName: ${n}\nEmail: ${e || '(not provided)'}\nPhone: ${ph || '(not provided)'}\n\nMessage:\n${m}`
}

export function ChatWidget() {
  const { t, language } = useI18n()
  const titleId = useId()
  const [open, setOpen] = useState(false)
  const [panelMode, setPanelMode] = useState<'chat' | 'contact'>('chat')
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const listRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nameFieldRef = useRef<HTMLInputElement>(null)
  const replyTimerRef = useRef<number | null>(null)

  const [cName, setCName] = useState('')
  const [cEmail, setCEmail] = useState('')
  const [cPhone, setCPhone] = useState('')
  const [cMessage, setCMessage] = useState('')
  const [contactError, setContactError] = useState(false)

  const scrollToBottom = useCallback(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  const clearReplyTimer = useCallback(() => {
    if (replyTimerRef.current !== null) {
      window.clearTimeout(replyTimerRef.current)
      replyTimerRef.current = null
    }
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

  useEffect(() => {
    if (!open) return

    const focusTarget =
      panelMode === 'contact' ? nameFieldRef.current : inputRef.current
    focusTarget?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        launcherRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, panelMode])

  useEffect(() => () => clearReplyTimer(), [clearReplyTimer])

  const pushAssistant = useCallback((text: string) => {
    const id = `a-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    setMessages((prev) => [...prev, { id, role: 'assistant', text }])
  }, [])

  const openContactPanel = useCallback(() => {
    setPanelMode('contact')
    setContactError(false)
  }, [])

  const runReply = useCallback(
    (userVisibleText: string) => {
      const normalized = normalizeChatInput(userVisibleText)
      const { answerKey, openContact } = matchChatIntent(normalized)
      const reply = t(answerKey)
      setTyping(true)
      clearReplyTimer()
      replyTimerRef.current = window.setTimeout(() => {
        replyTimerRef.current = null
        setTyping(false)
        pushAssistant(reply)
        if (openContact || answerKey === CONTACT_ANSWER_KEY) {
          openContactPanel()
        }
      }, typingDelayMs())
    },
    [clearReplyTimer, openContactPanel, pushAssistant, t],
  )

  const sendUserText = useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      if (!trimmed || typing) return
      const id = `u-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      setMessages((prev) => [...prev, { id, role: 'user', text: trimmed }])
      runReply(trimmed)
    },
    [runReply, typing],
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendUserText(input)
    setInput('')
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
      language === 'es'
        ? 'Consulta desde el chat BITFLOW'
        : 'BITFLOW chat inquiry'
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const quick = (key: 'quickServices' | 'quickPhilosophy' | 'quickContact' | 'quickPricing' | 'quickFaq') => {
    const label = t(`chatbot.${key}`)
    if (key === 'quickContact') {
      if (typing) return
      setMessages((prev) => [...prev, { id: `u-${Date.now()}`, role: 'user', text: label }])
      setTyping(true)
      clearReplyTimer()
      replyTimerRef.current = window.setTimeout(() => {
        replyTimerRef.current = null
        setTyping(false)
        pushAssistant(t(CONTACT_ANSWER_KEY))
        openContactPanel()
      }, typingDelayMs())
      return
    }
    sendUserText(label)
  }

  const closePanel = () => {
    setOpen(false)
    clearReplyTimer()
    setTyping(false)
    queueMicrotask(() => launcherRef.current?.focus())
  }

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-[90] flex flex-col items-end gap-3 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px)+0.5rem)] sm:p-6 sm:pb-6">
      {open && (
        <div
          ref={panelRef}
          className="pointer-events-auto flex h-[min(28rem,calc(100vh-7rem))] w-[min(100vw-2rem,22rem)] min-h-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl shadow-stone-900/10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <header className="flex items-center justify-between border-b border-stone-100 bg-stone-900 px-4 py-3 text-white">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary-300">{t('chatbot.subtitle')}</p>
              <p id={titleId} className="text-sm font-semibold">
                {t('chatbot.title')}
              </p>
            </div>
            <button
              type="button"
              onClick={closePanel}
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
                className="mb-3 self-start text-xs font-medium text-primary-600 hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                ← {t('chatbot.backToChat')}
              </button>
              <h3 className="text-sm font-semibold text-stone-900">{t('chatbot.contactTitle')}</h3>
              <p className="mt-1 text-xs text-stone-600">{t('chatbot.contactHint')}</p>
              <div className="mt-4 space-y-3">
                <div>
                  <label htmlFor="chat-contact-name" className="block text-xs font-medium text-stone-700">
                    {t('chatbot.fieldName')}
                  </label>
                  <input
                    ref={nameFieldRef}
                    id="chat-contact-name"
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="chat-contact-email" className="block text-xs font-medium text-stone-700">
                    {t('chatbot.fieldEmail')}
                  </label>
                  <input
                    id="chat-contact-email"
                    type="email"
                    value={cEmail}
                    onChange={(e) => setCEmail(e.target.value)}
                    autoComplete="email"
                    className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="chat-contact-phone" className="block text-xs font-medium text-stone-700">
                    {t('chatbot.fieldPhone')}
                  </label>
                  <input
                    id="chat-contact-phone"
                    type="tel"
                    value={cPhone}
                    onChange={(e) => setCPhone(e.target.value)}
                    autoComplete="tel"
                    className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="chat-contact-message" className="block text-xs font-medium text-stone-700">
                    {t('chatbot.fieldMessage')}
                  </label>
                  <textarea
                    id="chat-contact-message"
                    value={cMessage}
                    onChange={(e) => setCMessage(e.target.value)}
                    rows={3}
                    className="mt-1 w-full resize-y rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                {contactError && (
                  <p role="alert" className="text-xs text-red-600">
                    {t('chatbot.requiredHint')}
                  </p>
                )}
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
              <div
                ref={listRef}
                className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4"
                aria-live="polite"
                aria-relevant="additions"
              >
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
                        {m.role === 'assistant'
                          ? formatAnswerSegments(m.text, () => setOpen(false))
                          : m.text}
                      </div>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start" aria-hidden={false}>
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
                  {(
                    ['quickServices', 'quickPhilosophy', 'quickPricing', 'quickFaq', 'quickContact'] as const
                  ).map((k) => (
                    <button
                      key={k}
                      type="button"
                      disabled={typing}
                      onClick={() => quick(k)}
                      className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-900 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {t(`chatbot.${k}`)}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={openContactPanel}
                  className="mb-2 w-full text-center text-[11px] font-medium text-primary-600 hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {t('chatbot.contactFormCta')}
                </button>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('chatbot.placeholder')}
                    disabled={typing}
                    className="min-w-0 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-60"
                    aria-label={t('chatbot.placeholder')}
                  />
                  <button
                    type="submit"
                    disabled={typing || !input.trim()}
                    className="shrink-0 rounded-xl bg-stone-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
        ref={launcherRef}
        type="button"
        onClick={() => {
          setOpen((v) => {
            if (v) {
              clearReplyTimer()
              setTyping(false)
            } else {
              setPanelMode('chat')
            }
            return !v
          })
        }}
        className={`pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
          open
            ? 'bg-stone-900 shadow-stone-900/25 hover:bg-stone-800'
            : 'bg-blue-600 shadow-blue-600/30 hover:bg-blue-500'
        }`}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? t('chatbot.close') : t('chatbot.open')}
      >
        {open ? (
          <X className="h-6 w-6 transition-all duration-200 ease-out" strokeWidth={2.2} aria-hidden />
        ) : (
          <Image
            src="/images/company-logos-bitflow/logo-no_text-2.png"
            alt="BITFLOW chatbot"
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain transition-all duration-200 ease-out"
          />
        )}
      </button>
    </div>
  )
}
