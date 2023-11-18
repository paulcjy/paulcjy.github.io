import { Boards, Menu, getMenu } from '#/lib/menu'
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
            <div className="text-small mb-1 px-3 font-semibold tracking-wider text-zinc-400">
              {category}
            </div>
            {Object.entries(boards).map(([board, count]: [string, number]) => {
              return (
                <Link
                  key={board}
                  href={`/blog/${board}`}
                  className={clsx(
                    'block rounded-md m-0 px-3 py-1 text-sm font-medium hover:bg-gary-200 hover:text-zinc-800'
                  )}
                >
                  <span className="pr-1.5">{board}</span>
                  <span className="text-gray-400">({count})</span>
                </Link>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
