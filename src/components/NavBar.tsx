import Image from 'next/image'
import RedditLogo from '@/assets/vectors/reddit.svg'

export default async function NavBar() {
  return (
    <nav className="flex w-full items-center p-3">
      <div className="mr-2">
        <Image src={RedditLogo} alt="Reddit logo" />
      </div>

      <h1 className="text-brand-orange">Reddish</h1>
    </nav>
  )
}
