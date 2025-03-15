import { MDXComponent } from '@/components/mdx-component'
import { TOC } from '@/components/toc'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug }))

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = allPosts.find(async (post) => post.slug === slug)

  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return (
    <>
      <article className="mx-auto max-w-4xl min-w-xl p-8">
        <div className="mb-12 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time
            dateTime={post.created}
            className="mb-1 text-xs text-gray-600 dark:text-gray-400"
          >
            {format(parseISO(post.created), 'yyyy. MM. dd. HH:mm')}
          </time>
        </div>
        <MDXComponent code={post.body.code} />
      </article>
      <TOC />
    </>
  )
}
