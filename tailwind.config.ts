import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // We'll add custom fonts here later
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        // Brand tokens — easy to update in one place
        brand: {
          navy:    '#0f172a',
          slate:   '#1e293b',
          gold:    '#d4af37',
          'gold-light': '#f0d060',
          cream:   '#f8f4e8',
          muted:   '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}

export default config
