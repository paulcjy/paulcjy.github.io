import { PostList } from '@/components/post-list'
import { Sidebar } from '@/components/sidebar'
import { allPosts } from 'contentlayer/generated'

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  )

  return (
    <>
      <PostList posts={posts} />
      <aside>
        <Sidebar side="right" />
      </aside>
    </>
  )
}
