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
      {categoryMenuItems.map((categoryGroup) => (
        <SidebarGroup key={categoryGroup.name}>
          <SidebarGroupLabel className="font-bold">
            {categoryGroup.name}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categoryGroup.children.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton asChild>
                    <Link href={`/blog/categories/${category.slug}`}>
                      {category.name}
                      <SidebarMenuBadge className="font-normal opacity-50">
                        {counts[category.slug] ?? ''}
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
