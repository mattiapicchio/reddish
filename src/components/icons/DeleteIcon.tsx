import { cn } from '@/utils/cn'

interface DeleteIconProps {
  className?: string
  width?: string
  height?: string
  onClick?: () => void
}

export function DeleteIcon({ className, width, height, onClick }: DeleteIconProps) {
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
      <path d="M4 7h16" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      <path d="M10 12l4 4m0 -4l-4 4" />
    </svg>
  )
}
