import { Sidebar } from '@/components/Sidebar'

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <aside id="sidebar" className="fixed">
        <Sidebar />
      </aside>
      <div id="content" className="pl-sidebar-width">
        {Array.from({ length: 50 }, (_, i) => i).map((v) => (
          <div>{v}</div>
        ))}
        {/* {children} */}
      </div>
    </>
  )
}
