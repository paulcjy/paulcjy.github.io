import { sidebarItems } from '@/data/blog-sidebar'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/ui/sidebar'

export const CategoryMenu = () => {
  return (
    <>
      {sidebarItems.category.map((group, groupIndex) => (
        <SidebarGroup key={`${group.title}-${groupIndex}`}>
          <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.children.map((item, itemIndex) => (
                <SidebarMenuItem key={`${item.title}-${itemIndex}`}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>{item.title}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}
