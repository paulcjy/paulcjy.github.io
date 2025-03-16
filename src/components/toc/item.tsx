import { cn } from '@/lib/utils'
import { TocEntry } from '@stefanprobst/rehype-extract-toc'

export const TocItem = ({
  entry,
  activeId,
}: {
  entry: TocEntry
  activeId: string | null
}) => {
  const isActive = entry.id === activeId

  // 링크 클릭 핸들러 - 부드러운 스크롤 구현
  const handleClick = (e: React.MouseEvent, id?: string) => {
    e.preventDefault()
    if (id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // URL 해시 업데이트
        window.history.pushState(null, '', `#${id}`)
      }
    }
  }

  return (
    <li className="my-1">
      <a
        href={entry.id ? `#${entry.id}` : '#'}
        onClick={(e) => handleClick(e, entry.id)}
        className={cn(
          'transition-colors hover:text-blue-600',
          entry.depth === 2 && 'ml-4',
          isActive ? 'font-semibold text-blue-600' : 'text-muted-foreground',
        )}
      >
        {entry.value}
      </a>
      {entry.children && entry.children.length > 0 && (
        <ul>
          {entry.children.map((child) => (
            <TocItem key={child.id} entry={child} activeId={activeId} />
          ))}
        </ul>
      )}
    </li>
  )
}
