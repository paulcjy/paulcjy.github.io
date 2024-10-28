'use client'

import Link from 'next/link'

export const SidebarItem = ({
  title,
  href,
  count,
  currentPathname,
  targetPathname,
}: {
  title: string
  href: string
  count: number
  currentPathname: string
  targetPathname: string
}) => {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-4 py-1.5 ${currentPathname === targetPathname ? 'bg-gray-900/10' : 'hover:bg-gray-600/5'}`}
    >
      <span>{title}</span>
      <span className="ml-2 text-sm font-semibold text-gray-400">{count}</span>
    </Link>
  )
}
