import { ScrollArea } from '@/ui/scroll-area'
export const Sidebar = () => {
  return (
    <nav>
      <ScrollArea className="h-sidebar-height w-sidebar-width">
        {Array.from({ length: 50 }, (v, i) => i + 1).map((v, i) => (
          <div>{i}</div>
        ))}
      </ScrollArea>
    </nav>
  )
}
