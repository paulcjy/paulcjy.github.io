'use client'

import { Sidebar } from '@/components/sidebar'
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
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
import Link from 'next/link'
import totalPostCount from '@/data/.contentlayer/total-post-count.json'

export const BlogSidebar = () => {
  const [selectedContent, setSelectedContent] = useState<Content>(contents[0])
  const { count } = totalPostCount

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
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <ContentSelector
            contents={contents}
            selectedContent={selectedContent}
            onContentChange={setSelectedContent}
          />
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/blog">
                <span className="font-semibold">전체 글 보기</span>
                <SidebarMenuBadge className="font-normal opacity-80">
                  {count}
                </SidebarMenuBadge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-2">
        <ScrollArea className="h-full">{renderSidebarContent()}</ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}
