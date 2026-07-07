function Faqs() {
  return (
    <section id="faqs" className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-bg-gray relative overflow-hidden">
      <div className="absolute -top-24 left-1/3 w-80 h-80 bg-primary-navy/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-accent-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6 sm:mb-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
            <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-navy/45 font-medium">
              FAQs
            </span>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight mb-1.5">
            <span className="text-primary-navy">Frequently Asked </span>
            <span className="bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="font-body text-gray-500 text-xs sm:text-sm leading-relaxed">
            Coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="group rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-primary-navy/10 shadow-[0_22px_60px_-26px_rgba(6,18,32,0.18)] overflow-hidden"
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="h-3.5 w-2/3 rounded-full bg-primary-navy/10" />
                  <div className="w-7 h-7 rounded-lg bg-primary-navy/[0.04] border border-primary-navy/10" />
                </div>
                <div className="h-3 w-full rounded-full bg-primary-navy/7" />
                <div className="mt-2 h-3 w-5/6 rounded-full bg-primary-navy/7" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-primary-navy/7" />
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-accent-gold/70 to-transparent opacity-70 group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs
