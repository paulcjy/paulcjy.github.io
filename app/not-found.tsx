export const generateMetadata = () => ({ title: '404: Not Found' })

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col h-[90vh] items-center justify-center">
      <div className="flex items-center">
        <h1 className="inline-block text-2xl pr-8 mr-8 border-r-[1.5px] border-gray-400 py-2">
          404
        </h1>
        <h2 className="inline-block text-lg">This page could not be found</h2>
      </div>
    </div>
  )
}
