import fs from 'node:fs'
import { BlogSidebar } from '@/components/BlogSidebar'
import { TagsSidebar } from '@/components/TagsSidebar'

export default async function BlogPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const { slug } = await params
  const [boardTypeSegment] = slug

  const blogSidebarData = fs.readFileSync(`src/data/blog-sidebar.json`, 'utf-8')
  const blogSidebar = JSON.parse(blogSidebarData)

  const tagsSidebarData = fs.readFileSync(`src/data/tags-sidebar.json`, 'utf-8')
  const tagsSidebar = JSON.parse(tagsSidebarData)

  if (boardTypeSegment === 'blog') {
    return <BlogSidebar data={blogSidebar} />
  } else if (boardTypeSegment === 'tags') {
    return <TagsSidebar data={tagsSidebar} />
  }
}
