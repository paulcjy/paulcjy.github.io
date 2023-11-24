import { BlogMenu } from '#/components/BlogMenu'
import React from 'react'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="my-10 grid grid-cols-[1fr,minmax(auto,1100px),1fr]">
      <div className="col-start-2 grid grid-cols-[minmax(auto,210px),min(700px,100%)] gap-x-10">
        <div>
          <BlogMenu />
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}
