import Image from 'next/image'
import RedditLogo from '@/assets/vectors/reddit.svg'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'

export default async function NavBar() {
  return (
    <nav>
      <Link href={ROUTES.HOME} className="flex w-full items-center px-4 py-3">
        <div className="mr-2">
          <Image src={RedditLogo} alt="Reddit logo" />
        </div>

        <h1 className="text-largeHeading text-brand-orange">Reddish</h1>
      </Link>
    </nav>
  )
}
