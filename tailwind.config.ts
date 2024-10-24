import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'Quicksand', 'sans-serif'],
        // meslo: ['var(--font-meslo)', 'Menlo', 'monospace'],
      },
      spacing: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
export default config
