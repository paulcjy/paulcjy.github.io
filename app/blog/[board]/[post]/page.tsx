import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    board: post.board,
    post: post.file,
  }))

export const generateMetadata = ({
  params,
}: {
  params: { board: string; post: string }
}) => {
  const post = allPosts.find(
    (post) =>
      post.board === decodeURI(params.board) &&
      post.file === decodeURI(params.post)
  )
  if (!post)
    throw new Error(`Post not found for slug: ${params.board}/${params.post}`)
  return { title: post.title }
}

export default ({ params }: { params: { board: string; post: string } }) => {
  const post = allPosts.find(
    (post) =>
      post.board === decodeURI(params.board) &&
      post.file === decodeURI(params.post)
  )
  if (!post)
    throw new Error(`Post not found for slug: ${params.board}/${params.post}`)

  return (
    <article className="mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.created} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.created), 'yyyy. LL. dd.')}
        </time>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0 markdown-body"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  )
}
