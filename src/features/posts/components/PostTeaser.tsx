import { cn } from '@/utils/cn'
import { Post } from '../api/types.posts'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'

type PostTeaserProps = {
  post: Post
  className?: string
}

export default function PostTeaser({ post, className }: PostTeaserProps) {
  return (
    <Link href={`${ROUTES.POST}/${post.id}`}>
      <li className={cn('flex-col border-t border-gray-dark p-2', className)}>
        <div className="cursor-pointer rounded-md hover:bg-gray-dark">
          <h2 className="text-smallHeading text-brand-blue">{post.title}</h2>
          <p className="mt-3 line-clamp-6 sm:line-clamp-4">{post.content}</p>
        </div>
      </li>
    </Link>
  )
}
