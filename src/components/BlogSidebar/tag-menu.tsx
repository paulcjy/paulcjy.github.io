import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar'
import tagMenuItems from '@/data/.contentlayer/tag-menu-items.json'

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
                <a href="#">{tag.name}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
