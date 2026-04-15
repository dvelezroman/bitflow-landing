'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { SITE } from '@/lib/site'

/**
 * Pantalla de bienvenida al cargar la landing: logo BITFLOW con efecto moderno.
 * Respeta prefers-reduced-motion y libera el scroll del body al terminar.
 */
export function LandingIntro() {
  const [show, setShow] = useState(true)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const reducedRef = useRef(false)
  const exitFallbackRef = useRef<number | null>(null)
  const finishedRef = useRef(false)
  const [exitMs, setExitMs] = useState(650)

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    setShow(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedRef.current = mq.matches
    const transitionMs = mq.matches ? 180 : 650
    setExitMs(transitionMs)

    document.body.style.overflow = 'hidden'

    const holdMs = mq.matches ? 380 : 1700

    const startExit = () => {
      setPhase('out')
      exitFallbackRef.current = window.setTimeout(() => {
        finish()
      }, transitionMs + 150)
    }

    const id = window.setTimeout(startExit, holdMs)

    return () => {
      window.clearTimeout(id)
      if (exitFallbackRef.current) window.clearTimeout(exitFallbackRef.current)
      document.body.style.overflow = ''
    }
  }, [finish])

  const onOverlayTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return
      if (e.propertyName !== 'opacity') return
      if (phase !== 'out') return
      if (exitFallbackRef.current) {
        window.clearTimeout(exitFallbackRef.current)
        exitFallbackRef.current = null
      }
      finish()
    },
    [phase, finish],
  )

  if (!show) return null

  const spinning = !reducedRef.current

  return (
    <div
      aria-hidden
      role="presentation"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center px-6 transition-[opacity,transform,filter] ease-out ${
        phase === 'out'
          ? 'pointer-events-none opacity-0 blur-sm scale-[1.02]'
          : 'opacity-100 blur-0 scale-100'
      }`}
      style={{
        transitionDuration: `${exitMs}ms`,
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      onTransitionEnd={onOverlayTransitionEnd}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-stone-950 via-slate-900 to-stone-950"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgb(14_165_233/0.25),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgb(99_102_241/0.12),transparent_50%)]"
        aria-hidden
      />

      <div
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/25 blur-[80px] ${
          spinning ? 'motion-safe:animate-pulse' : ''
        }`}
        aria-hidden
      />

      <div
        className={`relative z-10 flex flex-col items-center ${
          spinning ? 'motion-safe:animate-[intro-logo-in_0.95s_cubic-bezier(0.22,1,0.36,1)_both]' : ''
        }`}
      >
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
          {spinning ? (
            <div
              className="absolute inset-[-2px] overflow-hidden rounded-3xl motion-safe:animate-[intro-orbit_10s_linear_infinite]"
              aria-hidden
            >
              <div
                className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    'conic-gradient(from 0deg at 50% 50%, #0ea5e9, #7dd3fc, #818cf8, #38bdf8, #0ea5e9)',
                }}
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 rounded-3xl ring-2 ring-primary-500/35 ring-offset-2 ring-offset-stone-950"
              aria-hidden
            />
          )}
          <div className="relative z-10 flex h-[calc(100%-5px)] w-[calc(100%-5px)] items-center justify-center rounded-[1.35rem] bg-stone-950 shadow-[0_0_60px_-12px_rgb(14_165_233/0.45)] ring-1 ring-white/10">
            <img
              src={SITE.logoUrl}
              alt=""
              width={200}
              height={64}
              className="h-14 w-auto max-w-[85%] object-contain drop-shadow-[0_0_24px_rgb(255_255_255/0.12)] sm:h-16"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div
          className="relative mt-8 h-px w-40 overflow-hidden rounded-full bg-white/10 sm:w-48"
          aria-hidden
        >
          <div
            className={`h-full w-[45%] max-w-[12rem] rounded-full bg-gradient-to-r from-transparent via-primary-400 to-transparent ${
              spinning ? 'motion-safe:animate-[intro-scan_1.8s_ease-in-out_infinite]' : 'mx-auto opacity-70'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
