import { Shield, Lightbulb, BarChart3, Target, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import philosophyImage from '../assets/image2.jpg'

const cards = [
  {
    icon: Shield,
    title: 'Capital Preservation',
    text: 'Disciplined stewardship and risk management protect investor interests across every mandate.',
  },
  {
    icon: Lightbulb,
    title: 'Sharia Compliance',
    text: 'Investment decisions are guided by recognized Islamic finance principles and independent Sharia oversight.',
  },
  {
    icon: BarChart3,
    title: 'Sustainable Returns',
    text: 'Active portfolio management and macro research drive sustainable risk-adjusted returns.',
  },
  {
    icon: Target,
    title: 'Responsible Investing',
    text: 'We prioritize ethical, diversified investments that build long-term value and support economic development.',
  },
]

function Thesis() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-navy/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative group/thesis-master">
          {/* Master Wrapper with Deep Navy Background */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 rounded-[2.5rem] opacity-50 group-hover/thesis-master:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-navy-deep rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-white/10 shadow-xl overflow-hidden">
            {/* Background effects for the entire bento box */}
            <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.1),transparent_35%,rgba(26,63,99,0.12),transparent_70%)]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch relative z-10">
              
              {/* Left Column: Intro Card with Image Background */}
              <div className="lg:col-span-5 relative group/intro overflow-hidden rounded-2xl sm:rounded-3xl p-px bg-gradient-to-br from-accent-gold/30 via-white/10 to-primary-navy/30 shadow-2xl">
                <div className="relative h-full min-h-[280px] sm:min-h-[320px] overflow-hidden rounded-[1.5rem] sm:rounded-[1.85rem] flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                  {/* Image Background Layer */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={philosophyImage}
                      alt="Investment Philosophy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/intro:scale-110"
                    />
                    {/* Premium Overlays for Readability & Executive Feel */}
                    <div className="absolute inset-0 bg-primary-navy/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/80 via-primary-navy/40 to-transparent" />
                    <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.12),transparent_35%,rgba(26,63,99,0.15),transparent_70%)]" />
                  </div>

                  <div className="relative z-10">
                    <h2 className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
                      Principles That{' '}
                      <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent transition-all duration-500 group-hover/intro:translate-x-1 inline-block">
                        Endure.
                      </span>
                    </h2>

                    <p className="font-body text-white/80 text-[10px] sm:text-[11px] lg:text-[13px] leading-relaxed max-w-sm mb-4 sm:mb-6 transition-colors duration-500 group-hover/intro:text-white">
                      Our investment philosophy combines global best practices in asset management with the principles of Islamic finance, ensuring investments are transparent, asset-backed, and responsibly managed.
                    </p>

                    <Link to="/firm" className="flex items-center gap-2 group/link">
                      <span className="text-[9px] font-display font-bold uppercase tracking-widest text-white/60 sm:text-accent-gold sm:group-hover/link:text-accent-gold-light transition-colors">
                        Investment Process
                      </span>
                      <ChevronRight className="h-3 w-3 text-white/40 sm:text-accent-gold sm:group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Grid of Principles with Premium Navy Background */}
              <div className="lg:col-span-7 relative">
                <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3 h-full content-start">
                  {cards.map((card) => {
                    const Icon = card.icon
                    return (
                      <div
                        key={card.title}
                        className="group/card relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4 lg:p-5 transition-all duration-500 sm:hover:-translate-y-1 sm:hover:shadow-lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary-navy/5 opacity-0 sm:group-hover/card:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-gold to-accent-gold-vivid sm:group-hover/card:w-full transition-all duration-500" />

                        <div className="relative flex items-center gap-2 sm:gap-2.5 mb-2">
                          <div className="h-7 w-7 sm:h-8 sm:w-9 rounded-lg bg-white/5 flex items-center justify-center text-accent-gold/70 sm:group-hover/card:bg-accent-gold/10 sm:group-hover/card:text-accent-gold sm:group-hover/card:scale-110 transition-all duration-500 shrink-0 self-start">
                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:h-4.5 sm:w-4.5" />
                          </div>

                          <h3 className="font-display flex-1 text-[10px] sm:text-[11px] lg:text-[13px] font-bold text-white sm:group-hover/card:text-accent-gold leading-[1.2] tracking-tight pt-0.5 transition-colors">
                            {card.title}
                          </h3>
                        </div>

                        <p className="relative font-body text-[10px] sm:text-[11px] lg:text-xs text-white/50 sm:group-hover/card:text-white/80 leading-relaxed transition-colors">
                          {card.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thesis
