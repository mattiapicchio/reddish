import BackButton from '@/components/BackButton'
import { ROUTES } from '@/utils/routes'

export default function NotFound() {
  return (
    <div className="page-container">
      <h2 className="text-mediumHeading text-brand-orange">Not Found</h2>
      <p className="mt-10 text-body">Could not find requested resource</p>
      <BackButton href={ROUTES.HOME} className="mt-10" />
    </div>
  )
}
