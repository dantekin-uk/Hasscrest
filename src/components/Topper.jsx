import { Link } from 'react-router-dom'

const topperLinks = [
  { label: 'Blog', path: '/blog' },
  { label: 'FAQs', path: '/fqrs' },
  { label: 'News', path: '/', hash: '#news' },
  { label: 'Contact', path: '/contact' }
]

function Topper({ show = false }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-[60] bg-primary-navy border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
        show ? 'h-9 opacity-100 translate-y-0' : 'h-0 opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="w-full h-9 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Left — email contact (shows on sm screens and above) */}
          <a
            href="mailto:info@hasscrest.com"
            className="hidden sm:flex items-center gap-1.5 text-xs font-body font-bold tracking-wide text-white/60 hover:text-accent-gold transition-colors duration-300"
          >
            <svg className="w-3 h-3 text-accent-gold/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">info@hasscrest.com</span>
          </a>

          {/* Spacer for small screens to push links to center when email is hidden */}
          <div className="sm:hidden" />

          {/* Right — links (shows on all screens) */}
          <nav className="flex items-center gap-3 sm:gap-5">
            {topperLinks.map((link) => {
              if (link.hash) {
                return (
                  <a
                    key={link.label}
                    href={link.path + link.hash}
                    className="text-[0.65rem] sm:text-xs font-body font-bold tracking-[0.18em] text-white/60 hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              }
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-[0.65rem] sm:text-xs font-body font-bold tracking-[0.18em] text-white/60 hover:text-accent-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Spacer for small screens to balance layout */}
          <div className="sm:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Topper
