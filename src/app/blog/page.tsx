'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function BlogPage() {
  const [showLeftSidebar, setShowLeftSidebar] = useState(false)
  const [showRightSidebar, setShowRightSidebar] = useState(false)

  return (
    <div className="bg-background relative min-h-screen">
      {/* Mobile Navigation Controls */}
      <div className="bg-background sticky top-0 z-50 flex items-center justify-between border-b p-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <h1 className="text-lg font-semibold">블로그 제목</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowRightSidebar(!showRightSidebar)}
        >
          <span className="text-xs font-medium">TOC</span>
          <span className="sr-only">Toggle table of contents</span>
        </Button>
      </div>

      <div className="flex h-[calc(100vh-4rem)] lg:h-screen">
        {/* Left Sidebar - Navigation */}
        <aside
          className={`bg-background fixed inset-y-0 left-0 z-40 w-72 transform border-r transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${
            showLeftSidebar ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="bg-background sticky top-0 z-20 flex h-16 items-center justify-between border-b px-4 lg:px-6">
            <h2 className="text-lg font-semibold">네비게이션</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowLeftSidebar(false)}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close navigation menu</span>
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="px-4 py-4 lg:px-6">
              {/* 여기에 사이드바 내용을 넣으세요 */}
              <nav className="flex flex-col space-y-1">
                {Array.from({ length: 30 }).map((_, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm"
                  >
                    메뉴 항목 {i + 1}
                  </a>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content - Independently Scrollable */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-4xl px-4 py-6 lg:py-8">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h1>메인 콘텐츠 제목</h1>
              <p className="lead">
                여기에 메인 콘텐츠가 들어갑니다. 이 부분은 페이지의 중앙에
                위치합니다.
              </p>

              {/* 예시 콘텐츠 */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="mb-8">
                  <h2 id={`section-${i + 1}`}>섹션 {i + 1}</h2>
                  <p>
                    이것은 섹션 {i + 1}의 내용입니다. 여기에 실제 콘텐츠가
                    들어갑니다. 충분한 내용을 넣어서 스크롤이 생기도록 합니다.
                    이렇게 하면 사이드바와 TOC의 고정 위치 기능을 테스트할 수
                    있습니다.
                  </p>
                  <p>
                    추가 텍스트를 넣어 콘텐츠의 길이를 늘립니다. 이렇게 하면
                    스크롤 시 TOC가 어떻게 작동하는지 확인할 수 있습니다. 실제
                    구현 시에는 이 부분에 진짜 콘텐츠가 들어갑니다.
                  </p>
                </div>
              ))}
            </article>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside
          className={`bg-background fixed inset-y-0 right-0 z-40 w-64 transform border-l transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${
            showRightSidebar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="bg-background sticky top-0 z-20 flex h-16 items-center justify-between border-b px-4">
            <h2 className="text-lg font-semibold">목차</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowRightSidebar(false)}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close table of contents</span>
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="px-4 py-4">
              {/* 여기에 TOC 내용을 넣으세요 */}
              <nav className="flex flex-col space-y-1 text-sm">
                {Array.from({ length: 20 }).map((_, i) => (
                  <a
                    key={i}
                    href={`#section-${i + 1}`}
                    className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-1.5"
                  >
                    섹션 {i + 1}
                  </a>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  )
}
