'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

export default function Home() {
  const { t, language, setLanguage } = useI18n()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email
    alert(t('contact.success'))
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png" 
                alt="BITFLOW Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#proyectos" className="text-gray-700 hover:text-primary-600 transition">{t('nav.projects')}</a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-primary-600 transition">{t('nav.features')}</a>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-primary-600 transition">{t('nav.about')}</a>
              <a href="#precios" className="text-gray-700 hover:text-primary-600 transition">{t('nav.pricing')}</a>
              <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition">{t('nav.contact')}</a>
              <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1 rounded text-sm font-medium transition ${
                    language === 'es' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded text-sm font-medium transition ${
                    language === 'en' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              {t('nav.start')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
              <span className="block text-primary-600">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg">
                {t('hero.tryFree')}
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition">
                {t('hero.viewDemo')}
              </button>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm">{t('hero.companies')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50M+</div>
                <div className="text-sm">{t('hero.messagesSent')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm">{t('hero.uptime')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-primary-600 bg-primary-50 relative">
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t('projects.available')}
              </div>
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('projects.notifier.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('projects.notifier.description')}
              </p>
              <a href="#caracteristicas" className="text-primary-600 font-semibold hover:text-primary-700 transition">
                {t('projects.notifier.learnMore')}
              </a>
            </div>
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50 relative">
              <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t('projects.comingSoon')}
              </div>
              <div className="w-16 h-16 bg-gray-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('projects.moreProjects.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('projects.moreProjects.description')}
              </p>
              <span className="text-gray-500 font-semibold">{t('projects.comingSoon')}</span>
            </div>
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50 relative">
              <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t('projects.inProduction')}
              </div>
              <div className="w-16 h-16 bg-gray-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('projects.inDevelopment.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('projects.inDevelopment.description')}
              </p>
              <span className="text-gray-500 font-semibold">{t('projects.inProduction')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.instantDelivery.title')}</h3>
              <p className="text-gray-600">
                {t('features.instantDelivery.description')}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.security.title')}</h3>
              <p className="text-gray-600">
                {t('features.security.description')}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.analytics.title')}</h3>
              <p className="text-gray-600">
                {t('features.analytics.description')}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.multichannel.title')}</h3>
              <p className="text-gray-600">
                {t('features.multichannel.description')}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.api.title')}</h3>
              <p className="text-gray-600">
                {t('features.api.description')}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.scheduling.title')}</h3>
              <p className="text-gray-600">
                {t('features.scheduling.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.heading')}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('about.paragraph3')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('about.ceo.name')}
                </h4>
                <p className="text-primary-600 font-semibold mb-4">{t('about.ceo.title')}</p>
                <p className="text-gray-600">
                  {t('about.ceo.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('benefits.roi.title')}</h3>
                    <p className="text-gray-600">
                      {t('benefits.roi.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('benefits.saveTime.title')}</h3>
                    <p className="text-gray-600">
                      {t('benefits.saveTime.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('benefits.scalability.title')}</h3>
                    <p className="text-gray-600">
                      {t('benefits.scalability.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('benefits.support.title')}</h3>
                    <p className="text-gray-600">
                      {t('benefits.support.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{t('benefits.stats.messagesToday')}</span>
                  <span className="text-2xl font-bold text-primary-600">1,234,567</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{t('benefits.stats.deliveryRate')}</span>
                  <span className="text-2xl font-bold text-green-600">99.8%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{t('benefits.stats.avgTime')}</span>
                  <span className="text-2xl font-bold text-primary-600">0.3s</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{t('benefits.stats.activeClients')}</span>
                  <span className="text-2xl font-bold text-primary-600">10,234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('pricing.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-600 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.starter.name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">€29</span>
                <span className="text-gray-600">{t('pricing.starter.price')}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.starter.features.messages')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.starter.features.support')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.starter.features.api')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.starter.features.dashboard')}</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                {t('pricing.starter.button')}
              </button>
            </div>
            <div className="p-8 rounded-2xl border-2 border-primary-600 bg-primary-50 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
                {t('pricing.professional.badge')}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.professional.name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">€99</span>
                <span className="text-gray-600">{t('pricing.professional.price')}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.professional.features.messages')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.professional.features.support')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.professional.features.api')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.professional.features.analytics')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.professional.features.scheduling')}</span>
                </li>
              </ul>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                {t('pricing.professional.button')}
              </button>
            </div>
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-600 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.enterprise.name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{t('pricing.enterprise.price')}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.enterprise.features.unlimited')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.enterprise.features.support')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.enterprise.features.sla')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.enterprise.features.onboarding')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{t('pricing.enterprise.features.manager')}</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                {t('pricing.enterprise.button')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('cta.description')}
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition shadow-lg">
            {t('cta.button')}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.description')}
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder={t('contact.messagePlaceholder')}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                {t('contact.send')}
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-600 mb-1">{t('contact.emailLabel')}</div>
                  <div className="text-primary-600 font-semibold">ventas@bitflow.bid</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">{t('contact.phoneLabel')}</div>
                  <div className="text-primary-600 font-semibold">+593 988541665</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://bitflow-public.s3.us-east-1.amazonaws.com/Bitflow-logo.png" 
                alt="BITFLOW Logo" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#caracteristicas" className="hover:text-white transition">{t('footer.links.features')}</a></li>
                <li><a href="#precios" className="hover:text-white transition">{t('footer.links.pricing')}</a></li>
                <li><a href="#" className="hover:text-white transition">{t('footer.links.api')}</a></li>
                <li><a href="#" className="hover:text-white transition">{t('footer.links.docs')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre-nosotros" className="hover:text-white transition">{t('footer.links.about')}</a></li>
                <li><a href="#proyectos" className="hover:text-white transition">{t('footer.links.projects')}</a></li>
                <li><a href="#" className="hover:text-white transition">{t('footer.links.blog')}</a></li>
                <li><a href="#contacto" className="hover:text-white transition">{t('footer.links.contact')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">{t('footer.links.privacy')}</a></li>
                <li><a href="#" className="hover:text-white transition">{t('footer.links.terms')}</a></li>
                <li><a href="#" className="hover:text-white transition">{t('footer.links.cookies')}</a></li>
                <li><a href="#" className="hover:text-white transition">{t('footer.links.gdpr')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} BITFLOW. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

