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

export const sidebarItems = {
  category: [
    {
      title: 'Group 1',
      children: [
        { title: 'Board1', href: '#' },
        { title: 'Board2', href: '#' },
        { title: 'Board3', href: '#' },
        { title: 'Board4', href: '#' },
        { title: 'Board5', href: '#' },
        { title: 'Board6', href: '#' },
        { title: 'Board7', href: '#' },
        { title: 'Board8', href: '#' },
        { title: 'Board9', href: '#' },
        { title: 'Board10', href: '#' },
      ],
    },
    {
      title: 'Group 2',
      children: [
        { title: 'Board1', href: '#' },
        { title: 'Board2', href: '#' },
        { title: 'Board3', href: '#' },
        { title: 'Board4', href: '#' },
        { title: 'Board5', href: '#' },
        { title: 'Board6', href: '#' },
        { title: 'Board7', href: '#' },
        { title: 'Board8', href: '#' },
        { title: 'Board9', href: '#' },
        { title: 'Board10', href: '#' },
      ],
    },
    {
      title: 'Group 3',
      children: [
        { title: 'Board1', href: '#' },
        { title: 'Board2', href: '#' },
        { title: 'Board3', href: '#' },
        { title: 'Board4', href: '#' },
        { title: 'Board5', href: '#' },
        { title: 'Board6', href: '#' },
        { title: 'Board7', href: '#' },
        { title: 'Board8', href: '#' },
        { title: 'Board9', href: '#' },
        { title: 'Board10', href: '#' },
      ],
    },
  ],
  tag: [
    { title: 'tag 01', href: '#' },
    { title: 'tag 02', href: '#' },
    { title: 'tag 03', href: '#' },
    { title: 'tag 04', href: '#' },
    { title: 'tag 05', href: '#' },
    { title: 'tag 06', href: '#' },
    { title: 'tag 07', href: '#' },
    { title: 'tag 08', href: '#' },
    { title: 'tag 09', href: '#' },
    { title: 'tag 10', href: '#' },
    { title: 'tag 11', href: '#' },
    { title: 'tag 12', href: '#' },
    { title: 'tag 13', href: '#' },
    { title: 'tag 14', href: '#' },
    { title: 'tag 15', href: '#' },
    { title: 'tag 16', href: '#' },
    { title: 'tag 17', href: '#' },
    { title: 'tag 18', href: '#' },
    { title: 'tag 19', href: '#' },
    { title: 'tag 20', href: '#' },
  ],
  daily: [
    {
      title: '2024',
      children: [
        { title: '1', href: '#' },
        { title: '2', href: '#' },
        { title: '3', href: '#' },
        { title: '4', href: '#' },
        { title: '5', href: '#' },
        { title: '6', href: '#' },
        { title: '7', href: '#' },
        { title: '8', href: '#' },
        { title: '9', href: '#' },
        { title: '10', href: '#' },
        { title: '11', href: '#' },
        { title: '12', href: '#' },
      ],
    },
    {
      title: '2025',
      children: [
        { title: '1', href: '#' },
        { title: '2', href: '#' },
        { title: '3', href: '#' },
        { title: '4', href: '#' },
        { title: '5', href: '#' },
        { title: '6', href: '#' },
        { title: '7', href: '#' },
        { title: '8', href: '#' },
        { title: '9', href: '#' },
        { title: '10', href: '#' },
        { title: '11', href: '#' },
        { title: '12', href: '#' },
      ],
    },
  ],
}
