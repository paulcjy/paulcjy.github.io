import { Post } from '#/.contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export const PostCard = (post: Post) => {
  const {
    title,
    created,
    description,
    url,
    body: { html },
  } = post

  const summary: string = html
    .replaceAll(/<.*?>/g, '')
    .substring(0, html.length > 200 ? 201 : html.length)

  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {title}
        </Link>
      </h2>
      <time dateTime={created} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(created), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">
        {summary.length > 200 ? `${summary}...` : summary}
      </div>
    </div>
  )
}
