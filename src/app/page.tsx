export default function Home() {
  return (
    <>
      <div className="font-meslo italic">Hello world!</div>
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="text-center">
          {index + 1}
        </div>
      ))}
    </>
  )
}
