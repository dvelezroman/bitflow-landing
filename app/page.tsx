'use client'

import { useI18n } from '@/lib/i18n'
import {
  LandingIntro,
  LandingHeader,
  LandingHero,
  LandingStory,
  LandingServices,
  LandingPartners,
  LandingShowcaseFlow,
  LandingSuccessStories,
  LandingProjects,
  LandingProcess,
  LandingTestimonials,
  LandingAbout,
  LandingCta,
  LandingFaq,
  LandingContact,
  LandingFooter,
} from '@/components/landing'
import { ChatWidget } from '@/components/chatbot/ChatWidget'

export default function Home() {
  const { language } = useI18n()

  return (
    <main className="page-backdrop relative min-h-dvh overflow-x-hidden text-stone-900">
      <LandingIntro />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <LandingHeader />

      <div id="contenido">
        <LandingHero />
        <LandingStory />
        <LandingServices />
        <LandingPartners />
        <LandingShowcaseFlow />
        <LandingSuccessStories />
        <LandingProjects />
        <LandingProcess />
        <LandingTestimonials />
        <LandingAbout />
        <LandingCta />
        <LandingFaq />
        <LandingContact />
      </div>

      <LandingFooter />

      <ChatWidget />
    </main>
  )
}
