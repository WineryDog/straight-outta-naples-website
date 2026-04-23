import { serviceInfo } from '../constants'

function IconMap({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="m21.51 6.14-5-3a.99.99 0 0 0-.87-.08L8.09 5.89 3.51 3.14a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v13c0 .35.18.68.49.86l5 3c.26.16.58.19.87.08l7.55-2.83 4.59 2.75c.16.1.34.14.51.14s.34-.04.49-.13c.31-.18.51-.51.51-.87V7a.99.99 0 0 0-.49-.86M7 18.23l-3-1.8V5.77l3 1.8v10.67Zm8-1.93-6 2.25V7.69l6-2.25zm5 1.93-3-1.8V5.77l3 1.8v10.67Z" />
    </svg>
  )
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z" />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
  )
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bruno text-beige font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg text-oro-bright tracking-wide">{serviceInfo.name}</h3>
            <p className="text-sm text-beige/70 leading-relaxed">
              {serviceInfo.description || 'Authentic Neapolitan cuisine in the heart of Melbourne.'}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg text-oro-bright tracking-wide">Contact</h3>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(serviceInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-beige/80 hover:text-oro transition-colors duration-150"
            >
              <IconMap className="w-4 h-4 mt-0.5 shrink-0" />
              {serviceInfo.address}
            </a>
            <a
              href={`tel:${serviceInfo.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2.5 text-sm text-beige/80 hover:text-oro transition-colors duration-150"
            >
              <IconPhone className="w-4 h-4 shrink-0" />
              {serviceInfo.phone}
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg text-oro-bright tracking-wide">Follow us</h3>
            <div className="flex gap-5">
              <a
                href={serviceInfo.igLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${serviceInfo.name} on Instagram`}
                className="flex items-center gap-2 text-sm text-beige/80 hover:text-oro transition-colors duration-150"
              >
                <IconInstagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href={serviceInfo.fbLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${serviceInfo.name} on Facebook`}
                className="flex items-center gap-2 text-sm text-beige/80 hover:text-oro transition-colors duration-150"
              >
                <IconFacebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-beige/20 text-xs text-beige/40">
          © {currentYear} {serviceInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
