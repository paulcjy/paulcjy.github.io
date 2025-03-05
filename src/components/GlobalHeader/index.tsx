import { textNavLinks } from '@/data/global-nav-links'
import Link from 'next/link'

export const GlobalHeader = () => {
  return (
    <header className="sticky top-0 w-full bg-white/80 shadow backdrop-blur-sm dark:bg-black/70">
      <div className="flex h-16 items-center justify-between px-8">
        <Link href="/">
          <h1 className="text-xl font-bold">최재영의 개발 일지</h1>
        </Link>
        {/* TODO: 검색창 추가(새 컴포넌트로) */}
        <nav className="flex">
          <ul className="flex space-x-6">
            {textNavLinks.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {/* 깃허브나 SNS 링크 */}
            {/* <li> */}
            {/*   <ThemeSwitch /> */}
            {/* </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}
