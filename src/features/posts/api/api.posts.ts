import { fetchRequest } from '@/connectivity/fetchRequest'
import { FetchPostResponse, FetchPostsResponse } from './types.posts'
import { getBaseRequestConfig } from '@/connectivity/getBaseRequestConfig'
import { generateRandomId } from '@/utils/nodeUtils'

export async function getPosts() {
  return await fetchRequest<FetchPostsResponse>('posts')
}

export async function getPost({ id }: { id: string }) {
  return await fetchRequest<FetchPostResponse>(`posts/${id}`)
}

export async function postPost({ content, title }: { content: string; title: string }) {
  const baseRequestConfig = getBaseRequestConfig()
  const requestConfig = Object.assign({}, baseRequestConfig, {
    method: 'POST',
    body: JSON.stringify({
      id: generateRandomId(),
      title,
      content,
      createdAt: new Date().toISOString(),
      votes: 0,
      replies: [],
    }),
  })

  return await fetchRequest<FetchPostResponse>('posts', requestConfig)
}
