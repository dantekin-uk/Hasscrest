import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, ShieldCheck, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const companyLinks = [
  { label: 'The Firm', href: '/the-firm' },
  { label: 'Wealth Solutions', href: '/wealth-solutions' },
  { label: 'Private Markets', href: '/private-markets' },
  { label: 'Institutional', href: '/institutional' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get In Touch', href: '/contact' },
]

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'News', href: '/#news' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

function FooterLink({ href, children }) {
  if (href.startsWith('/') && !href.includes('#')) {
    return (
      <Link to={href} className="group inline-flex items-center gap-1.5 font-body text-white/50 text-[11px] sm:text-xs hover:text-white transition-colors duration-300">
        <span className="w-0 h-px bg-accent-gold group-hover:w-2 transition-all duration-300" />
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className="group inline-flex items-center gap-1.5 font-body text-white/50 text-[11px] sm:text-xs hover:text-white transition-colors duration-300">
      <span className="w-0 h-px bg-accent-gold group-hover:w-2 transition-all duration-300" />
      {children}
    </a>
  )
}

function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all duration-500 hover:bg-accent-gold hover:text-primary-navy hover:border-accent-gold hover:-translate-y-1 shadow-lg ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ArrowUpRight className="w-4 h-4 rotate-[-90deg]" />
      </button>

      <footer id="contact" className="bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.5px)',
            backgroundSize: '18px 18px',
          }}
        />

        <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent-gold/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-navy-light/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-6">
            {/* Left side - Brand */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-6">
                {/* Brand */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-gold/25 via-white/5 to-transparent border border-white/10 shadow-[0_0_22px_rgba(212,175,55,0.12)] group-hover:shadow-[0_0_34px_rgba(212,175,55,0.22)] transition-all duration-300">
                      <div className="absolute inset-[1px] rounded-[0.7rem] bg-navy-deep/60" />
                      <span className="relative z-10 w-full h-full flex items-center justify-center font-display font-extrabold tracking-[0.08em] text-accent-gold">
                        H
                      </span>
                    </div>
                    <div className="leading-tight">
                      <div className="font-display font-semibold tracking-[0.08em] text-white">
                        Hass Crest Capital LImited
                      </div>
                    </div>
                  </Link>

                  <p className="font-body text-white/50 text-[11px] sm:text-xs leading-relaxed mb-4 max-w-[280px]">
                    Hass Crest Capital is a CMA-licensed investment firm delivering Sharia-compliant wealth solutions across East Africa.
                  </p>

                  <div className="flex items-center gap-1.5">
                    {socials.map(({ label, href, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/45 hover:bg-accent-gold hover:border-accent-gold hover:text-primary-navy hover:scale-110 transition-all duration-300"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right side - Links and Contact */}
            <div className="flex-1 lg:flex-none">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="font-display text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/35 font-semibold mb-3">
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <FooterLink href={link.href}>{link.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="font-display text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/35 font-semibold mb-3">
                    Company
                  </h4>
                  <ul className="space-y-2">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <FooterLink href={link.href}>{link.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="font-display text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/35 font-semibold mb-3">
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <FooterLink href={link.href}>{link.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Contact */}
            <motion.div
              className="lg:w-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="font-display text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-white/35 font-semibold mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-gold/30 transition-colors duration-300 mt-0.5">
                    <Mail className="w-3 h-3 text-accent-gold/70" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-white/70 text-[10px] font-semibold uppercase tracking-wide">Email</span>
                    <Link
                      to="/contact"
                      className="font-body text-white/50 text-[11px] sm:text-xs hover:text-accent-gold transition-colors duration-300"
                    >
                      info@hasscrest.com
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-gold/30 transition-colors duration-300 mt-0.5">
                    <Phone className="w-3 h-3 text-accent-gold/70" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-white/70 text-[10px] font-semibold uppercase tracking-wide">Phone</span>
                    <a
                      href="tel:+971444410564"
                      className="font-body text-white/50 text-[11px] sm:text-xs hover:text-accent-gold transition-colors duration-300"
                    >
                      +971 4 444 10564
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-gold/30 transition-colors duration-300">
                    <MapPin className="w-3 h-3 text-accent-gold/70" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-white/70 text-[10px] font-semibold uppercase tracking-wide">Offices</span>
                    <span className="font-body text-white/50 text-[11px] sm:text-xs leading-relaxed">
                      6th Floor, Prudential Building, Wabera Street, Nairobi, Kenya
                      <br />
                      <br />
                      Jumeirah Business Center 5, Plot NO. W1, Jumeirah Lakes Towers, UNIT 301-304 Dubai U.A.E
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-between gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="font-body text-white/30 text-[10px] text-center sm:text-left">
              © {new Date().getFullYear()} Hass Crest Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="font-body text-white/30 text-[10px] hover:text-white/55 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="w-px h-2.5 bg-white/10" aria-hidden="true" />
              <a href="#" className="font-body text-white/30 text-[10px] hover:text-white/55 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer
