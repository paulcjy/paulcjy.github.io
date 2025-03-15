'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'

export const MDXComponent = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code)

  return <MDXContent />
}
