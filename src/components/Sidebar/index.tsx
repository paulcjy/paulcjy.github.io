import { sidebarItems } from '@/data/sidebar-items'
import { ScrollArea } from '@/ui/scroll-area'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar'

export const BlogSidebar = () => {
  return (
    <aside id="sidebar" className="relative">
      <div className="top-global-header-height sticky">
        <Sidebar className="!h-sidebar-height relative">
          <SidebarContent>
            {sidebarItems.map((group, groupIndex) => (
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
          </SidebarContent>
        </Sidebar>
      </div>
    </aside>
  )
}
