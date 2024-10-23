import type { Metadata } from 'next'
import './globals.css'
import { meslo } from './fonts'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '최재영의 개발 일지',
  description: '%s | 최재영의 개발 일지',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${meslo.variable}`}>
      <body>
        <Header />
        <main className="mx-auto max-w-8xl">{children}</main>
        {/* 글로벌 푸터 */}
      </body>
    </html>
  )
}
