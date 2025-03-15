import fs from 'node:fs'
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { Post as PostType } from 'contentlayer/generated'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
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
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  onSuccess: async (importData) => {
    const { allPosts } = await importData()
    console.log('allPosts: ', allPosts.length)
    createTagSidebarItems(allPosts)
  },
})

interface Tag {
  id: string
  name: string
  count: number
}

const createTagSidebarItems = (allPosts: PostType[]) => {
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

  console.log('Tag menu data succesfully generated as TypeScript')
}
