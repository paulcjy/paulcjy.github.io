import type { Metadata } from 'next'
import '../styles/main.css'
import { quicksand } from './fonts'
import { Header } from '@/components/Header'
import { CustomThemeProvider } from './ThemeProvider'

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
    <html lang="ko" className={`${quicksand.variable} antialiased`}>
      <body className="font-quicksand font-medium">
        <CustomThemeProvider>
          <Header />
          <main className="mx-auto max-w-8xl">{children}</main>
          {/* 글로벌 푸터 */}
        </CustomThemeProvider>
      </body>
    </html>
  )
}
