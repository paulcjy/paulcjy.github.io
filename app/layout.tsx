import type { Metadata } from 'next'
import { Header } from '#/components/header'
import '#/styles/globals.css'

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
