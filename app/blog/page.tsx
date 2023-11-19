import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { getMenu } from '#/lib/menu'
import { PostCard } from '#/components/postCard'

export default () => {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.created), new Date(b.created))
  )
  const menu = getMenu()
  console.log(menu)

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
