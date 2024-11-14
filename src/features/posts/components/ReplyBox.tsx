import { cn } from '@/utils/cn'
import { Reply } from '@/features/posts/api/types.posts'
import { ReplyIcon } from '@/components/icons/ReplyIcon'
import { EditIcon } from '@/components/icons/EditIcon'
import { DeleteIcon } from '@/components/icons/DeleteIcon'

type ReplyBoxProps = {
  className?: string
  reply: Reply
}

export default function ReplyBox({ reply, className }: ReplyBoxProps) {
  return (
    <div className={cn('mt-3 rounded-b-md border-l border-brand-orange pl-6', className)}>
      <div className="border-brand-blue">
        <p className="text-body"> {reply.content}</p>
        <div className="flex">
          <ReplyIcon className="m-2 cursor-pointer" />
          <EditIcon className="m-2 cursor-pointer" />
          <DeleteIcon className="m-2 cursor-pointer" />
        </div>
      </div>

      {reply?.replies?.map((reply: Reply) => {
        return <ReplyBox key={reply.id} reply={reply} />
      })}
    </div>
  )
}
