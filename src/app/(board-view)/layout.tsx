'use client'

import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { BoardViewSegment } from '@/data/types'

const isBoardLayoutSegment = (
  segment: string | null,
): segment is BoardViewSegment => {
  return segment === 'blog' || segment === 'tags'
}

export default function BoardLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode
  sidebar: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment()

  if (!isBoardLayoutSegment(segment)) {
    throw new Error('Invalid segment')
  }

  return (
    <>
      <aside
        id="sidebar"
        className="fixed bottom-0 top-16 w-72 overflow-y-auto pr-8"
      >
        <nav>{sidebar}</nav>
      </aside>
      <div id="content" className="pl-72">
        {children}
      </div>
    </>
  )
}
