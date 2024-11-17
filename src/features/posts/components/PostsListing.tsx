'use client'

import { cn } from '@/utils/cn'
import { Node } from '@/features/posts/api/types.posts'
import PostTeaser from './PostTeaser'
import { Textarea } from '@/components/ui/form/Textarea'
import { useState } from 'react'
import { getPosts, postPost } from '../api/api.posts'
import InputWithLabel from '@/components/ui/form/InputWithLabel'
import { Button } from '@/components/ui/Button'

type PostsListingProps = {
  listing: Node[]
  className?: string
}

export default function PostsListing({ listing, className }: PostsListingProps) {
  const [posts, setPosts] = useState<Node[]>(listing)
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
        {posts?.map((post: Node) => <PostTeaser post={post} key={post.id} />)}
      </ol>
      <form onSubmit={handleSubmit} className="mt-6 border-t border-brand-orange">
        <InputWithLabel
          className="mt-6 text-black"
          type="text"
          title="title"
          value={title}
          label="Add a new post"
          placeholder="New post title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Textarea
          id="content"
          onChange={(event) => setContent(event.target.value)}
          className="mt-3 w-full max-w-lg"
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </section>
  )
}
