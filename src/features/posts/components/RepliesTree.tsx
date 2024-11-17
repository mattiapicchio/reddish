'use client'

import { cn } from '@/utils/cn'
import { InputWithButton } from '@/components/ui/form/InputWithButton'
import ReplyBox from './ReplyBox'
import { useState } from 'react'
import { generateRandomId, isTextNotEmpty } from '@/utils/textUtils'
import useNode from '../helpers/hooks/useTreeNode'
import { Node } from '@/features/posts/api/types.posts'

type RepliesTreeProps = {
  className?: string
  _postTree: Node
}

// TODO: refactor comments/replies naming

export default function RepliesTree({ _postTree, className }: RepliesTreeProps) {
  const [postTree, setPostTree] = useState(_postTree)
  const [reply, setReply] = useState('')

  const onHandlePostReply = () => {
    const newReply = {
      id: generateRandomId(),
      content: reply,
      createdAt: new Date().toISOString(),
      votes: 0,
      replies: [],
    } as Node

    // TODO: check structured clone
    const updatedRepliesTree = [...postTree.replies, newReply]
    const updatedPostTree = { ...postTree, replies: updatedRepliesTree }

    setPostTree(updatedPostTree)
    setReply('')
  }

  const { insertNode, editNode, deleteNode } = useNode()

  // TODO: jsdocs: parent node and new added text
  const insertNodeHandler = (node: Node, input: string) => {
    const finalStructure = insertNode(postTree, node, input)

    setPostTree(finalStructure)
  }

  const editNodeHandler = (node: Node, input: string) => {
    const finalStructure = editNode(postTree, node, input)
    setPostTree(finalStructure)
  }

  const deleteNodeHandler = (node) => {
    // const finalStructure = deleteNode(replies, nodeId)
    // const temp = { ...finalStructure }
    // setPostTree(temp)
    console.log('DELETE: ', node)
  }

  const hasChildrenNodes = !!postTree?.replies?.length

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
      {hasChildrenNodes &&
        postTree.replies.map((comment: Node) => {
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
