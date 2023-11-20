import { header } from '#/lib/header'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

export const Header = () => {
  return (
    <header className="h-16 sticky top-0 flex justify-center shadow bg-white/70 items-center backdrop-blur-sm dark:bg-black/80 dark:shadow-neutral-800">
      <nav className="flex ">
        <div className="flex font-bold">
          {header.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="transition flex justify-center w-16 text-gray-900 hover:text-gray-300 dark:text-gray-100 dark:hover:text-gray-600"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  )
}
