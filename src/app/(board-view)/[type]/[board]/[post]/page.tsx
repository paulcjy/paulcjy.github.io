import { allPosts } from 'contentlayer/generated'

export default async function PostPage({
  params,
}: {
  params: { board: string; post: string }
}) {
  const { board: _board, post: _post } = await params
  // TODO: 변수 이름 변경
  const post = allPosts.find(
    (p) =>
      p.boardId === decodeURIComponent(_board) &&
      p.id === decodeURIComponent(_post),
  )

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <article className="mx-auto mr-72 p-12">
        <div className="mb-12 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time
            dateTime={post.created}
            className="mb-1 text-xs text-gray-600 dark:text-gray-400"
          >
            {new Date(post.created).toLocaleDateString()}
          </time>
        </div>
        <div
          className="markdown-body mb-10"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <aside
        id="toc"
        className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-16 w-72 overflow-y-auto bg-green-100/10"
      >
        <nav>
          {/* {icon} On this page 추가(anthropic같은 아이콘) */}
          <ul>
            {Array.from({ length: 100 }).map((_, index) => (
              <li key={index}>
                <a href={`#${index}`}>TOC {index}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
