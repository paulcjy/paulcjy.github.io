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
  id: string
  name: string
  count: number
}

export const TagMenu = () => {
  const tags: TagMenuItem[] = tagMenuItems

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {tags.map((tag) => (
            <SidebarMenuItem key={tag.id}>
              <SidebarMenuButton asChild>
                <Link href={`/blog/tags/${tag.id}`}>
                  {tag.name}

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
