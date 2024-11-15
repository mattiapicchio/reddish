import { cn } from '@/utils/cn'
import { Reply } from '@/features/posts/api/types.posts'
import { ReplyIcon } from '@/components/icons/ReplyIcon'
import { EditIcon } from '@/components/icons/EditIcon'
import { DeleteIcon } from '@/components/icons/DeleteIcon'
import { InputWithButton } from '@/components/ui/form/InputWithButton'
import { useRef, useState } from 'react'
import NodeAction from './NodeAction'
import { NODE_ACTION } from '@/shared/data/queryKeys'
import useOutsideClickListener from '@/helpers/hooks/useOutsideClickListener'

type ReplyBoxProps = {
  className?: string
  reply: Reply
}

export default function ReplyBox({ reply, className }: ReplyBoxProps) {
  const [input, setInput] = useState('')
  const [isExpanded, setIsExpanded] = useState(true)
  const [showInput, setShowInput] = useState(false)

  const replyInputRef = useRef(null)
  useOutsideClickListener(replyInputRef, showInput, () => setShowInput(false))

  const onHandleNewComment = () => {}

  const hasChildrenNodes = !!reply?.replies?.length

  return (
    <div className={cn('mt-6 rounded-b-md border-l border-brand-blue pl-6', className)}>
      <div className="border-brand-blue py-3">
        <p className="text-body"> {reply.content}</p>
        <div className="mt-3 flex-col">
          {showInput && (
            <InputWithButton
              type="submit"
              text="Reply"
              placeholder="Write a comment..."
              className="mt-3"
              value={input}
              onInputChange={(event) => setInput(event.target.value)}
              onButtonClick={onHandleNewComment}
              ref={replyInputRef}
            />
          )}
          <div className="flex">
            {hasChildrenNodes && (
              <>
                {isExpanded ? (
                  <NodeAction
                    onClickCallback={() => setIsExpanded(false)}
                    action={NODE_ACTION.collapse}
                  />
                ) : (
                  <NodeAction
                    onClickCallback={() => setIsExpanded(true)}
                    action={NODE_ACTION.expand}
                  />
                )}
              </>
            )}
            <ReplyIcon className="m-2 cursor-pointer" onClick={() => setShowInput(true)} />
            <EditIcon className="m-2 cursor-pointer" />
            <DeleteIcon className="m-2 cursor-pointer" />
          </div>
        </div>
      </div>
      {hasChildrenNodes &&
        isExpanded &&
        reply?.replies?.map((reply: Reply) => {
          return <ReplyBox key={reply.id} reply={reply} />
        })}
    </div>
  )
}
