import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { PostCard } from '#/components/PostCard'

export default () => {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.created), new Date(b.created))
  )

  return (
    <div className="mx-auto">
      <h1 className="mb-10 text-center text-3xl font-black text-zinc-700 dark:text-zinc-200">
        Latest
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
