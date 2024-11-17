import { getPosts } from '@/features/posts/api/api.posts'
import PostsListing from '@/features/posts/components/PostsListing'

// TODO: refactor relative imports
// TODO: add jsdocs

async function _fetchPosts() {
  'use server'

  return await getPosts()
}

export default async function Home() {
  const { error, data: posts } = await _fetchPosts()

  if (error) return <div>Handle error</div>

  return (
    <div className="page-container">
      <PostsListing listing={posts} />
    </div>
  )
}
