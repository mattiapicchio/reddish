'use client'

import RedditFail from '@/assets/images/redditFail.png'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/utils/routes'
import Image from 'next/image'
import Link from 'next/link'

export default function RedditError() {
  return (
    <div className="page-container flex min-h-screen flex-col items-center justify-center bg-black">
      <h2 className="text-smallHeading text-brand-orange">ooOps! Could not find this resource!</h2>
      <Image src={RedditFail} alt="Reddit Fail" className="mt-6 size-20" />
      <Link href={ROUTES.HOME}>
        <Button className="mt-10" variant="secondary">
          Go Home
        </Button>
      </Link>
    </div>
  )
}
