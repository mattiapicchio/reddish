import { getPosts } from '@/features/posts/api/api.posts'
import PostsListing from '@/features/posts/components/PostsListing'

async function _fetchPosts() {
  'use server'

  // * implement error handling to gracefully handle errors

  // * Errors at this level are caught by next.js error boundary
  return await getPosts()
}

export default async function Home() {
  const posts = await _fetchPosts()

  return (
    <div className="page-container">
      <PostsListing listing={posts} />
    </div>
  )
}
