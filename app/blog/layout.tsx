import { BlogMenu } from '#/components/blogMenu'
import React from 'react'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-10 grid grid-cols-[1fr,minmax(auto,220px),min(780px,100%),1fr] gap-x-4">
      <div className="col-start-2">
        <BlogMenu />
      </div>

      <div className="col-start-3 space-y-6">{children}</div>
    </div>
  )
}
