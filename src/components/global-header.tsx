import { iconNavLinks, textNavLinks } from '@/data/global-nav-links'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/ui/button'

export const GlobalHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 shadow-xs backdrop-blur-sm dark:bg-black/50 dark:shadow-white/10">
      <div className="h-global-header-height flex items-center justify-between px-8">
        <Link href="/">
          <div className="text-lg font-semibold">최재영의 개발 일지</div>
        </Link>
        {/* TODO: 검색창 추가(새 컴포넌트로) */}
        <nav className="flex gap-4">
          <ul className="flex gap-6">
            {textNavLinks.map((item) => (
              <li key={item.title} className="flex items-center">
                <Link href={item.href}>
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-1">
            {iconNavLinks.map((item) => (
              <li key={item.title} className="flex items-center">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={item.href}>
                    <item.icon />
                  </Link>
                </Button>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
