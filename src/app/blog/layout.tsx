import { BlogSidebar } from '@/components/blog-sidebar'
import { SidebarInset } from '@/ui/sidebar'

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BlogSidebar />
      <SidebarInset className="flex-row">{children}</SidebarInset>
    </>
  )
}
