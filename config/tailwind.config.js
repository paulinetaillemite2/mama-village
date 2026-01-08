/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.html.haml',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        'blush': '#F2AAE2',
        'lime-cream': '#DFFFA5',
        'sky-reflection': '#6FB0D0',
        'sky-reflection-10': 'rgba(111, 176, 208, 0.1)',
        'sky-reflection-20': 'rgba(111, 176, 208, 0.2)',
        'sky-reflection-41': 'rgba(111, 176, 208, 0.41)',
        'sky-reflection-50': 'rgba(111, 176, 208, 0.5)',
        'deep-mocha': '#403633',
        'deep-mocha-60': 'rgba(64, 54, 51, 0.6)',
        'deep-mocha-70': 'rgba(64, 54, 51, 0.7)',
        'deep-mocha-100': '#403633',
        'tea-green': '#C9FED3',
        'tan': '#D0B993',
        'crimson-carrot': '#FA4B02',
        
        // Couleurs sémantiques
        'primary': '#6FB0D0',
        'secondary': '#FA4B02',
        'text-primary': '#403633',
        'text-secondary': 'rgba(64, 54, 51, 0.7)',
        'text-tertiary': 'rgba(64, 54, 51, 0.6)',
        'background': '#F3F0E8',
        'background-light': '#FFFFFF',
        'success': '#00B67A',
        'error': '#DC2626',
        'warning': '#F59E0B',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'polysans': ['PolySans', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
        'body': ['PolySans', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        'section-desktop': '80px',
        'section-mobile': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        '2xl': '25px',
        'full': '50px',
        'pill': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 8px rgba(64, 54, 51, 0.08)',
        'button-hover': '0 4px 8px rgba(111, 176, 208, 0.2)',
        'header': '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'modal': '300',
        'tooltip': '400',
        'overlay': '500',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },
      screens: {
        'md': { 'min': '768px' },
        'lg': { 'min': '1024px' },
        'xl': { 'min': '1440px' }
      }
    },
  },
  plugins: [],
}

