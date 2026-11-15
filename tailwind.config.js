/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a14',
          900: '#0b132b',
          850: '#0f1b3d',
          800: '#14214d',
          700: '#1c2d66',
          600: '#283e87',
          500: '#3853b0',
        },
        carbon: {
          950: '#07090e',
          900: '#0c0f17',
          850: '#111520',
          800: '#181e2b',
          750: '#202838',
          700: '#2b3649',
          600: '#3d4b63',
          500: '#546682',
        },
        brand: {
          red: '#e62e3d',
          redGlow: '#ff4154',
          darkRed: '#a81824',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Cabinet Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(230, 46, 61, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glow-navy': '0 10px 30px -5px rgba(11, 19, 43, 0.7)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(230, 46, 61, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
