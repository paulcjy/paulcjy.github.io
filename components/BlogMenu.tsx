import { Board, Boards, Menu, getMenu } from '#/lib/menu'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export const BlogMenu = () => {
  const menu: Menu = getMenu()

  return (
    <div className="space-y-5">
      {Object.entries(menu).map(([category, boards]: [string, Boards]) => {
        return (
          <div key={category}>
            <div className="mb-1 px-3 font-semibold tracking-wider text-zinc-400">
              {category}
            </div>

            {Object.entries(boards).map(
              ([boardName, board]: [string, Board]) => {
                return (
                  <Link
                    key={boardName}
                    href={`/blog/${board.id}`}
                    className={clsx(
                      'block rounded-md m-0 px-3 py-1 text-sm font-medium hover:bg-gray-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                    )}
                  >
                    <span className="pr-1.5">{boardName}</span>
                    <span className="text-gray-400">({board.count})</span>
                  </Link>
                )
              }
            )}
          </div>
        )
      })}
    </div>
  )
}
