'use client'

import ErrorLayout from '@/components/layouts/ErrorLayout'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <ErrorLayout onButtonClick={() => reset()} />
      </body>
    </html>
  )
}
