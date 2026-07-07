import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import blogBg from '../assets/image3.jpg'

function BlogTeaser() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-bg-gray relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_64px_-16px_rgba(6,18,32,0.45)] ring-1 ring-primary-navy/10">
          <div className="relative min-h-[280px] sm:min-h-[330px] lg:min-h-[360px]">
            <img
              src={blogBg}
              alt="Ideas that shape better decisions"
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-[1.03] transition-transform duration-[1.4s] ease-out"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-primary-navy/55 to-navy-deep/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-primary-navy/20" />

            <div className="absolute top-0 right-0 w-56 h-56 bg-accent-gold/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-light/20 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 z-10">
              <h2 className="font-heading text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold tracking-tight text-white mb-2 sm:mb-3 max-w-lg">
                Ideas that shape{' '}
                <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">
                  better decisions
                </span>
              </h2>

              <p className="font-body text-white/55 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-7 max-w-md">
                Perspectives on markets, stewardship, and the principles that guide lasting wealth.
              </p>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-display text-primary-navy text-[11px] sm:text-xs font-semibold tracking-[0.08em] px-5 py-2.5 rounded-full bg-accent-gold hover:bg-accent-gold-light shadow-[0_0_24px_rgba(240,193,74,0.35)] hover:shadow-[0_0_32px_rgba(255,213,79,0.5)] hover:-translate-y-0.5 transition-all duration-300 group/btn"
              >
                The Long View
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTeaser
