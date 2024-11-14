import mockData from '@/shared/data/mockData'

// FAKE API
export async function GET() {
  const response = { message: undefined, data: mockData.posts }

  return Response.json(response)
}

// export async function POST(request: Request) {
//   const res = await request.json()

//   return Response.json({ res })
// }
