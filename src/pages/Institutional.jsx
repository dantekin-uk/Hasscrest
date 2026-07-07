import { Shield, TrendingUp, Leaf, LayoutGrid, BadgeCheck, Compass, Briefcase, Wallet, BarChart3, PieChart, Globe, ChevronRight, ShieldCheck, Landmark, Scale, FileText, Umbrella, Users, Building2, Heart, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'
import Cta from '../components/Cta'
import image9 from '../assets/image9.jpeg'

const capabilities = [
  {
    id: '01',
    title: 'Pension Fund Investment Management',
    description: 'Managing retirement assets for occupational pension schemes and institutional investors, ensuring capital preservation and long-term sustainable returns.',
    icon: Landmark,
  },
  {
    id: '02',
    title: 'Institutional Portfolio Management',
    description: 'Providing discretionary and customized investment management services tailored to the specific mandates and liquidity requirements of institutional investors.',
    icon: Scale,
  },
  {
    id: '03',
    title: 'Investment Advisory & Structuring',
    description: 'Offering strategic investment advice, portfolio structuring, asset allocation, and investment research to support institutional decision-making.',
    icon: FileText,
  },
]

const markets = [
  { label: 'Pension Funds', icon: Umbrella },
  { label: 'Insurance Companies', icon: ShieldCheck },
  { label: 'SACCOs', icon: Users },
  { label: 'Corporate Organizations', icon: Building2 },
  { label: 'Faith-Based Organizations', icon: Heart },
  { label: 'Foundations & Endowments', icon: Handshake },
  { label: 'Development Finance Institutions', icon: Globe },
]

function Institutional() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background with Pattern */}
      <div className="fixed inset-0 -z-10 bg-bg-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#0B192C 0.5px, transparent 0.5px)' }} />
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
                  Institutional <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">excellence.</span>
                </h1>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
              </div>
              <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Providing discretionary and customized investment management services tailored to institutional investors and corporate organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiduciary Stewardship Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Header + Content */}
            <div className="flex flex-col gap-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-extrabold tracking-tight">
                  <span className="block text-primary-navy leading-tight">Disciplined Stewardship</span>
                  <span className="block bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent leading-tight -mt-0.5">
                    of Assets.
                  </span>
                </h2>
              </div>

              {/* Paragraph 1: The Philosophy (The Box) */}
              <div className="border-l-4 border-primary-navy bg-gradient-to-br from-primary-navy/5 to-primary-navy/2 p-4 sm:p-5 rounded-lg transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-navy/8 hover:to-primary-navy/4 hover:shadow-md">
                <p className="font-body text-gray-800 text-[11px] sm:text-xs leading-relaxed">
                  Hass Crest Capital recognizes that trust is earned through disciplined stewardship of our clients' assets and unwavering adherence to ethical business practices.
                </p>
              </div>

              {/* Paragraph 2: The Execution (Outside the Box) */}
              <div className="transition-all duration-500 hover:translate-x-1">
                <p className="font-body text-gray-800 text-sm sm:text-base leading-relaxed">
                  The firm provides world-class investment management services through disciplined portfolio management, prudent risk management, and uncompromising commitment to integrity and transparency.
                </p>
              </div>
            </div>

            {/* Right: Image (Modernized) */}
            <div className="flex flex-col gap-3.5 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                {/* Premium Gradient Border Frame */}
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-accent-gold/40 via-white/50 to-primary-navy/30 rounded-[2.1rem] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Decorative Accent - Top Right */}
                <div className="absolute top-4 right-4 z-20 h-12 w-12 border-t-2 border-r-2 border-accent-gold/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                
                {/* Decorative Accent - Bottom Left */}
                <div className="absolute bottom-4 left-4 z-20 h-12 w-12 border-b-2 border-l-2 border-accent-gold/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

                <div className="relative rounded-[2rem] overflow-hidden bg-primary-navy shadow-2xl">
                  <img
                    src={image9}
                    alt="Fiduciary Stewardship"
                    className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover object-center transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Capabilities Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-navy/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
              <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-navy/45 font-medium">
                Institutional Capabilities
              </span>
            </div>

            <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight mb-2">
              <span className="text-primary-navy leading-tight">Specialized Investment</span>
              <span className="block bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent leading-tight">
                Management Solutions
              </span>
            </h2>

            <p className="font-body text-gray-500 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-xl">
              We break down the exact institutional services tailored to the specific mandates and liquidity requirements of our partners.
            </p>
          </div>

          <div className="relative group/master">
            {/* Master Card Wrapper with Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 rounded-[2.5rem] opacity-50 group-hover/master:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl overflow-hidden">
              {/* Internal Decorative Blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 sm:gap-2.5 lg:gap-3 lg:min-h-[320px]">
                {capabilities.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group/item relative overflow-hidden rounded-lg sm:rounded-xl border transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${
                      index === 0
                        ? 'col-span-1 row-span-1 lg:col-start-1 lg:row-start-1 bg-white border-primary-navy/5 p-3 sm:p-4 lg:p-5 shadow-sm sm:border-primary-navy/5 sm:shadow-lg sm:hover:shadow-lg'
                        : index === 1
                        ? 'col-span-1 row-span-1 lg:col-start-1 lg:row-start-2 bg-primary-navy border-primary-navy/30 p-3 sm:p-4 lg:p-5 shadow-xl'
                        : 'col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 bg-white border-primary-navy/5 p-3 sm:p-4 lg:p-5 shadow-sm sm:border-primary-navy/5 sm:shadow-lg sm:hover:shadow-lg justify-end'
                    }`}
                  >
                    {index === 1 && (
                      <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.1),transparent_35%,rgba(26,63,99,0.15),transparent_70%,rgba(192,156,103,0.08))]" />
                    )}
                    {index === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                    )}
                    {index === 1 && (
                      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-accent-gold/8 rounded-full blur-2xl pointer-events-none" />
                    )}

                    <div className={`flex items-start justify-between mb-3 sm:mb-4 relative z-10 ${index === 1 ? '' : index === 2 ? 'hidden' : ''}`}>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl group-hover/item:scale-110 transition-transform duration-500 ${
                          index === 1
                            ? 'bg-accent-gold/20 text-accent-gold'
                            : 'bg-accent-gold/10 text-accent-gold'
                        }`}>
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className={`font-display text-[11px] sm:text-[12px] lg:text-[13px] font-bold transition-colors duration-300 ${
                            index === 1
                              ? 'text-white group-hover/item:text-accent-gold'
                              : 'text-primary-navy group-hover/item:text-accent-gold'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {index === 2 && (
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
                        <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl group-hover/item:scale-110 transition-transform duration-500 bg-accent-gold/10 text-accent-gold">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-[11px] sm:text-[12px] lg:text-[13px] font-bold transition-colors duration-300 text-primary-navy group-hover/item:text-accent-gold">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    )}

                    <p className={`font-body text-[10px] sm:text-[11px] lg:text-[12px] leading-relaxed relative z-10 transition-colors ${
                      index === 1
                        ? 'flex-grow text-white/70 group-hover/item:text-white/85'
                        : 'text-gray-500 group-hover/item:text-gray-700'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Markets Section */}
      <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-navy/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative group/markets-master">
            {/* Master Card Wrapper */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 rounded-[2.5rem] opacity-50 group-hover/markets-master:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
                
                {/* Large Card: Intro Text (Deep Navy Premium) */}
                <div className="lg:col-span-5 relative group/intro overflow-hidden rounded-2xl sm:rounded-3xl p-px bg-gradient-to-br from-accent-gold/30 via-white/10 to-primary-navy/30 shadow-2xl">
                  <div className="relative h-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.85rem] bg-primary-navy p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                    {/* Premium Background Effects */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.15),transparent_35%,rgba(26,63,99,0.2),transparent_70%,rgba(192,156,103,0.12))]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
                        <span className="font-display text-[9px] tracking-[0.24em] uppercase text-white/50 font-medium">
                          Our Markets
                        </span>
                      </div>
                      <h2 className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
                        Trusted by <br />
                        <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent transition-all duration-500 group-hover/intro:translate-x-1 inline-block">
                          Institutional Capital.
                        </span>
                      </h2>
                      <p className="font-body text-white/70 text-[10px] sm:text-[11px] lg:text-[12px] leading-relaxed max-w-sm mb-3 sm:mb-5 transition-colors duration-500 group-hover/intro:text-white/85">
                        Our investment solutions are specifically engineered to meet the stringent regulatory and return requirements of large-scale capital allocators.
                      </p>
                      
                      <div className="flex items-center gap-2 group/link cursor-pointer">
                        <span className="text-[9px] font-display font-bold uppercase tracking-widest text-accent-gold group-hover/link:text-accent-gold-light transition-colors">
                          Explore Mandates
                        </span>
                        <ChevronRight className="h-3 w-3 text-accent-gold group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Small Cards Grid (The Markets) */}
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
                  {markets.map((market, index) => (
                    <div 
                      key={market.label}
                      className="group/market relative overflow-hidden rounded-lg sm:rounded-xl border border-primary-navy/5 bg-white p-2 sm:p-3 transition-all duration-500 hover:-translate-y-1 hover:border-accent-gold/30 hover:shadow-md flex flex-col items-center justify-center text-center gap-2 sm:gap-2.5"
                    >
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-primary-navy/5 flex items-center justify-center text-primary-navy/30 group-hover/market:bg-accent-gold/10 group-hover/market:text-accent-gold group-hover/market:scale-110 transition-all duration-500">
                        <market.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <h3 className="font-display text-[7px] sm:text-[8px] lg:text-[9px] font-bold text-primary-navy group-hover/market:text-accent-gold transition-colors leading-tight uppercase tracking-wider">
                        {market.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta 
        badge="Institutional Access"
        title="Institutional Consultation"
        description="Engage with our institutional advisory team to discuss customized investment vehicles and corporate portfolio management."
        buttonText="Request Consultation"
        showInput={false}
        linkTo="/contact?type=institutional"
      />
    </main>
  )
}

export default Institutional
