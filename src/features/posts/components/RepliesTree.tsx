'use client'

import { cn } from '@/utils/cn'
import { InputWithButton } from '@/components/ui/form/InputWithButton'
import ReplyBox from '@/features/posts/components/ReplyBox'
import { useState } from 'react'
import { isTextNotEmpty } from '@/utils/textUtils'
import useTreeNode from '@/features/posts/helpers/hooks/useTreeNode'
import { Node } from '@/features/posts/api/types.posts'
import { generateNewNodeFromInput } from '@/utils/nodeUtils'
import { imPush } from '@/utils/immutableUtils'

type RepliesTreeProps = {
  className?: string
  _postTree: Node
}

export default function RepliesTree({ _postTree, className }: RepliesTreeProps) {
  const [postTree, setPostTree] = useState(_postTree)
  const [reply, setReply] = useState('')

  const onHandlePostReply = () => {
    const newReply = generateNewNodeFromInput(reply)

    const updatedRepliesTree = imPush(postTree.replies, newReply)
    const updatedPostTree = { ...postTree, replies: updatedRepliesTree }

    setPostTree(updatedPostTree)
    setReply('')
  }

  const { insertNode, editNode, deleteNode } = useTreeNode()

  const insertNodeHandler = (node: Node, input: string) => {
    const updatedTree = insertNode(postTree, node, input)
    setPostTree(updatedTree)
  }

  const editNodeHandler = (node: Node, input: string) => {
    const updatedTree = editNode(postTree, node, input)
    setPostTree(updatedTree)
  }

  const deleteNodeHandler = (node: Node) => {
    const updatedTree = deleteNode(postTree, node)
    setPostTree(updatedTree)
  }

  const hasChildrenNodes = !!postTree?.replies?.length

  return (
    <div className={cn('mt-4', className)}>
      <InputWithButton
        type="submit"
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
