import { cn } from '@/utils/cn'

interface Props {
  className?: string
}

function Spinner({ className }: Props) {
  return (
    <div
      className={cn(
        'aspect-square animate-spin rounded-full border-2 border-brand-orange border-r-black',
        className,
      )}
    />
  )
}

export default Spinner
