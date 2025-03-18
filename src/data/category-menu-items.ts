export interface CategoryMenuItem {
  name: string
  href: string
}

export interface CategoryMenuGroup {
  name: string
  children: CategoryMenuItem[]
}

export const categoryMenuItems: CategoryMenuGroup[] = [
  {
    name: 'Linux',
    children: [
      { name: 'Arch Linux', href: 'arch-linux' },
      { name: 'Linux', href: 'linux' },
    ],
  },
  {
    name: 'Language',
    children: [
      { name: 'JavaScript', href: 'javascript' },
      { name: 'C++', href: 'cpp' },
      { name: 'Python', href: 'python' },
    ],
  },
  {
    name: 'Web',
    children: [
      { name: '백엔드', href: 'back-end' },
      { name: '블로그', href: 'blog' },
    ],
  },
]
