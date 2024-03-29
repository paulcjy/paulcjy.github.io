import type { Metadata } from 'next'
import { Header } from '#/components/Header'
import { CustomThemeProvider } from './theme-provider'
import '#/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: '개발 일지',
    template: '%s | 개발 일지',
  },
  icons: {
    icon: '/favicon.png',
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
