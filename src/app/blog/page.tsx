import { TOC } from '@/components/toc'

export default function BlogPage() {
  return (
    <>
      <article className="flex-1 bg-blue-50/20">
        {Array(40)
          .fill(null)
          .map((v, i) => (
            <div key={i}>{i}</div>
          ))}
      </article>
      <aside>
        <TOC />
      </aside>
    </>
  )
}
