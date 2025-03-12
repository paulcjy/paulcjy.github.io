import { sidebarItems } from '@/data/blog-sidebar'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/ui/scroll-area'
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/ui/dropdown-menu'
import { GalleryVerticalEnd, ChevronsUpDown } from 'lucide-react'
import React from 'react'

export const BlogSidebar = ({
  className,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
}) => {
  return (
    <nav>
      <Sidebar
        className={cn(
          '!h-sidebar-height top-global-header-height border-none',
          className,
        )}
        {...props}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <GalleryVerticalEnd className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Documentation</span>
                      <span className="">version</span>
                    </div>
                    <ChevronsUpDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width]"
                  align="start"
                >
                  {['v1', 'v2', 'v3', 'v4'].map((version) => (
                    <DropdownMenuItem
                      key={version}
                      // onSelect={() => setSelectedVersion(version)}
                    >
                      v{version} {/* {version === selectedVersion && ( */}
                      {/*   <Check className="ml-auto" /> */}
                      {/* )} */}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
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
