import { categoryMenuItems } from '@/data/category-menu-items'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/ui/sidebar'
import Link from 'next/link'

export const CategoryMenu = () => {
  return (
    <>
      {categoryMenuItems.map((group) => (
        <SidebarGroup key={group.name}>
          <SidebarGroupLabel className="font-bold">
            {group.name}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.children.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={`/blog/categories/${item.href}`}>
                      {item.name}
                    </Link>
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
