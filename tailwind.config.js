/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0B192C',
        'navy-deep': '#061220',
        'navy-mid': '#0f2a45',
        'navy-light': '#1a3f63',
        'accent-gold': '#F0C14A',
        'accent-gold-light': '#FFE082',
        'accent-gold-vivid': '#FFD54F',
        'accent-amber': '#FFB300',
        'accent-brown': '#5C3D2E',
        'accent-brown-warm': '#7A5C3A',
        'accent-brown-light': '#A67C52',
        'accent-silver': '#D1D5DB',
        'charcoal': '#1A1A1A',
        'bg-gray': '#F8FAFC',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'heading': ['Cooper BT', 'Georgia', 'serif'],
        'body': ['Garet', 'sans-serif'],
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-10px) rotate(180deg)', opacity: '0.85' },
        },
        particleFloatDelayed: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-8px) rotate(-180deg)', opacity: '0.85' },
        },
      },
      animation: {
        slowZoom: 'slowZoom 20s ease-in-out infinite alternate',
        floatUp: 'floatUp 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out backwards',
        gradientShift: 'gradientShift 3s ease infinite',
        particleFloat: 'particleFloat 3s ease-in-out infinite',
        particleFloatDelayed: 'particleFloatDelayed 3s ease-in-out infinite 1.5s',
      },
      backgroundSize: {
        '200-auto': '200% auto',
      },
    },
  },
  plugins: [],
}
