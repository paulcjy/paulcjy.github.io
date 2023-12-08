import { readdirSync } from 'fs'
import { cache } from 'react'

export type Menu = {
  [category: string]: Boards
}

export type Boards = {
  [board: string]: Board
}

export type Board = {
  id: string
  count: number
  name?: string
}

export const getMenu = cache(() => {
  const menu: Menu = {}
  const posts = './posts'

  readdirSync(posts).forEach((category: string) => {
    menu[category] = {}
    readdirSync(`${posts}/${category}`).forEach((board: string) => {
      const count: number = readdirSync(`${posts}/${category}/${board}`).length
      menu[category][board] = {
        id: board.replace(/[:/?#\[\]@!$&'()*+,;=% ]+/g, '-'),
        count,
      }
    })
  })

  return menu
})

export const getBoards = () => {
  const menu: Menu = getMenu()
  return Object.values(menu).reduce((acc: Board[], boards: Boards) => {
    return [
      ...acc,
      ...Object.entries(boards).map(([boardName, board]: [string, Board]) => ({
        ...board,
        name: boardName,
      })),
    ]
  }, [] as Board[])
}
