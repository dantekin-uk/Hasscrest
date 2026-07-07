import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Cta({ 
  title = "Join Our Newsletter", 
  description = "Brief market notes, stewardship insights, and firm updates for decision-makers. Clear, concise, and relevant.", 
  buttonText = "Subscribe To Newsletter",
  badge = "Stay Updated",
  showInput = true,
  linkTo = "/contact"
}) {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-bg-gray relative overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-accent-gold/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 right-1/4 w-[28rem] h-[28rem] bg-primary-navy/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative rounded-2xl sm:rounded-3xl p-px bg-gradient-to-br from-accent-gold/35 via-white/10 to-primary-navy/35 shadow-[0_28px_80px_-22px_rgba(6,18,32,0.45)]">
          <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.6rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-primary-navy to-navy-mid" />
            <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.22),transparent_35%,rgba(26,63,99,0.24),transparent_70%,rgba(192,156,103,0.18))]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/[0.14] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />

            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.85) 0.6px, transparent 0.6px)',
                backgroundSize: '18px 18px',
              }}
            />

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-gold/18 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-navy-light/18 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute inset-0 ring-1 ring-white/10" />

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className={`grid grid-cols-1 ${showInput ? 'lg:grid-cols-12' : 'lg:grid-cols-2'} gap-6 lg:gap-8 items-center`}>
                <div className={showInput ? 'lg:col-span-7' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-white/10 shrink-0" />
                    <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white/55 font-medium">
                      {badge}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold tracking-tight text-white mb-2">
                    {title}
                  </h2>

                  <p className="font-body text-white/65 text-xs sm:text-sm leading-relaxed max-w-xl">
                    {description}
                  </p>
                </div>

                <div className={showInput ? 'lg:col-span-5' : 'lg:flex lg:justify-end'}>
                  {showInput ? (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact?email=${encodeURIComponent(e.target.email.value)}`
                      }} 
                      className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3"
                    >
                      <div className="relative flex-1">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white/20 via-accent-gold/25 to-white/10 blur opacity-70" />
                        <input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          className="relative w-full px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 placeholder:text-white/35 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold/35 transition-all"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 font-display text-primary-navy text-[11px] sm:text-xs font-semibold tracking-[0.08em] px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light hover:brightness-105 shadow-[0_0_26px_rgba(240,193,74,0.35)] hover:shadow-[0_0_36px_rgba(255,213,79,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {buttonText}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </form>
                  ) : (
                    <Link
                      to={linkTo}
                      className="group inline-flex items-center justify-center gap-2 font-display text-primary-navy text-[11px] sm:text-xs font-semibold tracking-[0.08em] px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light hover:brightness-105 shadow-[0_0_26px_rgba(240,193,74,0.35)] hover:shadow-[0_0_36px_rgba(255,213,79,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {buttonText}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  )}

                  {showInput && (
                    <div className="mt-3 text-[10px] font-body text-white/45 tracking-wide">
                      Direct communication via secure channels.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
