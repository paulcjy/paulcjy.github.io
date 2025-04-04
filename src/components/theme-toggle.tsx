'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/ui/button'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark')

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <Sun className="scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
      <Moon className="absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
