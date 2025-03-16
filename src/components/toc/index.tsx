'use client'
import { Sidebar } from '@/components/sidebar'
import { useEffect, useState } from 'react'
import { TocItem } from './item'

interface TocEntry {
  value: string // 제목 텍스트
  depth: number // 제목 레벨 (1-6)
  id?: string // 제목의 id (rehypeSlug로 생성됨)
  children?: Array<TocEntry> // 하위 제목들
}

export const TOC = ({ data }: { data: TocEntry[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  // 현재 화면에 보이는 헤딩을 감지하는 로직
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' },
    )

    // 문서 내의 모든 h1, h2, h3를 관찰
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
    headings.forEach((heading) => observer.observe(heading))

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [])

  // URL 해시에서 현재 활성 ID 설정
  useEffect(() => {
    const hashId = window.location.hash.slice(1)
    if (hashId) {
      setActiveId(hashId)

      // 페이지 로드 시 해당 위치로 스크롤
      const element = document.getElementById(hashId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Sidebar side="right" className="pt-16 text-sm">
      <ul className="border-l-2 px-4">
        {data.map((entry) => (
          <TocItem key={entry.id} entry={entry} activeId={activeId} />
        ))}
      </ul>
    </Sidebar>
  )
}
