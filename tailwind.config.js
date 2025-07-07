/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'witcher-gold': '#D4AF37',
        'witcher-dark': '#1a1a1a',
        'witcher-red': '#8B0000',
        'witcher-gray': '#2a2a2a',
        'witcher-light-gray': '#3a3a3a',
      },
      fontFamily: {
        'witcher': ['Georgia', 'serif'],
        'medieval': ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(42,42,42,0.8) 50%, rgba(26,26,26,0.9) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(42,42,42,0.9) 0%, rgba(26,26,26,0.9) 100%)',
      },
      boxShadow: {
        'witcher': '0 10px 30px rgba(212, 175, 55, 0.3)',
        'witcher-lg': '0 20px 40px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
}
