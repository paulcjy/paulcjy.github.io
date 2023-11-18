import { readdirSync } from 'fs'
import { cache } from 'react'

export type Menu = {
  [category: string]: Boards
}

export type Boards = {
  [board: string]: number
}

export const getMenu = cache(() => {
  const menu: Menu = {}
  const posts = './posts'

  readdirSync(posts).forEach((category: string) => {
    menu[category] = {}
    readdirSync(`${posts}/${category}`).forEach((board: string) => {
      const count: number = readdirSync(`${posts}/${category}/${board}`).length
      menu[category][board] = count
    })
  })

  return menu
})

export const getBoards = () => {
  const menu: Menu = getMenu()
  return Object.values(menu).reduce((acc: string[], boards: Boards) => {
    return [...acc, ...Object.keys(boards)]
  }, [] as string[])
}
