'use client'

import { cn } from '@/utils/cn'
import { InputWithButton } from '@/components/ui/form/InputWithButton'
import { Reply } from '@/features/posts/api/types.posts'
import ReplyBox from './ReplyBox'
import { useState } from 'react'
import { isTextNotEmpty } from '@/utils/textUtils'

type RepliesTreeProps = {
  className?: string
  replies: Reply[]
}

// TODO: refactor comments/replies naming

export default function RepliesTree({ replies, className }: RepliesTreeProps) {
  const [comments, setcomments] = useState(replies)
  const [reply, setReply] = useState('')

  const onHandlePostReply = () => {
    const newReply = {
      id: new Date().getTime(),
      content: reply,
      createdAt: new Date().toISOString(),
      votes: 0,
      replies: null,
    } as Reply

    // TODO: check structured clone
    const updatedRepliesTree = [...comments, newReply]
    setcomments(updatedRepliesTree)
  }

  return (
    <div className={cn('mt-4', className)}>
      <InputWithButton
        type="submit"
        text="Reply"
        placeholder="Write a top level comment..."
        className="mt-10"
        value={reply}
        onInputChange={(event) => setReply(event.target.value)}
        onButtonClick={onHandlePostReply}
        buttonDisabled={!isTextNotEmpty(reply)}
      />
      {comments.map((comment: Reply) => {
        return <ReplyBox key={comment.id} reply={comment} />
      })}
    </div>
  )
}
