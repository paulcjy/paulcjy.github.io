import type { Metadata } from 'next'
import '#/styles/globals.css'
import { Header } from '#/components/header'

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
