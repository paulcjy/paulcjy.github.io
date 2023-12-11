import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Utterances } from '#/components/Utterances'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    board: post.boardId,
    post: post.fileId,
  }))

export const generateMetadata = ({
  params,
}: {
  params: { board: string; post: string }
}) => {
  const post = allPosts.find(
    (post) =>
      post.boardId === decodeURIComponent(params.board) &&
      post.fileId === decodeURIComponent(params.post)
  )
  if (!post)
    throw new Error(`Post not found for slug: ${params.board}/${params.post}`)
  return { title: post.title }
}

export default function PostPage({
  params,
}: {
  params: { board: string; post: string }
}) {
  const post = allPosts.find(
    (post) =>
      post.boardId === decodeURIComponent(params.board) &&
      post.fileId === decodeURIComponent(params.post)
  )
  if (!post)
    throw new Error(`Post not found for slug: ${params.board}/${params.post}`)

  return (
    <article className="mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time
          dateTime={post.created}
          className="mb-1 text-xs text-gray-600 dark:text-gray-400"
        >
          {format(parseISO(post.created), 'yyyy. MM. dd. HH:mm')}
        </time>
      </div>
      <div
        className="markdown-body mb-10"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      <Utterances />
    </article>
  )
}
