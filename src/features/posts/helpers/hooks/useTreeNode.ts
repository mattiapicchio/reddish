import { generateRandomId } from '@/utils/textUtils'
import { Node } from '@/features/posts/api/types.posts'

const useNode = () => {
  // add a new node to the tree structure at a speficic position
  const insertNode = function (tree: Node, node: Node, input: string): Node {
    // if the current node has an id that matches the comment id
    if (tree.id === node.id) {
      // a new node is created and added to the replies array
      tree.replies = tree.replies || []
      tree.replies.push({
        id: generateRandomId(),
        createdAt: new Date().toISOString(),
        content: input,
        votes: 0,
        replies: [],
      })

      return tree
    }

    // otherwise the function recursively searches for the appropriate position to insert the new node by calling itself on each child node
    let updatedTree = []
    updatedTree = tree.replies.map((nodeObj: Node) => {
      return insertNode(nodeObj, node, input)
    })

    return { ...tree, replies: updatedTree }
  }

  const editNode = (tree: Node, node: Node, input: string): Node => {
    if (tree.id === node.id) {
      tree.content = input

      return tree
    }

    tree.replies.map((ob) => {
      return editNode(ob, node, input)
    })

    return { ...tree }
  }

  const deleteNode = (tree, id) => {
    for (let i = 0; i < tree.replies.length; i++) {
      const currentItem = tree.replies[i]

      if (currentItem.id === id) {
        tree.replies.splice(i, 1)

        return tree
      } else {
        deleteNode(currentItem, id)
      }
    }

    return tree
  }

  return { insertNode, editNode, deleteNode }
}

export default useNode
