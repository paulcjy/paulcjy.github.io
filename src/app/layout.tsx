import type { Metadata } from 'next'
import '@/styles/main.css'
import { Quicksand } from 'next/font/google'
import { GlobalHeader } from '@/components/global-header'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarProvider } from '@/ui/sidebar'

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
    <html lang="ko" className={quicksand.className} suppressHydrationWarning>
      <body className={`overscroll-y-none antialiased`}>
        <ThemeProvider>
          <SidebarProvider className="flex-col">
            <GlobalHeader />
            <div className="flex flex-1">{children}</div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
