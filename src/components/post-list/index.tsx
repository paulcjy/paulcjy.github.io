import { Post } from 'contentlayer/generated'
import { Item } from './item'

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="p-8">
      {posts.map((post) => (
        <Item key={post._id} post={post} />
      ))}
    </section>
  )
}
