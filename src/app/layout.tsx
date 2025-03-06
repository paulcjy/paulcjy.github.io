import type { Metadata } from 'next'
import '@/styles/main.css'
import { Quicksand } from 'next/font/google'
import { GlobalHeader } from '@/components/GlobalHeader'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: '최재영의 개발 일지',
  description: '%s | 최재영의 개발 일지',
}

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={quicksand.className}>
      <body className={`antialiased`}>
        <ThemeProvider>
          <GlobalHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
