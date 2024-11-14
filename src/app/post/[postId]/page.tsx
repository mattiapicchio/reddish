import { getPost } from '@/features/posts/api/api.posts'
// import { formatDate } from '@/utils/dateUtils'
import { ROUTES } from '@/utils/routes'
import Link from 'next/link'

type PostPageProps = {
  params: Params
}

type Params = {
  postId: string
}

export async function generateMetadata({ params }: PostPageProps) {
  const { postId } = await params
  const { error, data: post } = await _fetchPost(postId)

  if (error) return

  return {
    title: `${post.title}`,
    description: `${post.content}`,
    openGraph: {
      title: `${post.title}`,
      description: `${post.content}`,
    },
  }
}

async function _fetchPost(id: string) {
  'use server'

  return await getPost({ id })
}

export default async function StarshipPage({ params }: PostPageProps) {
  const { postId } = await params

  const { error, data: post } = await _fetchPost(postId)

  // TODO: add error handling
  if (error) return <div>Handle Post error</div>

  // TODO: design back button
  return (
    <div className="page-container flex min-h-screen flex-col">
      <Link href={`${ROUTES.HOME}`} className="button-primary w-fit">
        <span>&lt;</span>
      </Link>
      {post?.title} - {post?.id}
    </div>
  )
}
