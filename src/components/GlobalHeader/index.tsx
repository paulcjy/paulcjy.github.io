import { textNavLinks } from '@/data/global-nav-links'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const GlobalHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/10 shadow-xs backdrop-blur-sm dark:bg-black/10 dark:shadow-white/10">
      <div className="h-global-header-height flex items-center justify-between px-8">
        <Link href="/">
          <h1 className="text-lg font-bold">최재영의 개발 일지</h1>
        </Link>
        {/* TODO: 검색창 추가(새 컴포넌트로) */}
        <nav className="flex gap-4">
          <ul className="flex gap-6 font-medium">
            {textNavLinks.map((item) => (
              <li key={item.title} className="flex items-center text-sm">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {/* 깃허브나 SNS 링크 */}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
