import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar'
import { tagMenuItems } from '@/data/.contentlayer/tag-menu-items'

export const TagMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {tagMenuItems.map((tag) => (
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
