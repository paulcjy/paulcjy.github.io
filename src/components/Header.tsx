import Link from 'next/link'
import { headerNavigation } from '@/data/header-navigation'

export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white/80 shadow backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">최재영의 개발 일지</h1>
        </Link>
        {/* TODO: 검색창 추가(새 컴포넌트로) */}
        <nav>
          <ul className="font-quicksand flex space-x-6 font-medium">
            {headerNavigation.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {/* 깃허브나 SNS 링크 */}
            {/* 다크모드 전환 버튼 */}
          </ul>
        </nav>
      </div>
    </header>
  )
}
