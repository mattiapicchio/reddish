import { cn } from '@/utils/cn'

interface CancelIconProps {
  className?: string
  width?: string
  height?: string
  onClick?: () => void
}

export function CancelIcon({ className, width, height, onClick }: CancelIconProps) {
  return (
    <svg
      onClick={onClick}
      className={cn('active:text-sunflare', className)}
      width={width ?? '24'}
      height={height ?? '24'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 8l4 8" />
      <path d="M10 16l4 -8" />
    </svg>
  )
}
