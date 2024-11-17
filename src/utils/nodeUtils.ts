import { Node } from '@/features/posts/api/types.posts'

export function generateRandomId() {
  return new Date().getTime()
}

export function generateNewNodeFromInput(input: string = '') {
  return {
    id: generateRandomId(),
    content: input,
    createdAt: new Date().toISOString(),
    votes: 0,
    replies: [],
    title: null,
  } as Node
}
