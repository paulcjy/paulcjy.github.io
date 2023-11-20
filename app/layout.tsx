import type { Metadata } from 'next'
import { Header } from '#/components/Header'
import { CustomThemeProvider } from './theme-provider'
import '#/styles/globals.css'
import '#/styles/github-markdown.css'

export const metadata: Metadata = {
  title: {
    default: '개발 일지',
    template: '%s | 개발 일지',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <CustomThemeProvider>
          <Header />
          <main>{children}</main>
        </CustomThemeProvider>
      </body>
    </html>
  )
}
