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

  const plain = html.replaceAll(/<.*?>/g, '').replaceAll('&#x3C;', '<')

  const textLimit = 200
  const summary =
    plain.length < textLimit ? plain : plain.substring(0, textLimit) + '...'

  return (
    <div className="mb-10">
      <h1 className="mb-1 text-2xl font-bold">
        <Link
          href={url}
          className="transition-all duration-200 hover:text-red-700/50 text-emerald-700/80 dark:text-emerald-400 dark:hover:text-red-300"
        >
          {title}
        </Link>
      </h1>
      <time
        dateTime={created}
        className="mb-2 block text-xs text-gray-600 dark:text-gray-400"
      >
        {format(parseISO(created), 'yyyy. MM. dd.')}
      </time>
      <div className="text-sm leading-loose">{summary}</div>
    </div>
  )
}
