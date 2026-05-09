import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F5F5F5',
        surfaceSecondary: '#EEEEEE',
        primary: '#000000',
        secondary: '#333333',
        muted: '#666666',
        border: '#E0E0E0',
        borderLight: '#EEEEEE',
        heroBg: '#000000',
        heroText: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
