/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(15 23 42 / 0.06), 0 8px 24px -8px rgb(15 23 42 / 0.08)',
        'soft-lg': '0 4px 16px -4px rgb(15 23 42 / 0.08), 0 16px 40px -12px rgb(15 23 42 / 0.1)',
        glow: '0 0 0 1px rgb(14 165 233 / 0.12), 0 12px 40px -8px rgb(14 165 233 / 0.2)',
      },
    },
  },
  plugins: [],
}
