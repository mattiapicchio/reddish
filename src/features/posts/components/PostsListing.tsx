'use client'

import { cn } from '@/utils/cn'
import { Post } from '../api/types.posts'
import PostTeaser from './PostTeaser'
import { Textarea } from '@/components/ui/Textarea'
import { useState } from 'react'
import { getPosts, postPost } from '../api/api.posts'

type PostsListingProps = {
  listing: Post[]
  className?: string
}

export default function PostsListing({ listing, className }: PostsListingProps) {
  const [posts, setPosts] = useState<Post[]>(listing)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const fetchPosts = async () => {
    const { error, data } = await getPosts()

    if (error) {
      setPosts(listing)
    }

    setPosts(data)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    await postPost({ title, content })

    fetchPosts()
  }

  return (
    <section className={cn('flex-col', className)}>
      <ol className="space-y-3">
        {posts?.map((post: Post) => <PostTeaser post={post} key={post.id} />)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          id="title"
          title="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Textarea id="content" onChange={(event) => setContent(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
