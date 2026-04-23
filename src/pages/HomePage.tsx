import { HeroSection } from '../components/Hero.tsx'
import { MenuSlideshow } from '../components/MenuSlideshow'
import EventsCta from '../components/EventsCta'
import LocationAndHours from '../components/LocationAndHours'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuSlideshow />
      <EventsCta />
      <LocationAndHours />
    </>
  )
}
