import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'The Firm', path: '/the-firm' },
  { label: 'Wealth Solutions', path: '/wealth-solutions' },
  { label: 'Institutional', path: '/institutional' },
  { label: 'Private Markets', path: '/private-markets' }
]

function useStandaloneScroll() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 2)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isScrolled
}

function Header({ embedded = false, isPastHero = false, showTopper = false }) {
  const standaloneScrolled = useStandaloneScroll()
  const isScrolled = embedded ? isPastHero : standaloneScrolled
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          embedded && showTopper ? 'top-9' : 'top-0'
        } ${
          isScrolled
            ? 'bg-primary-navy backdrop-blur-xl border-b border-primary-navy shadow-[0_4px_32px_rgba(11,25,44,0.5)]'
            : embedded
              ? 'bg-gradient-to-b from-navy-deep/10 via-primary-navy/5 to-transparent backdrop-blur-[1px] border-b border-white/5'
              : 'bg-navy-deep/95 backdrop-blur-xl border-b border-primary-navy'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Brand */}
            <a href="/" className="flex-shrink-0 group relative">
              <div className="absolute -inset-2 rounded-xl bg-accent-gold/0 group-hover:bg-accent-gold/10 transition-all duration-300" />
              <img
                src={logo}
                alt="Hass Crest Capital"
                className="relative h-[4.25rem] sm:h-[4.75rem] w-auto object-contain brightness-110 contrast-[1.35] saturate-125 drop-shadow-[0_0_14px_rgba(212,175,55,0.55)] group-hover:brightness-125 group-hover:contrast-[1.45] group-hover:drop-shadow-[0_0_22px_rgba(212,175,55,0.75)] group-hover:scale-[1.02] transition-all duration-300"
              />
            </a>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isInternal = !!link.path
                const Component = isInternal ? Link : 'a'
                const props = isInternal 
                  ? { to: link.path } 
                  : { href: link.hash }
                
                const isActive = location.pathname === link.path

                return (
                  <Component
                    key={link.label}
                    {...props}
                    className={`relative px-4 py-2.5 text-sm font-body font-semibold tracking-[0.1em] transition-colors duration-300 group ${
                      isActive 
                        ? 'text-accent-gold' 
                        : isScrolled ? 'text-white/75 hover:text-accent-gold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.9)] transition-all duration-300 rounded-full ${
                      isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`} />
                  </Component>
                )
              })}
            </nav>

            {/* Action Area */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className={`px-6 py-2.5 text-sm font-display font-semibold tracking-[0.1em] rounded-full transition-all duration-700 ease-in-out hover:-translate-y-0.5 ${
                  isScrolled
                    ? 'bg-accent-gold text-primary-navy shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:bg-accent-gold-light hover:shadow-[0_0_28px_rgba(212,175,55,0.5)]'
                    : 'bg-gradient-to-r from-navy-deep via-primary-navy to-navy-mid text-white shadow-[0_0_20px_rgba(15,42,69,0.5),0_0_40px_rgba(11,25,44,0.25)] hover:from-navy-mid hover:via-primary-navy hover:to-navy-light hover:shadow-[0_0_28px_rgba(26,63,99,0.7),0_0_50px_rgba(15,42,69,0.4)]'
                }`}
              >
                Private Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white rounded-lg hover:bg-primary-navy/60 transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Modern Floating */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 top-[5rem] sm:top-[6rem]">
            {/* Solid Backdrop */}
            <div
              className="absolute inset-0 bg-navy-deep/80"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Floating Menu Card */}
            <div className="relative mx-3 sm:mx-4 mt-4 bg-gradient-to-br from-navy-deep via-primary-navy to-navy-deep border border-accent-gold/20 rounded-3xl shadow-2xl overflow-hidden">
              {/* Premium gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />

              {/* Decorative premium blobs */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-accent-gold/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

              <div className="relative px-4 sm:px-6 py-6">
                <div className="space-y-2.5 mb-4">
                  {navLinks.map((link, index) => {
                    const isInternal = !!link.path
                    const Component = isInternal ? Link : 'a'
                    const props = isInternal
                      ? { to: link.path }
                      : { href: link.hash }

                    const isActive = location.pathname === link.path

                    return (
                      <Component
                        key={link.label}
                        {...props}
                        className={`group relative block px-5 py-3.5 font-body font-bold tracking-[0.1em] text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                          isActive
                            ? 'text-accent-gold'
                            : 'text-white/80 hover:text-white'
                        }`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10">
                          {link.label}
                        </span>
                        {!isActive && (
                          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-transparent group-hover:w-full transition-all duration-300" />
                        )}
                      </Component>
                    )
                  })}
                </div>

                {/* Contact Button - Modern Gray Box */}
                <Link
                  to="/contact"
                  className="w-full px-5 py-3 bg-gradient-to-br from-gray-700/80 to-gray-800/80 text-white text-sm font-display font-bold tracking-[0.12em] rounded-xl hover:from-gray-600/90 hover:to-gray-700/90 transition-all duration-300 text-center uppercase shadow-lg border border-gray-600/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
