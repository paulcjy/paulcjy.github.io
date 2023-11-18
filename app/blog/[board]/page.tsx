import { Post, allPosts } from '#/.contentlayer/generated'
import { PostCard } from '#/components/postCard'
import { getBoards } from '#/lib/menu'
import { compareDesc } from 'date-fns'

export const generateStaticParams = async () =>
  getBoards().map((board) => ({ board }))

export const generateMetadata = ({
  params,
}: {
  params: { board: string }
}) => ({ title: decodeURI(params.board) })

export default ({ params }: { params: { board: string } }) => {
  const posts = allPosts
    .filter((post: Post) => post.board === decodeURI(params.board))
    .sort((a, b) => compareDesc(new Date(a.created), new Date(b.created)))
  // const board = decodeURI(params.board)
  return (
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
