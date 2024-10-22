import Link from 'next/link'
export const Header = () => {
  const menu = [
    { title: 'Blog', href: '/blog' },
    { title: 'Tags', href: '/tags' },
    { title: 'Series', href: '/series' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' },
  ]

  return (
    <header className="flex h-16 w-full items-center justify-between">
      <Link href="/">
        <h1 className="text-xl font-bold">최재영의 개발 일지</h1>
      </Link>
      {/* TODO: 검색창 추가(새 컴포넌트로) */}
      <nav>
        <ul className="flex space-x-6">
          {menu.map((item) => (
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
    </header>
  )
}
