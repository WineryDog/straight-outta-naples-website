import { Link } from 'react-router'

import img1 from '../assets/interior-1.webp'
import img2 from '../assets/interior-2.webp'
import img3 from '../assets/interior-3.webp'
import img4 from '../assets/interior-4.webp'

export default function EventsCta() {
  return (
    <section className="bg-marrone py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Media column ─────────────────────────────── */}
          <div className="w-full lg:w-1/2 shrink-0">
            {/*
              Overlapping grid — 4 images:
              img1  large, top-left
              img2  medium, top-right (offset down)
              img3  medium, bottom-left (overlaps img1)
              img4  medium, bottom-right (overlaps img2)
            */}
            <div className="relative h-[420px] sm:h-[500px]">

              {/* img1 — large top-left */}
              <div className="absolute left-0 top-0 w-[56%] h-[62%] z-10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={img1}
                  alt="Restaurant interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* img2 — top-right, offset */}
              <div className="absolute right-0 top-6 w-[40%] h-[52%] z-10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={img2}
                  alt="Restaurant atmosphere"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* img3 — bottom-left, overlaps img1 */}
              <div className="absolute left-[8%] bottom-0 w-[44%] h-[46%] z-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-crema">
                <img
                  src={img3}
                  alt="Private dining space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* img4 — bottom-right, overlaps img2 */}
              <div className="absolute right-[2%] bottom-2 w-[48%] h-[44%] z-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-crema">
                <img
                  src={img4}
                  alt="Event setup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative accent dot */}
              <div className="absolute left-[53%] top-[58%] w-5 h-5 rounded-full bg-oro z-30 shadow-md" aria-hidden="true" />

            </div>
          </div>

          {/* ── Content column ───────────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">

            <p className="font-sans text-xs tracking-[0.2em] uppercase text-oro-bright font-semibold">
              Celebrate with us
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-crema leading-tight">
              A slice of Naples for <span className='text-oro-bright'>your next celebration</span>
            </h2>

            <p className="font-sans text-base text-crema/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Host your next event with us and treat your guests to the authentic taste of
              Neapolitan pizza, crafted cocktails, and warm Italian hospitality. Perfect for
              birthdays, intimate gatherings, and corporate dinners.
            </p>

            {/* Event type pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-1">
              {['Birthdays', 'Corporate', 'Intimate gatherings', 'Cocktail events'].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs font-medium px-3 py-1.5 rounded-full bg-beige text-bruno border border-beige/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-3">
              <Link
                to="/events"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full bg-oro text-bruno font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-oro-bright active:scale-95"
              >
                Explore our event packages
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
