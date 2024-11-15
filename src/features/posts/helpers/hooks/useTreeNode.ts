import { Node, Reply } from '../../api/types.posts'

const useNode = () => {
  const insertNode = function (tree: Node, nodeId: number, nodeObj: Reply): Node {
    if (tree.id === nodeId) {
      tree.replies.push({
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
        content: nodeObj.content,
        votes: nodeObj.votes,
        replies: null,
      })

      return tree
    }

    let updatedTree = []
    updatedTree = tree.replies.map((obj: Node) => {
      return insertNode(obj, nodeId, nodeObj)
    })

    return { ...tree, replies: updatedTree }
  }

  const editNode = (tree, commentId, nodeObj: Reply) => {
    if (tree.id === commentId) {
      tree.name = nodeObj.content

      return tree
    }

    tree.replies.map((ob) => {
      return editNode(ob, commentId, nodeObj)
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
