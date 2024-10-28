'use client'

import { usePathname } from 'next/navigation'
import { SidebarItem } from './SidebarItem'
import { SidebarGroup } from './SidebarGroup'
import { BlogSidebarData } from '@/data/types'

export const BlogSidebar = ({ data }: { data: BlogSidebarData }) => {
  const pathname = usePathname()
  const { _total, ...rest } = data
  const boardGroups = Object.entries(rest)

  return (
    <ul>
      <li className="mt-8">
        <SidebarItem
          title="전체 보기"
          href="/blog"
          count={_total}
          currentPathname={pathname}
          targetPathname="/blog"
        />
      </li>
      {boardGroups.map(([GroupName, boards]) => (
        <li key={GroupName} className="mt-8">
          <SidebarGroup title={GroupName} />
          <ul>
            {boards.map((board) => (
              <li key={board.id}>
                <SidebarItem
                  title={board.name}
                  href={`/blog/${board.id}`}
                  count={board.count}
                  currentPathname={pathname}
                  targetPathname={`/blog/${board.id}`}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
