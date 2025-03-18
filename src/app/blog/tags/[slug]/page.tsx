import { PostList } from '@/components/post-list'
import { Sidebar } from '@/components/sidebar'
import tagMenuItems from '@/data/.contentlayer/tag-menu-items.json'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = () =>
  tagMenuItems.map((tag) => ({ slug: tag.slug }))

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = allPosts
    .filter((post) => post.tags.includes(slug))
    .sort(
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
