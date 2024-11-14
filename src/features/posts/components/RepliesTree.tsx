'use client'

import { cn } from '@/utils/cn'
import { Reply } from '@/features/posts/api/types.posts'
import ReplyBox from './ReplyBox'

type RepliesTreeProps = {
  className?: string
  replies: Reply[]
}

export default function RepliesTree({ replies, className }: RepliesTreeProps) {
  return (
    <div className={cn('mt-4', className)}>
      {replies.map((reply: Reply) => {
        return <ReplyBox key={reply.id} reply={reply} />
      })}
    </div>
  )
}
