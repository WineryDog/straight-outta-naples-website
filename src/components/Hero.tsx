import { serviceInfo } from '../constants'
import heroImg from '../assets/hero.webp'
import { Link } from 'react-router'

export function HeroSection() {
  return (
    <section className="relative h-svh min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background image */}
      <img
        src={heroImg}
        alt="Pizza background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
        fetchPriority="high"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 md:gap-8 text-center">

        <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-oro-bright/90">
          {serviceInfo.name}
        </p>

        {/* Aggiunto text-balance per evitare che il testo "rompa" il layout e si adatti meglio */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight sm:leading-tight lg:leading-tight text-balance">
          The authentic soul of Naples,<br className="hidden sm:block" /> your new <span className='text-oro-bright/90'>favorite pizza</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-white/75 w-full max-w-xl text-balance">
          {serviceInfo.description}
        </p>

        {/* CTAs — stack vertical on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 md:mt-6">
          <Link
            to="/menu"
            className="min-h-[48px] flex items-center justify-center px-8 py-3 rounded-full bg-oro text-bruno font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-oro-bright active:scale-95"
          >
            Menu
          </Link>
          <Link
            to="/reservations"
            className="min-h-[48px] flex items-center justify-center px-8 py-3 rounded-full border-2 border-white/70 text-white font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-white/10 active:scale-95"
          >
            Book Now
          </Link>
                    <Link
            to="/order"
            className="min-h-[48px] flex items-center justify-center px-8 py-3 rounded-full border-2 border-white/70 text-white font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-white/10 active:scale-95"
          >
            Order Online
          </Link>
        </div>
      </div>
    </section>
  )
}  