import { header } from '#/lib/header'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="h-16 sticky top-0 flex justify-center shadow bg-white/80 items-center">
      <nav>
        <div className="menu flex font-bold">
          {header.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="transition-all duration-200 flex justify-center w-16 text-gray-500 hover:text-black"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
