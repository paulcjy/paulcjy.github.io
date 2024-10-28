export type BoardViewSegment = 'blog' | 'tags'

export interface Board {
  id: string
  name: string
  count: number
  group: string
}

export interface BoardGroup {
  [boardGroup: string]: Board[]
}

export type BlogSidebarData = BoardGroup & {
  _total: number
}

export interface Tag {
  id: string
  name: string
  count: number
}

export interface Tags {
  [tagId: string]: Tag
}

export type TagSidebarData = Tags & {
  _total: number
}
