'use client'

import ErrorLayout from '@/components/layouts/ErrorLayout'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // !: Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return <ErrorLayout onButtonClick={() => reset()} />
}
