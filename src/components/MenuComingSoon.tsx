function IconVegan({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 463 463" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M459.996,8.495c-0.667-2.707-2.781-4.821-5.488-5.488c-12.167-2.997-24.935-3.758-37.956-2.255
        c-30.703,3.54-60.875,18.755-84.961,42.84c-24.085,24.085-39.299,54.258-42.84,84.961c-1.331,11.544-0.877,22.889,1.332,33.794
        c-0.105,0.11-0.22,0.206-0.319,0.324c-33.014,39.222-55.366,81.822-70.263,123.99c-12.788-49.63-31.862-95.286-56.904-135.998
        C125.318,90.058,74.456,39.741,11.421,1.106C8.125-0.914,3.835-0.098,1.51,2.989c-2.325,3.087-1.924,7.435,0.927,10.044
        C79,83.108,132.937,164.55,162.752,255.096c12.556,38.133,29.249,100.395,29.249,200.404c0,4.143,3.358,7.5,7.5,7.5h32
        c4.142,0,7.5-3.357,7.5-7.5c0-5.437-0.029-11.003-0.059-16.688c-0.392-74.703-0.886-169.281,63.947-265.461
        c6.104,1.096,12.338,1.648,18.663,1.648c4.262-0.001,8.567-0.25,12.897-0.75c30.703-3.54,60.875-18.755,84.96-42.84
        c24.085-24.085,39.3-54.259,42.841-84.961C463.753,33.431,462.994,20.661,459.996,8.495z M177,250.405
        C155.416,184.853,121.562,123.98,75.987,68.61c28.689,26.611,53.381,56.662,73.833,89.912
        c28.266,45.954,48.724,98.473,60.829,156.102c-3.958,14.085-7.146,28.023-9.693,41.672
        C196.629,323.677,189.312,287.798,177,250.405z M223.942,438.891c0.017,3.072,0.032,6.109,0.043,9.109h-16.934
        c0.661-49.269,8.03-110.876,32.567-172.211C223.401,335.698,223.698,392.412,223.942,438.891z M447.35,44.73
        c-6.535,56.666-57.953,108.084-114.619,114.619c-6.813,0.787-13.53,0.844-20.09,0.205c24.296-32.846,56.551-65.776,99.375-98.066
        c3.308-2.493,3.967-7.196,1.473-10.504c-2.493-3.306-7.196-3.966-10.503-1.473c-40.411,30.47-73.538,62.817-99.801,97.534
        c-0.332-5.502-0.187-11.105,0.468-16.775c6.535-56.666,57.953-108.084,114.619-114.619c9.631-1.11,19.077-0.795,28.144,0.936
        C448.145,25.654,448.461,35.099,447.35,44.73z" />
    </svg>
  )
}

function IconGlutenFree({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V6.52779C10.1738 5.78835 9.14158 5.27448 8 5.08296V5C8 4.44772 7.55229 4 7 4C6.44772 4 6 4.44772 6 5V7V10V12V13C6 13.7083 6.12275 14.388 6.34813 15.0189L8.02624 13.4606C8.00891 13.3095 8 13.1558 8 13V12.126C8.36017 12.2187 8.70071 12.3603 9.01411 12.5433L10.5227 11.1425C9.78956 10.6099 8.93115 10.2392 8 10.083V7.12602C9.63464 7.54674 10.8649 8.97478 10.9896 10.709L17.6391 4.53441C17.6909 4.48628 17.7446 4.44143 17.8 4.39984C17.6175 4.15704 17.3271 4 17 4C16.4477 4 16 4.44772 16 5V5.08296C14.8584 5.27448 13.8262 5.78835 13 6.52779V3ZM11 18.917C10.2346 18.7886 9.51825 18.5153 8.88027 18.1262L10.4352 16.6823C10.617 16.7597 10.8056 16.824 11 16.874V16.1579L13.9245 13.4423C13.3472 14.1356 13 15.0273 13 16V16.874C14.7252 16.4299 16 14.8638 16 13V12.126C15.5182 12.25 15.0715 12.4615 14.678 12.7426L18 9.65785V10V12V13C18 15.973 15.8377 18.441 13 18.917V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18.917ZM19.6805 6.73279C20.0852 6.35699 20.1086 5.72426 19.7328 5.31955C19.357 4.91484 18.7243 4.8914 18.3196 5.26721L4.31955 18.2672C3.91484 18.643 3.89141 19.2757 4.26721 19.6805C4.64301 20.0852 5.27574 20.1086 5.68046 19.7328L19.6805 6.73279Z" fill="currentColor" />
    </svg>
  )
}

// --- Componente Principale ---
export default function MenuComingSoon() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-crema">
      
      {/* Titolo e Descrizione */}
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="font-display text-3xl md:text-4xl text-stone-900 mb-6">
          Our menu is taking shape...
        </h1>
        <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed mb-4">
          We are finalizing a selection of dishes that celebrate the true essence of Italian cuisine. 
        </p>
        <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed font-medium">
          We pride ourselves on being masters of flavor, ensuring everyone has a seat at our table with our specialized <strong className="text-stone-800">Vegan</strong> and <strong className="text-stone-800">Gluten-Free</strong> offerings.
        </p>
      </div>

      {/* Sezione Icone (Ispirata all'immagine) */}
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 mb-16">
        
        {/* Vegan */}
        <div className="flex flex-col items-center group">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[2.5px] border-[#e67e22] text-[#e67e22] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
            <IconVegan className="w-12 h-12 md:w-14 md:h-14" />
          </div>
          <span className="font-sans text-stone-900 text-lg md:text-xl font-medium tracking-wide">
            Vegan
          </span>
        </div>

        {/* Gluten Free */}
        <div className="flex flex-col items-center group">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[2.5px] border-[#e67e22] text-[#e67e22] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
            <IconGlutenFree className="w-12 h-12 md:w-14 md:h-14" />
          </div>
          <span className="font-sans text-stone-900 text-lg md:text-xl font-medium tracking-wide">
            Gluten Free
          </span>
        </div>

      </div>

      {/* Bottone di ritorno (Se usi React Router o simili, puoi sostituire la <a> con <Link>) */}
      <a
        href="/"
        className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full bg-oro text-bruno font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-oro/90 active:scale-95"
      >
        Return to Home
      </a>
      
    </section>
  );
}