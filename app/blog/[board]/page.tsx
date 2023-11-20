import { Post, allPosts } from '#/.contentlayer/generated'
import { PostCard } from '#/components/PostCard'
import { getBoards } from '#/lib/menu'
import { compareDesc } from 'date-fns'

export const generateStaticParams = async () =>
  getBoards().map((board) => ({ board }))

export const generateMetadata = ({
  params,
}: {
  params: { board: string }
}) => ({ title: decodeURIComponent(params.board) })

export default function BoardPage({ params }: { params: { board: string } }) {
  const posts = allPosts
    .filter((post: Post) => post.board === decodeURIComponent(params.board))
    .sort((a, b) => compareDesc(new Date(a.created), new Date(b.created)))

  return (
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
