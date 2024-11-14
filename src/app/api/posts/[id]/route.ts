export const dynamic = 'auto'
import mockData from '@/shared/data/mockData'

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const postId = (await params).id

  const post = mockData.posts.find((post) => post.id === Number(postId))

  if (!post) return Response.json({ error: 'Invalid post', data: undefined })

  return new Response(JSON.stringify({ error: undefined, data: post }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      'Surrogate-Control': 'no-store',
    },
  })
}
