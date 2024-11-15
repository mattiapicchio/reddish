import { RedditIcon } from './icons/RedditIcon'

function FullscreenLoader() {
  return (
    <div className="relative h-[70vh]">
      <RedditIcon className="absolute left-1/2 top-1/2 z-50 h-12 w-12 animate-spin" />
    </div>
  )
}

export default FullscreenLoader
