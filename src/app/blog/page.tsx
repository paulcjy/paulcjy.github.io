import { PostList } from '@/components/post-list'
import { TOC } from '@/components/toc'
import { allPosts } from 'contentlayer/generated'

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.created) - new Date(a.created))

  return (
    <>
      <PostList posts={posts} />
      <aside>
        <TOC />
      </aside>
    </>
  )
}
