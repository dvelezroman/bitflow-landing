/**
 * Rutas bajo `public/` — mismo origen que la web, sin depender de Unsplash/Pexels en runtime
 * (evita bloqueos de red, hotlinking o CDN externos).
 *
 * Archivos: `public/images/landing/*`, `public/videos/showcase-workspace.mp4`
 * (stock Unsplash/Pexels descargado al repo; sustituye por tus assets manteniendo nombres si quieres).
 *
 * Mantén la misma cantidad de entradas que `caseStudies.items` y `testimonials.items` en locales.
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
} as const

export const CASE_STUDY_COUNT = MEDIA.caseStudies.length
export const TESTIMONIAL_COUNT = MEDIA.testimonials.length
