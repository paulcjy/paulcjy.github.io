import { PostList } from '@/components/post-list'
import { Sidebar } from '@/components/sidebar'
import { categoryMenuItems } from '@/data/category-menu-items'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = () =>
  categoryMenuItems.flatMap((group) =>
    group.children.map((category) => ({ slug: category.slug })),
  )

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = allPosts
    .filter((post) => post.category === slug)
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
