import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar'
import { sidebarItems } from '@/data/blog-sidebar-items'
import { ScrollArea } from '@/ui/scroll-area'
import { TypeSelector } from './type-selector'

export const BlogSidebar = () => {
  return (
    <nav>
      <Sidebar className="!h-sidebar-height top-global-header-height border-none">
        <SidebarHeader>
          <SidebarMenu>
            <TypeSelector />
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <span className="text-base font-medium">Total</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="mt-2">
          <ScrollArea className="h-full">
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
          </ScrollArea>
        </SidebarContent>
      </Sidebar>
    </nav>
  )
}
