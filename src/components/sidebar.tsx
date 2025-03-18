import { ComponentProps } from 'react'
import { Sidebar as UISidebar } from '@/ui/sidebar'
import { cn } from '@/lib/utils'

export const Sidebar = ({
  side,
  variant,
  collapsible,
  className,
  children,
  ...props
}: ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) => {
  return (
    <nav>
      <UISidebar
        side={side}
        variant={variant}
        collapsible={collapsible}
        className={cn(
          '!h-sidebar-height top-global-header-height border-none',
          className,
        )}
        {...props}
      >
        {children}
      </UISidebar>
    </nav>
  )
}
