import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    created: { type: 'date', required: true },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
