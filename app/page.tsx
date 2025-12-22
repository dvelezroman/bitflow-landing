'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email
    alert('¡Gracias por tu interés! Te contactaremos pronto.')
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
            <div className="hidden md:flex space-x-8">
              <a href="#proyectos" className="text-gray-700 hover:text-primary-600 transition">Proyectos</a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-primary-600 transition">Características</a>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-primary-600 transition">Sobre Nosotros</a>
              <a href="#precios" className="text-gray-700 hover:text-primary-600 transition">Precios</a>
              <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition">Contacto</a>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Comenzar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Notificaciones Instantáneas
              <span className="block text-primary-600">que Transforman tu Negocio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              BITFLOW Notificador es uno de nuestros proyectos innovadores. Una plataforma líder en mensajería empresarial 
              que permite enviar alertas, eventos y propaganda a tus clientes de forma rápida, segura y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg">
                Prueba Gratis
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition">
                Ver Demo
              </button>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50M+</div>
                <div className="text-sm">Mensajes Enviados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm">Uptime</div>
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
              Nuestros Proyectos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              BITFLOW desarrolla soluciones tecnológicas innovadoras para empresas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-primary-600 bg-primary-50 relative">
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Disponible
              </div>
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BITFLOW Notificador</h3>
              <p className="text-gray-600 mb-4">
                Plataforma de notificaciones instantáneas por mensajería. Envía alertas, eventos y 
                propaganda a tus clientes de forma eficiente y segura.
              </p>
              <a href="#caracteristicas" className="text-primary-600 font-semibold hover:text-primary-700 transition">
                Conocer más →
              </a>
            </div>
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50 relative">
              <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Próximamente
              </div>
              <div className="w-16 h-16 bg-gray-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Más Proyectos</h3>
              <p className="text-gray-600 mb-4">
                Estamos trabajando en nuevos proyectos innovadores que estarán disponibles próximamente. 
                Mantente al día con nuestras actualizaciones.
              </p>
              <span className="text-gray-500 font-semibold">Próximamente</span>
            </div>
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50 relative">
              <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                En Producción
              </div>
              <div className="w-16 h-16 bg-gray-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proyectos en Desarrollo</h3>
              <p className="text-gray-600 mb-4">
                Tenemos varios proyectos en producción que se lanzarán en los próximos meses. 
                Cada uno diseñado para resolver problemas empresariales específicos.
              </p>
              <span className="text-gray-500 font-semibold">En desarrollo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características Potentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas para comunicarte eficientemente con tus clientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Envío Instantáneo</h3>
              <p className="text-gray-600">
                Tus mensajes llegan en menos de un segundo. Tecnología de última generación 
                para garantizar la máxima velocidad de entrega.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguridad Avanzada</h3>
              <p className="text-gray-600">
                Encriptación end-to-end y cumplimiento con GDPR. Tus datos y los de tus clientes 
                están completamente protegidos.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics en Tiempo Real</h3>
              <p className="text-gray-600">
                Dashboard completo con métricas detalladas. Conoce el rendimiento de tus campañas 
                y optimiza tus estrategias de comunicación.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Canal</h3>
              <p className="text-gray-600">
                SMS, WhatsApp, Telegram y más. Envía tus mensajes por el canal que prefieran tus clientes.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API Potente</h3>
              <p className="text-gray-600">
                Integración sencilla con tu sistema existente. API RESTful documentada y SDKs 
                para los lenguajes más populares.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Programación Inteligente</h3>
              <p className="text-gray-600">
                Programa tus mensajes con antelación. Automatiza tus campañas y ahorra tiempo 
                valioso en tu día a día.
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
              Sobre BITFLOW
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovación tecnológica al servicio de las empresas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transformando la Comunicación Empresarial
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                BITFLOW es una empresa tecnológica dedicada al desarrollo de soluciones innovadoras 
                que ayudan a las empresas a mejorar su comunicación y eficiencia operativa.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro proyecto estrella, BITFLOW Notificador, es una plataforma de mensajería 
                instantánea que permite a las empresas enviar notificaciones, alertas y propaganda 
                de forma rápida y eficiente a sus clientes.
              </p>
              <p className="text-lg text-gray-600">
                Actualmente tenemos varios proyectos en producción que se lanzarán próximamente, 
                cada uno diseñado para resolver desafíos específicos del mundo empresarial moderno.
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
                  Ing. Dario Velez Roman, Ms.
                </h4>
                <p className="text-primary-600 font-semibold mb-4">CEO & Fundador</p>
                <p className="text-gray-600">
                  Ingeniero con Maestría, lidera BITFLOW con visión innovadora y compromiso 
                  con la excelencia tecnológica. Su experiencia y liderazgo han sido fundamentales 
                  en el desarrollo de nuestras soluciones empresariales.
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
              ¿Por qué Elegir BITFLOW?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La solución completa para tus necesidades de comunicación empresarial
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Aumenta tu ROI</h3>
                    <p className="text-gray-600">
                      Las notificaciones instantáneas tienen una tasa de apertura del 98%, 
                      mucho mayor que el email tradicional. Maximiza el impacto de tus campañas.
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ahorra Tiempo y Recursos</h3>
                    <p className="text-gray-600">
                      Automatiza tus comunicaciones y libera a tu equipo para tareas más estratégicas. 
                      Nuestra plataforma hace el trabajo pesado por ti.
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Escalabilidad Ilimitada</h3>
                    <p className="text-gray-600">
                      Desde startups hasta grandes corporaciones. Nuestra infraestructura 
                      crece contigo sin límites.
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
                    <p className="text-gray-600">
                      Nuestro equipo de expertos está disponible en todo momento para ayudarte 
                      a sacar el máximo provecho de la plataforma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Mensajes Enviados Hoy</span>
                  <span className="text-2xl font-bold text-primary-600">1,234,567</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Tasa de Entrega</span>
                  <span className="text-2xl font-bold text-green-600">99.8%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Tiempo Promedio</span>
                  <span className="text-2xl font-bold text-primary-600">0.3s</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Clientes Activos</span>
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
              Planes que se Adaptan a Ti
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige el plan perfecto para tu negocio. Todos incluyen prueba gratuita de 14 días.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-600 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">€29</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">10,000 mensajes/mes</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Soporte por email</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">API básica</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Dashboard básico</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Comenzar
              </button>
            </div>
            <div className="p-8 rounded-2xl border-2 border-primary-600 bg-primary-50 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">€99</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">100,000 mensajes/mes</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Soporte prioritario</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">API completa</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Analytics avanzados</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Programación avanzada</span>
                </li>
              </ul>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Comenzar
              </button>
            </div>
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-600 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Personalizado</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Mensajes ilimitados</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Soporte 24/7 dedicado</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">SLA garantizado</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Onboarding personalizado</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Cuenta manager dedicado</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Comunicación?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Únete a miles de empresas que ya confían en BITFLOW Notificador para sus notificaciones instantáneas
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition shadow-lg">
            Comenzar Prueba Gratuita
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Enviar Mensaje
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="text-primary-600 font-semibold">contacto@bitflow.com</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Teléfono</div>
                  <div className="text-primary-600 font-semibold">+34 900 123 456</div>
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
                La plataforma líder en notificaciones instantáneas para empresas de todos los tamaños.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#caracteristicas" className="hover:text-white transition">Características</a></li>
                <li><a href="#precios" className="hover:text-white transition">Precios</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
                <li><a href="#" className="hover:text-white transition">Documentación</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre-nosotros" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#proyectos" className="hover:text-white transition">Proyectos</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} BITFLOW. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

