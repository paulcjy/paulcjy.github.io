import fs from 'node:fs'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    created: { type: 'date', required: true },
    updated: { type: 'date' },
    description: { type: 'string' },
    board: { type: 'string', required: true },
    categories: { type: 'list', of: { type: 'string' } },
    tags: { type: 'list', of: { type: 'string' } },
    draft: { type: 'boolean' },
  },
  computedFields: {},
}))

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Post],
  onSuccess: async (importData) => {
    const { allPosts } = await importData()
    createCounts(allPosts)
  },
})

const createCounts = (allPosts) => {
  const boards: Record<string, number> = {}
  const tags: Record<string, number> = {}
  console.log('start')

  allPosts.forEach((post) => {
    boards[post.board] = (boards[post.board] ?? 0) + 1
    post.tags.forEach((tag: string) => {
      tags[tag] = (tags[tag] ?? 0) + 1
      console.log(tag)
    })
  })
  console.log('end')

  fs.writeFileSync(
    'src/app/counts.json',
    JSON.stringify({ boards, tags }, null, 2),
  )
}
