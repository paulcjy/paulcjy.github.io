export interface CategoryMenuItem {
  name: string
  slug: string
}

export interface CategoryMenuGroup {
  name: string
  children: CategoryMenuItem[]
}

export const categoryMenuItems: CategoryMenuGroup[] = [
  {
    name: 'Web',
    children: [
      { name: '백엔드', slug: 'back-end' },
      { name: '블로그', slug: 'blog' },
    ],
  },
  {
    name: 'Linux',
    children: [
      { name: 'Arch Linux', slug: 'arch-linux' },
      { name: 'Linux', slug: 'linux' },
    ],
  },
  {
    name: 'Language',
    children: [
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'C++', slug: 'cpp' },
      { name: 'Python', slug: 'python' },
    ],
  },
  {
    name: 'Algorithm',
    children: [{ name: '알고리즘', slug: 'algorithm' }],
  },
]
