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

  const summaryLimit = 220
  const summary: string = html
    .replaceAll(/<.*?>/g, '')
    .substring(0, html.length > summaryLimit ? summaryLimit + 1 : html.length)

  return (
    <div className="mb-12">
      <h1 className="mb-1 text-2xl font-bold">
        <Link
          href={url}
          className="transition-all hover:text-red-700/50 text-emerald-700/80"
        >
          {title}
        </Link>
      </h1>
      <time dateTime={created} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(created), 'yyyy. LL. dd.')}
      </time>
      <div className="text-sm leading-loose">
        {summary.length > summaryLimit ? `${summary}...` : summary}
      </div>
    </div>
  )
}
