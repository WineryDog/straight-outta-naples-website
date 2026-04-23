import { OpeningHours } from './OpeningHours'
import { serviceInfo } from '../constants'

export default function LocationAndHours() {
  return (
    <section className="bg-crema py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Column 1: Map ─────────────────────────── */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl sm:text-4xl text-bruno">
              Find us
            </h2>
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Restaurant location"
                src={serviceInfo.mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Column 2: Hours ───────────────────────── */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl sm:text-4xl text-bruno">
              Opening hours
            </h2>
            <OpeningHours />
          </div>

        </div>
      </div>
    </section>
  )
}
