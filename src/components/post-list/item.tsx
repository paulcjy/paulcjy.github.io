import { categoryMenuMap } from '@/data/category-menu-items'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export const Item = ({ post }: { post: Post }) => {
  const { title, slug, created, category } = post

  return (
    <article className="mb-8">
      {category && (
        <Link href={`/blog/categories/${category}`}>
          <div className="text-muted-foreground hover:text-foreground text-sm font-medium">
            {categoryMenuMap[category]}
          </div>
        </Link>
      )}
      <Link href={`/blog/posts/${slug}`} className="group">
        <h2 className="mb-1 text-xl font-bold text-emerald-600/80 transition-all duration-200 group-hover:text-red-600/50 dark:text-emerald-400 dark:group-hover:text-red-400">
          {title}
        </h2>
        <time
          dateTime={created}
          className="text-muted-foreground mb-2 block text-sm"
        >
          {format(parseISO(created), 'yyyy. MM. dd.')}
        </time>
        {/* {description && <p>{description}</p>} */}
      </Link>
    </article>
  )
}
