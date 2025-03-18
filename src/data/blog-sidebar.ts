import { LayoutList, NotebookPen, Tag } from 'lucide-react'

export interface Content {
  name: string
  icon: React.ElementType
}

export const contents: Content[] = [
  {
    name: 'Category',
    icon: LayoutList,
  },
  {
    name: 'Tag',
    icon: Tag,
  },
  {
    name: 'Dev Diary',
    icon: NotebookPen,
  },
]
