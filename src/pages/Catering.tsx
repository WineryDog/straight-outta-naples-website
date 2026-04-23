import { serviceInfo } from '../constants'

function IconMail({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>
  )
}

export default function Catering() {
  return (
    <section className="bg-crema py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3 flex flex-col gap-6">

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-testo leading-tight">
              BRING {serviceInfo.name.toUpperCase()} TO <span className='text-amber-700'> YOUR TABLE</span>
            </h2>

            <hr className="border-beige" />

            <p className="font-sans text-base text-testo leading-relaxed text-justify">
              We believe in bringing our warm hospitality directly to you. At {serviceInfo.name}, we don't just cater your event—we turn it into a memorable, authentic experience.
            </p>

            <p className="font-sans text-base text-testo leading-relaxed text-justify">
              Planning a special occasion but stressing over the menu? Let us handle the cooking!
            </p>

            <p className="font-sans text-base text-testo leading-relaxed text-justify">
              We offer a premium catering service where we prepare our signature dishes right at your location. Treat your guests to authentic pizza, traditional Sicilian street food, golden arancini, handmade gnocchi, and much more. Looking for something interactive? We even offer live pizza-making masterclasses to entertain your guests!
            </p>

            <p className="font-sans text-base text-testo leading-relaxed text-justify">
              Get in touch with us to start planning your custom menu.
            </p>

            <div>
              <a
                href={`mailto:${serviceInfo.email}`}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-full bg-oro text-bruno font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-oro-bright active:scale-95"
              >
                <IconMail className="w-4 h-4 shrink-0" />
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
