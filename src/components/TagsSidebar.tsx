'use client'

import { usePathname } from 'next/navigation'
import { SidebarItem } from './SidebarItem'
import { TagSidebarData } from '@/data/types'

export const TagsSidebar = ({ data }: { data: TagSidebarData }) => {
  const pathname = usePathname()
  const { _total, ...rest } = data
  const tags = Object.values(rest)

  return (
    <ul>
      <li className="mt-8">
        <SidebarItem
          title="전체 보기"
          href="/tags"
          count={_total}
          currentPathname={pathname}
          targetPathname="/tags"
        />
      </li>
      {tags.map((tag) => (
        <li key={tag.id}>
          <SidebarItem
            title={tag.name}
            href={`/tags/${tag.id}`}
            count={tag.count}
            currentPathname={pathname}
            targetPathname={`/tags/${tag.id}`}
          />
        </li>
      ))}
    </ul>
  )
}
