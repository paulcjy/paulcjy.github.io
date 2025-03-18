import { categoryMenuItems } from '@/data/category-menu-items'
import categoryMenuCounts from '@/data/.contentlayer/category-menu-counts.json'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from '@/ui/sidebar'
import Link from 'next/link'

export const CategoryMenu = () => {
  const counts: Record<string, number> = categoryMenuCounts

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
                      <SidebarMenuBadge className="font-normal opacity-50">
                        {counts[item.name] ?? ''}
                      </SidebarMenuBadge>
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
