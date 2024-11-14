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

export type Reply = {
  id: number
  content: string
  createdAt: string // ISO 8601 date format
  votes: number
  replies: Reply[]
}

export type Node = Reply | Post
