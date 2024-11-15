'use client'

import { cn } from '@/utils/cn'
import { InputWithButton } from '@/components/ui/form/InputWithButton'
import { Reply } from '@/features/posts/api/types.posts'
import ReplyBox from './ReplyBox'
import { useState } from 'react'
import { isTextNotEmpty } from '@/utils/textUtils'
import useNode from '../helpers/hooks/useTreeNode'

type RepliesTreeProps = {
  className?: string
  _replies: Reply[]
}

// TODO: refactor comments/replies naming

export default function RepliesTree({ _replies, className }: RepliesTreeProps) {
  const [replies, setReplies] = useState(_replies)
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
    const updatedRepliesTree = [...replies, newReply]
    setReplies(updatedRepliesTree)
    setReply('')
  }

  const { insertNode, editNode, deleteNode } = useNode()

  const insertNodeHandler = (node, input) => {
    // const finalStructure = insertNode(replies, nodeId, nodeObj)
    // setReplies(finalStructure)
    console.log('INSERT node: ', node)
    console.log('input', input)
  }

  const editNodeHandler = (node, input) => {
    // const finalStructure = editNode(replies, nodeId, nodeObj)
    // setReplies(finalStructure)
    console.log('EDIT node: ', node)
    console.log('EDIT input: ', input)
  }

  const deleteNodeHandler = (node) => {
    // const finalStructure = deleteNode(replies, nodeId)
    // const temp = { ...finalStructure }
    // setReplies(temp)
    console.log('DELETE: ', node)
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
      {replies.map((comment: Reply) => {
        return (
          <ReplyBox
            key={comment.id}
            reply={comment}
            onHandleInsertNode={insertNodeHandler}
            onHandleEditNode={editNodeHandler}
            onHandleDeleteNode={deleteNodeHandler}
          />
        )
      })}
    </div>
  )
}
