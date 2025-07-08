/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.{js,ts}",
    "./*.html"
  ],
  theme: {
    extend: {
      // Colores personalizados del tema The Witcher
      colors: {
        'witcher-gold': '#D4AF37',
        'witcher-dark': '#1a1a1a',
        'witcher-red': '#8B0000',
        'witcher-gray': '#2a2a2a',
        'witcher-light-gray': '#3a3a3a',
      },
      
      // Fuentes personalizadas
      fontFamily: {
        'witcher': ['Georgia', 'serif'],
        'medieval': ['Cinzel', 'serif'],
      },
      
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      // Keyframes para las animaciones
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 30px rgba(212, 175, 55, 0.4)',
            transform: 'scale(1.02)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 30px rgba(212, 175, 55, 0.4)' },
        },
      },
      
      // Gradientes personalizados
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(42,42,42,0.8) 50%, rgba(26,26,26,0.9) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(42,42,42,0.9) 0%, rgba(26,26,26,0.9) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(42,42,42,0.9) 100%)',
      },
      
      // Sombras personalizadas
      boxShadow: {
        'witcher': '0 10px 30px rgba(212, 175, 55, 0.3)',
        'witcher-lg': '0 20px 40px rgba(212, 175, 55, 0.4)',
        'witcher-xl': '0 25px 50px rgba(212, 175, 55, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(212, 175, 55, 0.2)',
        'dark': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
      
      // Espaciado personalizado
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Configuración de backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // Configuración de transiciones
      transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      
      // Z-index personalizado
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
