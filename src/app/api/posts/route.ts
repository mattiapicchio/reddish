import mockData from '@/shared/data/mockData'

export async function GET() {
  const response = { error: undefined, data: mockData.posts }

  return new Response(JSON.stringify(response), {
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

export async function POST(request: Request) {
  const res = await request.json()

  const newPost = {
    ...res,
  }
  mockData.posts.push(newPost)

  return new Response(JSON.stringify({ message: 'Post created', data: newPost }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      'Surrogate-Control': 'no-store',
    },
  })
}
