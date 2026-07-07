function NewsUpdates() {
  return (
    <section id="news" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-primary-navy/[0.035] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-accent-gold/[0.05] rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6 sm:mb-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
            <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-navy/45 font-medium">
              News
            </span>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight mb-1.5">
            <span className="text-primary-navy">News </span>
            <span className="bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent">
              Updates
            </span>
          </h2>

          <p className="font-body text-gray-500 text-xs sm:text-sm leading-relaxed">
            Coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-2.5 sm:gap-3">
          <div className="group lg:col-span-3">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-primary-navy/10 bg-white shadow-[0_20px_50px_-22px_rgba(6,18,32,0.22)]">
              <div className="relative h-52 sm:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/[0.08] via-white to-accent-gold/[0.10]" />
                <div
                  className="absolute inset-0 opacity-[0.055] pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(11,25,44,0.9) 0.6px, transparent 0.6px)',
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/15 via-transparent to-transparent" />
              </div>
            </div>

            <div className="pt-3 sm:pt-3.5">
              <div className="h-3.5 w-2/3 rounded-full bg-primary-navy/10" />
              <div className="mt-2 h-px w-16 bg-gradient-to-r from-accent-gold/70 to-transparent opacity-70 group-hover:w-24 transition-all duration-300" />
            </div>
          </div>

          <div className="group relative lg:col-span-3 overflow-hidden rounded-xl sm:rounded-2xl min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] shadow-[0_24px_64px_-16px_rgba(6,18,32,0.28)] ring-1 ring-primary-navy/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/[0.10] via-primary-navy/[0.04] to-accent-gold/[0.12]" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 via-transparent to-transparent" />
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-primary-navy/10 rounded-full blur-3xl" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <div className="h-4 w-3/5 rounded-full bg-white/20 backdrop-blur-md" />
              <div className="mt-2 h-3 w-2/5 rounded-full bg-white/10 backdrop-blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsUpdates
