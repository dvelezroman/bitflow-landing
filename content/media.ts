/**
 * Rutas bajo `public/` — mismo origen que la web, sin depender de Unsplash/Pexels en runtime
 * (evita bloqueos de red, hotlinking o CDN externos).
 *
 * Imágenes de casos de seguridad: `success-sec-home.jpg`, `success-sec-store.jpg`, `success-sec-perimeter.jpg` (temáticas domótica/residencial, comercio CCTV, perímetro).
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
      { image: `${IMG}/success-sec-home.jpg` },
      { image: `${IMG}/success-sec-store.jpg` },
      { image: `${IMG}/success-sec-perimeter.jpg` },
    ] as const,
  },
} as const

export const CASE_STUDY_COUNT = MEDIA.caseStudies.length
export const TESTIMONIAL_COUNT = MEDIA.testimonials.length
export const SUCCESS_PLATFORM_COUNT = MEDIA.successStories.platforms.length
export const SUCCESS_SECURITY_COUNT = MEDIA.successStories.security.length
