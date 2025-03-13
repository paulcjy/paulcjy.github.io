'use client'

import { Content } from '@/data/blog-sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'
import { SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar'
import { Check, ChevronsUpDown } from 'lucide-react'

export const ContentSelector = ({
  contents,
  selectedContent,
  onContentChange,
}: {
  contents: Content[]
  selectedContent: Content
  onContentChange: (content: Content) => void
}) => {
  if (!selectedContent) return null

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
          >
            <ContentItem type={selectedContent} />
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-62">
          {contents.map((content) => (
            <DropdownMenuItem
              key={content.name}
              onSelect={() => onContentChange(content)}
            >
              <ContentItem type={content} />
              {/* {type.name} */}
              {content.name === selectedContent.name && (
                <Check className="ml-auto" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  )
}

const ContentItem = ({ type }: { type: Content }) => {
  return (
    <>
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-7 items-center justify-center rounded-md">
        <type.icon className="text-sidebar-primary-foreground size-4" />
      </div>
      <div className="text-sm font-semibold">{type.name}</div>
    </>
  )
}
