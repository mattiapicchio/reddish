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

  const { title, content } = post

  return (
    <div className="page-container flex min-h-screen flex-col">
      <BackButton href={ROUTES.HOME} className="" />
      <article className="mt-8 sm:ml-12">
        <h3 className="text-largeHeading text-brand-blue">{title}</h3>
        <p className="mt-8">{content}</p>
        <RepliesTree _postTree={post} />
      </article>
    </div>
  )
}
