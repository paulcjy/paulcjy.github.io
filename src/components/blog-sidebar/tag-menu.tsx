import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar'
import tagMenuItems from '@/data/.contentlayer/tag-menu-items.json'
import Link from 'next/link'

interface TagMenuItem {
  slug: string
  count: number
}

export const TagMenu = () => {
  const tags: TagMenuItem[] = tagMenuItems

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {tags.map((tag) => (
            <SidebarMenuItem key={tag.slug}>
              <SidebarMenuButton asChild>
                <Link href={`/blog/tags/${tag.slug}`}>
                  {tag.slug}

                  <SidebarMenuBadge className="font-normal opacity-50">
                    {tag.count}
                  </SidebarMenuBadge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
