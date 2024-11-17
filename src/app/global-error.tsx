'use client'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="page-container bg-black">
        <h2 className="text-mediumHeading text-brand-orange">Something went wrong!</h2>
        <button onClick={() => reset()} className="button-primary mt-10">
          Try again
        </button>
      </body>
    </html>
  )
}
