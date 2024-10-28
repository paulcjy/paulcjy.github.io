import { PostItem } from '@/components/PostItem'
import { BoardViewSegment } from '@/data/types'
import { allPosts } from 'contentlayer/generated'

export default async function BlogPage({
  params,
}: {
  params: { type: BoardViewSegment; board: string }
}) {
  const { type, board } = await params

  const posts = allPosts
    .filter((post) => !post.draft && post.boardId === decodeURIComponent(board))
    .sort((a, b) => {
      return new Date(b.created).getTime() - new Date(a.created).getTime()
    })

  return (
    <>
      <section className="mx-auto mr-48 p-12">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} baseUrl={type} />
        ))}
      </section>
      <aside className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-16 w-48 overflow-y-auto bg-green-100/10 p-6">
        <ul>
          <li>최신순</li>
          <li>등록순</li>
          <li>제목만 보기</li>
          <li>설명도 보기</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
    </>
  )
}
