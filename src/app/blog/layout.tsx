import { BlogSidebar } from '@/components/Sidebar'

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-1">
      <BlogSidebar />
      <div id="content" className="flex w-full flex-1 flex-col">
        {children}
      </div>
    </div>
  )
}
