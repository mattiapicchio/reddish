import BackButton from '@/components/BackButton'
import RedditError from '@/components/layouts/RedditError'
import { getPost } from '@/features/posts/api/api.posts'
import RepliesTree from '@/features/posts/components/RepliesTree'
import { ROUTES } from '@/utils/routes'

type Params = Promise<{ postId: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { postId } = await params
  const post = await _fetchPost(postId)

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

export default async function PostPage({ params }: { params: Params }) {
  const { postId } = await params

  const post = await _fetchPost(postId)
  if (!post) return <RedditError />

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
