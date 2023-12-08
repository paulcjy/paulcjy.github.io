import { Post, allPosts } from '#/.contentlayer/generated'
import { PostCard } from '#/components/PostCard'
import { Board, getBoards } from '#/lib/menu'
import { compareDesc } from 'date-fns'

export const generateStaticParams = async () =>
  getBoards().map((board: Board) => {
    board: board.id
  })

export const generateMetadata = ({ params }: { params: { board: string } }) => {
  const boardId = decodeURIComponent(params.board)
  const board = getBoards().filter((board: Board) => board.id == boardId)[0]
  return { title: board.name }
}

export default function BoardPage({ params }: { params: { board: string } }) {
  const posts = allPosts
    .filter((post: Post) => post.boardId === decodeURIComponent(params.board))
    .sort((a, b) => compareDesc(new Date(a.created), new Date(b.created)))

  return (
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
