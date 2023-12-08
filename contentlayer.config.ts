import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeHighlight from 'rehype-highlight'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    created: { type: 'date', required: true },
    description: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    category: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileDir.split('/')[0],
    },
    boardName: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileDir.split('/')[1],
    },
    boardId: {
      type: 'string',
      resolve: (post) =>
        post._raw.sourceFileDir
          .split('/')[1]
          .replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-'),
    },
    fileName: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.[^.]+$/, ''),
    },
    fileId: {
      type: 'string',
      resolve: (post) =>
        post._raw.sourceFileName
          .replace(/\.[^.]+$/, '')
          .replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-'),
    },
    url: {
      type: 'string',
      resolve: (post) => {
        const board = post._raw.sourceFileDir
          .split('/')[1]
          .replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-')
        const file = post._raw.sourceFileName
          .replace(/\.[^.]+$/, '')
          .replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-')
        return `/blog/${board}/${file}`
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  markdown: { rehypePlugins: [rehypeHighlight] },
})
