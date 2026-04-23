import { useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import img1 from '../assets/menu-1.jpg'
import img2 from '../assets/menu-2.jpg'
import img3 from '../assets/menu-3.jpg'
import img4 from '../assets/menu-4.jpg'
import img5 from '../assets/menu-5.jpg'
import img6 from '../assets/menu-6.jpg'

const SLIDES = [
  { src: img1, alt: 'Autentica Pizza Margherita' },
  { src: img2, alt: 'Forno a legna tradizionale' },
  { src: img3, alt: 'Pizza Napoli' },
  { src: img4, alt: 'Vista dall\'alto pizza' },
  { src: img5, alt: 'Trancio di pizza filante' },
  { src: img6, alt: 'Ingredienti freschi' },
];

export  function MenuSlideshow() {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-stone-100 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-amber-700 mb-2 font-semibold">
            Straight from Kitchen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
            The Menu
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">

          {/* Swiper Component */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
            className="rounded-2xl overflow-hidden"
          >
            {SLIDES.map((slide, i) => (
              <SwiperSlide 
                key={i} 
                className="w-full shrink-0 aspect-[4/3] sm:aspect-[16/9] relative"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrow — prev */}
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all duration-300 active:scale-95 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Arrow — next */}
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next slide"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all duration-300 active:scale-95 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots Indicators */}
        <div role="tablist" aria-label="Slide indicators" className="flex justify-center gap-3 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              onClick={() => swiperInstance?.slideToLoop(i)}
              className="group p-2 flex items-center justify-center focus:outline-none"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 h-2 bg-amber-600'
                    : 'w-2 h-2 bg-stone-300 group-hover:bg-stone-400'
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}