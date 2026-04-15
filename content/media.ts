/**
 * Rutas bajo `public/` — mismo origen que la web, sin depender de Unsplash/Pexels en runtime.
 * Mantén alineado el número de ítems en `successStories.platforms` (locales) con las entradas de abajo.
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
  },
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
  },
} as const

/** Debe coincidir con `testimonials.items` en locales (es/en). */
export const TESTIMONIAL_COUNT = 3
export const SUCCESS_PLATFORM_COUNT = MEDIA.successStories.platforms.length
