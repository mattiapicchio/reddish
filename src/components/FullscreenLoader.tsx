import Spinner from '@/components/Spinner'

function FullscreenLoader() {
  return (
    <div className="relative h-screen">
      <Spinner className="absolute left-1/2 top-1/2 z-50 h-12 w-12" />
    </div>
  )
}

export default FullscreenLoader
