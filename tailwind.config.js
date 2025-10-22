/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'megogo-dark': '#0a0a0a',
        'megogo-gray': '#1a1a1a',
        'megogo-light-gray': '#2a2a2a',
        'megogo-purple': '#8b5cf6',
        'megogo-blue': '#3b82f6',
        'megogo-orange': '#f97316',
        'megogo-red': '#ef4444',
        'megogo-text-gray': '#9ca3af',
        'megogo-border': '#374151'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)'
      }
    },
  },
  plugins: [],
}