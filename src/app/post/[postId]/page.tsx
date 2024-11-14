import BackButton from '@/components/BackButton'
import { getPost } from '@/features/posts/api/api.posts'
import RepliesTree from '@/features/posts/components/RepliesTree'
import { ROUTES } from '@/utils/routes'

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

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params

  const { error, data: post } = await _fetchPost(postId)
  // TODO: add error handling
  if (error) return <div>Handle Post error</div>

  const { title, content, replies } = post

  return (
    <div className="page-container flex min-h-screen flex-col">
      <BackButton href={ROUTES.HOME} className="" />
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        {replies && (
          <div>
            <RepliesTree replies={replies} />
          </div>
        )}
      </article>
    </div>
  )
}
