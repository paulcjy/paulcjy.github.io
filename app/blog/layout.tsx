import { BlogMenu } from '#/components/BlogMenu'
import React from 'react'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-10 grid grid-cols-[1fr,minmax(auto,200px),min(690px,100%),1fr] gap-x-10">
      <div className="col-start-2">
        <BlogMenu />
      </div>

      <div className="col-start-3">{children}</div>
    </div>
  )
}
