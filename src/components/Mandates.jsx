import { Building2, Users, Globe, Landmark, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const mandates = [
  {
    icon: Landmark,
    title: 'Institutional & Pension Assets',
    description: 'Capital preservation and sustainable growth for institutional investors, pension schemes, and endowments.',
  },
  {
    icon: Building2,
    title: 'Corporate Organizations',
    description: 'Strategic cash management and liquidity solutions for corporate organizations and SACCOs.',
  },
  {
    icon: Users,
    title: 'Private Wealth & Family Offices',
    description: 'Personalized wealth preservation and long-term investment planning for high-net-worth individuals.',
  },
  {
    icon: Globe,
    title: 'Diaspora Investors',
    description: 'Ethical, diversified, professionally managed Sharia-compliant opportunities worldwide.',
  },
]

function Mandates() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-navy/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative group/mandates-master">
          <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 rounded-[2.5rem] opacity-50 group-hover/mandates-master:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 relative group/intro overflow-hidden rounded-3xl p-px bg-gradient-to-br from-accent-gold/30 via-white/10 to-primary-navy/30 shadow-2xl">
                <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-primary-navy p-6 sm:p-7 lg:p-8 flex flex-col justify-center">
                  <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.15),transparent_35%,rgba(26,63,99,0.2),transparent_70%,rgba(192,156,103,0.12))]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
                      <span className="font-display text-[9px] tracking-[0.24em] uppercase text-white/50 font-medium">
                        Our Mandates
                      </span>
                    </div>

                    <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-4 leading-tight">
                      Structured for
                      <br />
                      <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent transition-all duration-500 group-hover/intro:translate-x-1 inline-block">
                        Investor Needs.
                      </span>
                    </h2>

                    <p className="font-body text-white/70 text-[10px] sm:text-[11px] lg:text-[12px] leading-relaxed max-w-sm mb-5 transition-colors duration-500 group-hover/intro:text-white/85">
                      Curated investment solutions designed to meet the evolving needs of individual and institutional investors.
                    </p>

                    <Link to="/institutional" className="flex items-center gap-2 group/link">
                      <span className="text-[9px] font-display font-bold uppercase tracking-widest text-white/60 sm:text-accent-gold sm:group-hover/link:text-accent-gold-light transition-colors">
                        Advisory Mandates
                      </span>
                      <ChevronRight className="h-3 w-3 text-white/40 sm:text-accent-gold sm:group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-2 sm:gap-3">
                {mandates.map((mandate) => {
                  const Icon = mandate.icon
                  return (
                    <div
                      key={mandate.title}
                      className="group/mandate relative overflow-hidden rounded-xl sm:rounded-2xl border border-primary-navy/10 sm:border-primary-navy/5 bg-white/95 p-3 sm:p-4 lg:p-5 transition-all duration-500 sm:-translate-y-1 sm:hover:-translate-y-1 sm:shadow-lg sm:hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary-navy/[0.02] opacity-100 sm:opacity-0 group-hover/mandate:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-gold to-accent-gold-vivid sm:w-0 group-hover/mandate:w-full transition-all duration-500" />

                      <div className="relative flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-primary-navy/5 flex items-center justify-center text-primary-navy/30 sm:group-hover/mandate:bg-accent-gold/10 sm:group-hover/mandate:text-accent-gold sm:group-hover/mandate:scale-110 transition-all duration-500 shrink-0 self-start">
                          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                        </div>

                        <h3 className="font-display flex-1 text-[11px] sm:text-[12px] lg:text-[13px] font-bold text-primary-navy leading-[1.2] tracking-tight pt-0.5 sm:group-hover/mandate:text-accent-gold transition-colors">
                          {mandate.title}
                        </h3>
                      </div>

                      <p className="relative font-body text-[10px] sm:text-[11px] lg:text-xs text-gray-500 leading-relaxed sm:group-hover/mandate:text-gray-700 transition-colors">
                        {mandate.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mandates
