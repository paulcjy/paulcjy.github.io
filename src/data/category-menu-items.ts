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
    children: [{ name: '개발 블로그 v2 (Next.js)', slug: 'blog2' }],
  },
  {
    name: 'Linux',
    children: [
      { name: 'Linux', slug: 'linux' },
      { name: 'Arch Linux', slug: 'arch-linux' },
    ],
  },
  {
    name: 'Language',
    children: [
      { name: 'C++', slug: 'cpp' },
      { name: 'Rust', slug: 'rust' },
      { name: 'Java', slug: 'java' },
      { name: 'JavaScript', slug: 'javascript' },
    ],
  },
  {
    name: 'Algorithm',
    children: [{ name: '알고리즘', slug: 'algorithm' }],
  },
  {
    name: 'Others',
    children: [{ name: 'GitHub Actions', slug: 'github-actions' }],
  },
]
