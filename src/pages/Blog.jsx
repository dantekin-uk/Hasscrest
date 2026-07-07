import { ArrowLeft, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import Cta from '../components/Cta'

function Blog() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background with Pattern */}
      <div className="fixed inset-0 -z-10 bg-bg-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'radial-gradient(#0B192C 0.5px, transparent 0.5px)'
             }} 
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-navy/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-navy/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/3" />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-primary-navy rounded-b-[1.2rem] sm:rounded-b-[1.5rem] lg:rounded-b-[2rem] shadow-2xl overflow-hidden mx-1 sm:mx-1 h-[240px] sm:h-[280px] lg:h-[320px] isolate"
      >
        {/* Overlay layers */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-primary-navy/50" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-navy-deep via-primary-navy/80 to-primary-navy/40" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-primary-navy/30 via-transparent to-navy-deep/60" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-deep/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-navy/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col pt-[6rem] sm:pt-[7rem]">
          <div className="flex-1 min-h-0" />

          {/* Content */}
          <div className="relative flex-shrink-0 pb-8 sm:pb-12 lg:pb-16">
            <div className="max-w-3xl lg:max-w-4xl text-left">
              <div className="flex items-center gap-3 mb-4 animate-fadeInUp">
                <h1 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-white leading-tight">
                  Blog & <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">Insights.</span>
                </h1>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
              </div>
              <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Thoughtful perspectives on markets, stewardship, and the principles behind lasting wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-navy/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.1em] text-primary-navy/50 hover:text-accent-gold transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24">
            <div className="mb-6 inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-accent-gold/10">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-accent-gold" />
            </div>

            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary-navy text-center mb-3">
              Blog Coming Soon
            </h2>

            <p className="font-body text-gray-600 text-sm sm:text-base text-center max-w-md leading-relaxed mb-8">
              We're crafting thoughtful articles on investment strategy, market insights, and wealth stewardship. Check back soon for our latest perspectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-display text-primary-navy text-[10px] sm:text-[11px] font-bold tracking-[0.1em] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light hover:brightness-105 shadow-[0_0_24px_rgba(240,193,74,0.35)] hover:shadow-[0_0_36px_rgba(255,213,79,0.5)] hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                Explore Our Services
              </Link>

              <Link
                to="/fqrs"
                className="inline-flex items-center gap-2 font-display text-primary-navy text-[10px] sm:text-[11px] font-bold tracking-[0.1em] px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-primary-navy hover:bg-primary-navy/5 transition-all duration-300 uppercase"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta
        badge="Stay Updated"
        title="More Content Coming"
        description="Stay tuned for our latest insights on investment management, market trends, and wealth stewardship. Contact us to discuss your investment objectives in the meantime."
        buttonText="Get in Touch"
        subject="Blog Inquiry"
        bodyPrefix="I'd like to stay updated on HASS Crest's latest insights:"
        showInput={false}
      />
    </main>
  )
}

export default Blog
