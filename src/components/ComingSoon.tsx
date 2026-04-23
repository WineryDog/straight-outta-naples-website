import { Link } from 'react-router'

export default function ComingSoon() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-crema">
      <h1 className="font-display text-4xl text-stone-900 mb-4">
        Our dough is still rising...
      </h1>
      <p className="font-sans text-base text-stone-600 max-w-md mb-8 leading-relaxed">
        Just like the perfect Neapolitan pizza, this page needs a little more time to rest.
        We are working hard behind the scenes and will have it ready for you soon.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full bg-oro text-bruno font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-oro-bright active:scale-95"
      >
        Return to Home
      </Link>
    </section>
  )
}
