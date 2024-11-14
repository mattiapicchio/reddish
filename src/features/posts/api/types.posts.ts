export type FetchPostsResponse = {
  data: Post[]
  error?: string
}

export type FetchPostResponse = {
  data: Post
  error?: string
}

export type Post = {
  id: string
  title: string
  content: string
  createdAt: string // ISO 8601 date format
  votes: number
  replies: Reply | Reply[]
}

export type Reply = {
  id: string
  content: string
  createdAt: string // ISO 8601 date format
  votes: number
  repllies: Reply | Reply[]
}
