import { cn } from '@/utils/cn'
import { Post } from '../api/types.posts'
import PostTeaser from './PostTeaser'

type PostsListingProps = {
  listing: Post[]
  className?: string
}

export default async function PostsListing({ listing, className }: PostsListingProps) {
  return (
    <section className={cn('flex-col', className)}>
      <ol className="space-y-3">
        {listing?.map((post: Post) => <PostTeaser post={post} key={post.id} />)}
      </ol>
    </section>
  )
}
