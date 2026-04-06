/** @type {import('next').NextConfig} */
// Solo landing estática: sin API routes ni SSR en runtime.
// `npm run build` → carpeta `out/`. Previsualizar producción: `npm start` (sirve `out/`). No usar `next start`.
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig


