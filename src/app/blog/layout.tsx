import { BlogSidebar } from '@/components/blog-sidebar'
import { SidebarInset } from '@/ui/sidebar'

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-1">
      <BlogSidebar />
      <SidebarInset className="flex-row">{children}</SidebarInset>
    </div>
  )
}
