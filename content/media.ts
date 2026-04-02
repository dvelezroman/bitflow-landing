/**
 * Rutas bajo `public/` — mismo origen que la web, sin depender de Unsplash/Pexels en runtime
 * (evita bloqueos de red, hotlinking o CDN externos).
 *
 * Vídeos seguridad: `success-domotics.mp4`, `success-alarm-cctv.mp4`, `success-perimeter.mp4` (Pexels — temática domótica, instalación CCTV, perímetro).
 * También: `public/videos/showcase-workspace.mp4`
 * (stock Unsplash/Pexels descargado al repo; sustituye por tus assets manteniendo nombres si quieres).
 *
 * Mantén alineado el número de ítems en `successStories` (locales) con las entradas de abajo.
 */

const IMG = '/images/landing'

export const MEDIA = {
  hero: {
    main: `${IMG}/hero-main.jpg`,
    secondary: `${IMG}/hero-secondary.jpg`,
  },
  services: {
    software: `${IMG}/service-software.jpg`,
    consulting: `${IMG}/service-consulting.jpg`,
    platforms: `${IMG}/service-platforms.jpg`,
    security: `${IMG}/service-security.jpg`,
  },
  showcase: {
    poster: `${IMG}/showcase-poster.jpg`,
    videoMp4: '/videos/showcase-workspace.mp4',
  },
  caseStudies: [
    { image: `${IMG}/case-warehouse.jpg` },
    { image: `${IMG}/case-fintech.jpg` },
    { image: `${IMG}/case-security.jpg` },
  ] as const,
  testimonials: [
    { avatar: `${IMG}/avatar-1.jpg` },
    { avatar: `${IMG}/avatar-2.jpg` },
    { avatar: `${IMG}/avatar-3.jpg` },
  ] as const,
  about: {
    team: `${IMG}/about-team.jpg`,
  },
  successStories: {
    platforms: [
      { image: `${IMG}/success-edu.jpg` },
      { image: `${IMG}/success-retail.jpg` },
      { image: `${IMG}/success-agro.jpg` },
      { image: `${IMG}/success-health.jpg` },
      { image: `${IMG}/success-logistics.jpg` },
    ] as const,
    security: [
      { image: `${IMG}/success-sec-home.jpg`, video: '/videos/success-domotics.mp4' },
      { image: `${IMG}/success-sec-store.jpg`, video: '/videos/success-alarm-cctv.mp4' },
      { image: `${IMG}/success-sec-perimeter.jpg`, video: '/videos/success-perimeter.mp4' },
    ] as const,
  },
} as const

export const CASE_STUDY_COUNT = MEDIA.caseStudies.length
export const TESTIMONIAL_COUNT = MEDIA.testimonials.length
export const SUCCESS_PLATFORM_COUNT = MEDIA.successStories.platforms.length
export const SUCCESS_SECURITY_COUNT = MEDIA.successStories.security.length
