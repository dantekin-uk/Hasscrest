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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary-navy border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
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
                    className={`block px-4 py-3 font-body font-semibold tracking-[0.1em] text-sm rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent-gold/10 text-accent-gold' 
                        : 'text-white/80 hover:text-accent-gold hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Component>
                )
              })}
              <Link
                to="/contact"
                className="w-full px-6 py-3 bg-accent-gold text-primary-navy text-sm font-display font-semibold tracking-[0.1em] rounded-full hover:bg-accent-gold-light transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Private Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
