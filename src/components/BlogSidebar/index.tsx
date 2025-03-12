'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/ui/sidebar'
import { Content, contents } from '@/data/blog-sidebar'
import { ScrollArea } from '@/ui/scroll-area'
import { ContentSelector } from './content-selector'
import { useState } from 'react'
import { CategoryMenu } from './category-menu'
import { TagMenu } from './tag-menu'
import { DiaryMenu } from './diary-menu'

export const BlogSidebar = () => {
  const [selectedContent, setSelectedContent] = useState<Content>(contents[0])

  const renderSidebarContent = () => {
    switch (selectedContent.name) {
      case 'Category':
        return <CategoryMenu />
      case 'Tag':
        return <TagMenu />
      case 'Dev Diary':
        return <DiaryMenu />
    }
  }
  return (
    <nav>
      <Sidebar className="!h-sidebar-height top-global-header-height border-none">
        <SidebarHeader>
          <SidebarMenu>
            <ContentSelector
              contents={contents}
              selectedContent={selectedContent}
              onContentChange={setSelectedContent}
            />
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <span className="font-semibold">전체 글 보기</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="mt-2">
          <ScrollArea className="h-full">{renderSidebarContent()}</ScrollArea>
        </SidebarContent>
      </Sidebar>
    </nav>
  )
}
