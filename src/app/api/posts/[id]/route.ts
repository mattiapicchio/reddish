import mockData from '@/shared/data/mockData'

// FAKE API
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const postId = (await params).id

  const post = mockData.posts.find((post) => post.id === Number(postId))

  if (!post) return Response.json({ error: 'Invalid post', data: undefined })

  return Response.json({ error: undefined, data: post })
}
