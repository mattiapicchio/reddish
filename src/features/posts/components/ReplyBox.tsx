import { cn } from '@/utils/cn'
import { InputWithButton } from '@/components/ui/form/InputWithButton'
import { useEffect, useRef, useState } from 'react'
import NodeAction from './NodeAction'
import { NODE_ACTION } from '@/shared/data/queryKeys'
import useOutsideClickListener from '@/helpers/hooks/useOutsideClickListener'
import { Node } from '@/features/posts/api/types.posts'

type ReplyBoxProps = {
  className?: string
  reply: Node
  onHandleInsertNode: (node: Node, input: string) => void
  onHandleEditNode: (node: Node, input: string) => void
  onHandleDeleteNode: (node: Node) => void
}

export default function ReplyBox({
  reply,
  className,
  onHandleInsertNode,
  onHandleEditNode,
  onHandleDeleteNode,
}: ReplyBoxProps) {
  const [input, setInput] = useState('')
  const [isExpanded, setIsExpanded] = useState(true)
  const [showInput, setShowInput] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  const replyInputRef = useRef(null)
  const editContainer = useRef(null)
  const replyTextRef = useRef<HTMLSpanElement>(null)

  useOutsideClickListener(replyInputRef, showInput, () => setShowInput(false))
  useOutsideClickListener(editContainer, isEditMode, () => onCancelEditReply())

  const onHandleReply = (node: Node) => {
    // if (isEditMode) {
    //   onHandleEditNode(node, replyTextRef?.current?.innerText || '')
    //   setIsEditMode(false)
    //   setShowInput(false)
    //   setInput('')
    // } else {
    //   onHandleInsertNode(node, input)
    //   setShowInput(false)
    //   setInput('')
    // }
    onHandleInsertNode(node, input)
    setShowInput(false)
    setInput('')
  }

  const onHandleDeleteReply = (node: Node) => {
    onHandleDeleteNode(node)
  }

  const onResetReply = () => {
    if (replyTextRef.current) {
      replyTextRef.current.innerText = reply.content
    }
  }

  const onSaveEditReply = () => {
    setIsEditMode(false)

    if (replyTextRef.current) {
      onHandleInsertNode(reply, replyTextRef.current.innerText)
    }
  }

  const onCancelEditReply = () => {
    setIsEditMode(false)
    onResetReply()
  }

  useEffect(() => {
    replyTextRef?.current?.focus()
  }, [isEditMode])

  const hasChildrenNodes = !!reply?.replies?.length

  return (
    <div className={cn('mt-6 w-fit rounded-b-md border-l border-brand-blue pl-6', className)}>
      <div className="border-brand-blue py-3">
        <div className="flex" ref={editContainer}>
          <span
            contentEditable={isEditMode}
            suppressContentEditableWarning={isEditMode}
            ref={replyTextRef}
            className="h-auto whitespace-pre-wrap p-2 text-body outline-none focus:rounded-lg focus:ring-1 focus:ring-brand-orange"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
              }
            }}
          >
            {reply.content}
          </span>
          {isEditMode && (
            <div className="ml-3 flex">
              <NodeAction action={NODE_ACTION.save} onClickCallback={onSaveEditReply} />
              <NodeAction action={NODE_ACTION.cancel} onClickCallback={onCancelEditReply} />
            </div>
          )}
        </div>

        <div className="mt-3 flex-col">
          {showInput && (
            <InputWithButton
              type="submit"
              text="Reply"
              placeholder="Write a comment..."
              className="mt-3"
              value={input}
              onInputChange={(event) => setInput(event.target.value)}
              onButtonClick={() => onHandleReply(reply)}
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
            <NodeAction onClickCallback={() => setShowInput(true)} action={NODE_ACTION.reply} />
            <NodeAction
              onClickCallback={() => {
                setIsEditMode(true)
              }}
              action={NODE_ACTION.edit}
            />
            <NodeAction
              onClickCallback={() => onHandleDeleteReply(reply)}
              action={NODE_ACTION.delete}
            />
          </div>
        </div>
      </div>
      {hasChildrenNodes &&
        isExpanded &&
        reply.replies.map((reply: Node) => {
          return (
            <ReplyBox
              key={reply.id}
              reply={reply}
              onHandleInsertNode={onHandleInsertNode}
              onHandleEditNode={onHandleEditNode}
              onHandleDeleteNode={onHandleDeleteNode}
            />
          )
        })}
    </div>
  )
}
