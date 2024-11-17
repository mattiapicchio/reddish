import { Node } from '@/features/posts/api/types.posts'
import { generateNewNodeFromInput } from '@/utils/nodeUtils'

/**
 * Hook to manage node in the tree structure.
 * @returns {Object} - The tree handlers for manipulating the tree.
 */

const useTreeNode = () => {
  /**
   * Inserts a new node to the tree structure at a speficic position
   *
   * @param {Node} tree - The initial tree structure.
   * @param {Node} node - The current node.
   * @param {string} input - The text inputed by the user.
   *
   */
  const insertNode = function (tree: Node, node: Node, input: string): Node {
    // if the current node has an id that matches the comment id
    if (tree.id === node.id) {
      // a new node is created and added to the replies array
      tree.replies.push(generateNewNodeFromInput(input))

      return tree
    }

    // otherwise the function recursively searches for the appropriate position to insert the new node by calling itself on each child node
    let updatedTree = []
    updatedTree = tree.replies.map((nodeObj: Node) => {
      return insertNode(nodeObj, node, input)
    })

    return { ...tree, replies: updatedTree }
  }

  /**
   * Edits the content of an existing node in the tree.
   *
   * @param {Node} tree - The initial tree structure.
   * @param {Node} node - The current node.
   * @param {string} input - The text inputed by the user.
   *
   */

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

  const deleteNode = (tree: Node, node: Node) => {
    /**
     * Deletes a node from the tree.
     *
     * @param {Node} tree - The initial tree structure.
     * @param {Node} node - The node to be deleted.
     *
     */

    // reteirate over the replies array of the tree object
    for (const currentItem of tree.replies) {
      // for each node, check if the id matches the id of the node to be deleted
      if (currentItem.id === node.id) {
        // remove current node from the replies array
        tree.replies = tree.replies.filter((item) => item.id !== node.id)

        // return updated tree object
        return { ...tree }
      } else {
        // if the id of the given node to delete does not match the current node id the function calls itself recursively
        deleteNode(currentItem, node)
      }
    }

    // if the id is not found in the tree, the function returns the tree object
    return { ...tree }
  }

  return { insertNode, editNode, deleteNode }
}

export default useTreeNode
