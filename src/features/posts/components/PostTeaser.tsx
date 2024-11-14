import { cn } from '@/utils/cn'
import { Post } from '../api/types.posts'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'

type PostTeaserProps = {
  post: Post
  className?: string
}

export default async function PostTeaser({ post, className }: PostTeaserProps) {
  return (
    <Link href={`${ROUTES.POST}/${post.id}`}>
      <li className={cn('flex-col border-y border-gray-dark p-2', className)}>
        <div className="cursor-pointer rounded-md hover:bg-gray-dark">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
        <div>add action buttons</div>
      </li>
    </Link>
  )
}
