import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        meslo: ['var(--font-meslo)', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
