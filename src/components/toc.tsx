import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/ui/sidebar'
import { ScrollArea } from '@/ui/scroll-area'
import { Sidebar } from '@/components/sidebar'

export const TOC = () => {
  return (
    <Sidebar side="right">
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array(40)
                  .fill(null)
                  .map((_v, i) => (
                    <SidebarMenuItem key={i}>
                      <SidebarMenuButton asChild>
                        <a href="#">{i}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}
