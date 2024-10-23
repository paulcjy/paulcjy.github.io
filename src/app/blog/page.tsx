export default function BlogPage() {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed bottom-0 top-16 w-72 overflow-y-auto bg-red-100"
      >
        <nav className="leading-6 lg:text-sm">
          <ul>
            {Array.from({ length: 100 }).map((_, index) => (
              <li key={index} className="mt-2">
                <a href={`#${index}`}>Title {index}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div id="content" className="pl-72">
        <article className="mx-auto mr-72 bg-blue-100 p-12">
          <header>
            <h1>제목</h1>
            {/* TODO: 글 제목, 작성일, 마지막 업데이트, 태그 */}
          </header>
          <section>
            {Array.from({ length: 100 }).map((_, index) => (
              <p key={index}>내용 {index}</p>
            ))}
          </section>
        </article>
        <aside
          id="toc"
          className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-16 w-72 overflow-y-auto bg-green-100"
        >
          <nav>
            {/* {icon} On this page 추가(anthropic같은 아이콘) */}
            <ul>
              {Array.from({ length: 100 }).map((_, index) => (
                <li key={index}>
                  <a href={`#${index}`}>TOC {index}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  )
}
