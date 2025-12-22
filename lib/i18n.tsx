'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

interface Translations {
  [key: string]: string | Translations
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    // Cargar traducciones
    import(`../locales/${language}.json`)
      .then((mod) => setTranslations(mod.default))
      .catch(() => setTranslations({}))
  }, [language])

  useEffect(() => {
    // Guardar preferencia en localStorage
    const savedLang = localStorage.getItem('bitflow-language') as Language
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguageState(savedLang)
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLang
      }
    } else if (typeof document !== 'undefined') {
      document.documentElement.lang = 'es'
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('bitflow-language', lang)
    // Actualizar el atributo lang del HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

