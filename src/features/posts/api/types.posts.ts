export type FetchPostsResponse = Node[]

export type FetchPostResponse = Node

export type Node = {
  id: number
  title?: string | null
  content: string
  createdAt: string // ISO 8601 date format
  replies: Node[]
}
