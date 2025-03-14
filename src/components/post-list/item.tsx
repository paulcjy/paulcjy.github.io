import { Post } from 'contentlayer/generated'
import Link from 'next/link'

export const Item = ({ post }: { post: Post }) => {
  const { title, slug, created } = post
  return (
    <article className="mb-8">
      <Link href={`/blog/posts/${slug}`}>
        <h2 className="mb-1 text-xl font-bold text-emerald-600 transition-all duration-200 hover:text-red-700/70">
          {title}
        </h2>
        <time dateTime={created} className="mb-2 block text-sm text-gray-600">
          {new Date(created).toLocaleDateString()}
        </time>
        {/* {description && <p>{description}</p>} */}
      </Link>
    </article>
  )
}
