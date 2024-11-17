import { cn } from '@/utils/cn'
import Link from 'next/link'
import { BackIcon } from './icons/BackIcon'

type BackButtonProps = {
  className?: string
  href: string
}

export default async function BackButton({ className, href }: BackButtonProps) {
  if (!href) return null

  return (
    <Link
      className={cn(
        'rounded-full button-primary flex w-fit items-center justify-center p-2',
        className,
      )}
      href={href}
    >
      <BackIcon />
    </Link>
  )
}
