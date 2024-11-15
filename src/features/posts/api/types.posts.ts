export type FetchPostsResponse = {
  data: Post[]
  error?: string
}

export type FetchPostResponse = {
  data: Post
  error?: string
}

export type Post = {
  id: number
  title: string
  content: string
  createdAt: string // ISO 8601 date format
  votes: number
  replies: Reply[]
}

// TODO: add Nullable type
export type Reply = {
  id: number
  content: string
  createdAt: string // ISO 8601 date format
  votes: number
  replies: Reply[] | null
}

export type Node = Reply | Post
