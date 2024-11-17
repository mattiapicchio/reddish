export type FetchPostsResponse = {
  data: Node[]
  error?: string
}

export type FetchPostResponse = {
  data: Node
  error?: string
}

export type Node = {
  id: number
  title?: string | null
  content: string
  createdAt: string // ISO 8601 date format
  votes?: number
  replies: Node[]
}
