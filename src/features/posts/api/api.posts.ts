import { fetchRequest } from '@/connectivity/fetchRequest'
import { FetchPostResponse, FetchPostsResponse } from './types.posts'

export async function getPosts() {
  return await fetchRequest<FetchPostsResponse>('posts')
}

export async function getPost({ id }: { id: string }) {
  return await fetchRequest<FetchPostResponse>(`posts/${id}`)
}

// export async function postPost({ post }: { post: Post }) {
//   const baseRequestConfig = getBaseRequestConfig()
//   const requestConfig = Object.assign({}, baseRequestConfig, {
//     method: 'POST',
//     body: JSON.stringify({
//       id: post.id,
//       content: post.content,
//       title: post.title,
//     }),
//   })

//   return await fetchRequest<FetchPostResponse>('posts', requestConfig)
// }
