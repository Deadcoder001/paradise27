/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        brand: {
          orange: '#FB6218',
          crimson: '#BF2A2E',
          black: '#090909',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #BF2A2E 0%, #FB6218 100%)',
        'subtle-glow': 'radial-gradient(circle at center, rgba(251, 98, 24, 0.15) 0%, rgba(9, 9, 9, 0) 70%)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px -4px rgba(251, 98, 24, 0.45)',
        'glow-crimson': '0 0 30px -4px rgba(191, 42, 46, 0.35)',
      }
    },
  },
  plugins: [],
}

