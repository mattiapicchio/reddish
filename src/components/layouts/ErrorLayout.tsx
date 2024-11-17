'use client'

import { cn } from '@/utils/cn'

type ErrorLayoutProps = {
  className?: string
  onButtonClick: () => void
}

export default function ErrorLayout({ className, onButtonClick }: ErrorLayoutProps) {
  return (
    <div className={cn('page-container bg-black', className)}>
      <h2 className="text-mediumHeading text-brand-orange">Something went wrong!</h2>
      <button className="button-primary mt-10" onClick={onButtonClick}>
        Try again
      </button>
    </div>
  )
}
