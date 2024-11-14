interface BackIconProps {
  className?: string
  width?: string
  height?: string
}

export function BackIcon({ className, width, height }: BackIconProps) {
  return (
    <svg
      className={className}
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
      <path d="M9 14l-4 -4l4 -4" />
      <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </svg>
  )
}
