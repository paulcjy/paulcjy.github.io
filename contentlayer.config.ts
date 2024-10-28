import fs from 'node:fs'
import path from 'node:path'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { DocumentTypes } from '.contentlayer/generated/types'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    created: { type: 'date', required: true },
    updated: { type: 'date' },
    description: { type: 'string' },
    categories: { type: 'list', of: { type: 'string' }, default: [] },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    draft: { type: 'boolean', default: false },
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileName.replace(/^\d+-([^.]+).*$/, '$1'),
    },
    boardId: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileDir
          .split('/')
          .at(-1)!
          .replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/data',
  contentDirInclude: ['posts'],
  documentTypes: [Post],
  onSuccess: async (importData) => {
    const { allPosts } = await importData()
    createTagSidebar(allPosts)
  },
})

interface Count {
  id: string
  name: string
  count: number
  group?: string
}

const createBlogSidebar = () => {
  let _total = 0
  const sidebar = {} as Record<string, Count[]>
  const postPath = 'src/data/posts'
  const boardGroupDirs = fs.readdirSync(postPath)

  boardGroupDirs.forEach((boardGroupDir) => {
    const boardGroupPath = path.join(postPath, boardGroupDir)
    const boardDirs = fs.readdirSync(boardGroupPath)

    const boardGroup = boardGroupDir.replace(/^\d+-(.*)/, '$1')
    sidebar[boardGroup] ??= []

    boardDirs.forEach((boardDir) => {
      const boardPath = path.join(boardGroupPath, boardDir)
      const postFiles = fs.readdirSync(boardPath)
      const boardCount = postFiles.length
      _total += boardCount

      const boardName = boardDir.replace(/^\d+-(.*)/, '$1')
      const boardId = boardName.replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-')
      const boardData = {
        id: boardId,
        name: boardName,
        count: boardCount,
        group: boardGroup,
      }
      sidebar[boardGroup].push(boardData)
    })
  })

  fs.writeFileSync(
    'src/data/blog-sidebar.json',
    JSON.stringify({ ...sidebar, _total }, null, 2),
  )
}

const createTagSidebar = (allPosts: DocumentTypes[]) => {
  const tags: Record<string, Count> = {}
  let _total = 0

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      const tagId = tag.replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-')
      tags[tagId] ??= {
        id: tagId,
        name: tag,
        count: 0,
      }
      tags[tagId].count++
    })
    _total++
  })

  fs.writeFileSync(
    'src/data/tags-sidebar.json',
    JSON.stringify({ ...tags, _total }, null, 2),
  )
}

createBlogSidebar()
