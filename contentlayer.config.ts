import fs from 'node:fs'
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { Post as PostType } from 'contentlayer/generated'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeExtractToc from '@stefanprobst/rehype-extract-toc'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings, {
  Options as RehypeAutolinkHeadingsOptions,
} from 'rehype-autolink-headings'
import { h } from 'hastscript'
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code'

const extractToc = async (markdown: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeExtractToc)
    .use(rehypeStringify)

  const file = await processor.process(markdown)
  return file.data.toc ?? []
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    created: { type: 'date', required: true },
    updated: { type: 'date' },
    description: { type: 'string' },
    category: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    draft: { type: 'boolean', default: false },
  },
  computedFields: {
    toc: {
      type: 'json',
      resolve: (doc) => extractToc(doc.body.raw),
    },
  },
}))

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  // theme: 'github-dark',
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
}

const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadingsOptions = {
  properties: {
    className: ['anchor'],
  },
  content: () =>
    h(
      'svg',
      {
        className: ['octicon', 'octicon-link'],
        viewBox: '0 0 16 16',
        version: '1.1',
        width: 16,
        height: 16,
        ariaHidden: 'true',
      },
      [
        h('path', {
          fillRule: 'evenodd',
          d: 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z',
        }),
      ],
    ),
}

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
  onSuccess: async (importData) => {
    const { allPosts } = await importData()
    createTagMenuItems(allPosts)
  },
})

interface Tag {
  id: string
  name: string
  count: number
}

const createTagMenuItems = (allPosts: PostType[]) => {
  // 배열로 저장해야 하지만 태그의 개수를 쉽게 세기 위해 태그 id가 키값인 객체로 생성
  const result: Record<string, Tag> = allPosts.reduce(
    (acc, post) => {
      if (post.tags && !post.draft) {
        post.tags.forEach((tag) => {
          const tagId = tag
            .replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-')
            .toLowerCase()
          acc[tagId] ??= {
            id: tagId,
            name: tag.toLowerCase(),
            count: 0,
          }
          acc[tagId].count++
        })
      }
      return acc
    },
    {} as Record<string, Tag>,
  )

  // 개수를 다 세고 배열로 변경하여 정렬
  const tags: Tag[] = Object.values(result).sort((a, b) =>
    a.id.localeCompare(b.id),
  )

  fs.writeFileSync(
    'src/data/.contentlayer/tag-menu-items.json',
    JSON.stringify(tags, null, 2),
  )
}
