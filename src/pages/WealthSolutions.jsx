import { Shield, TrendingUp, Leaf, LayoutGrid, BadgeCheck, Compass, Briefcase, Wallet, BarChart3, PieChart, Globe, ChevronRight } from 'lucide-react'
import Cta from '../components/Cta'
import image1 from '../assets/image7.jpeg'

const philosophyPillars = [
  { label: 'Capital Preservation', icon: Shield },
  { label: 'Risk-Adjusted Returns', icon: TrendingUp },
  { label: 'Responsible Investing', icon: Leaf },
  { label: 'Diversification', icon: LayoutGrid },
  { label: 'Sharia Compliance', icon: BadgeCheck },
]

const investmentProducts = [
  {
    id: '01',
    title: 'Money Market Funds',
    description: 'Designed for capital preservation and high liquidity while strictly adhering to Islamic finance principles.',
    icon: Wallet,
  },
  {
    id: '02',
    title: 'Fixed Income & Balanced Funds',
    description: 'Engineered to generate sustainable risk-adjusted returns through diversified, asset-backed allocations.',
    icon: BarChart3,
  },
  {
    id: '03',
    title: 'Equity Funds',
    description: 'Focused on long-term wealth creation through rigorous investment screening and active portfolio management.',
    icon: PieChart,
  },
  {
    id: '04',
    title: 'ESG & Impact Investment Funds',
    description: 'Aligning capital with responsible investing criteria to contribute meaningfully to economic development and sustainability.',
    icon: Globe,
  },
]

function WealthSolutions() {
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
                  Wealth <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">solutions.</span>
                </h1>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
              </div>
              <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Personalized wealth preservation and long-term investment planning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative group/philosophy rounded-[2rem] p-px bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 shadow-[0_20px_60px_-15px_rgba(6,18,32,0.15)] transition-all duration-700">
            <div className="relative overflow-hidden rounded-[1.95rem] bg-white/40 backdrop-blur-sm border border-white/20">
              {/* Internal Decorative Blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-16 p-6 sm:p-8 lg:p-10">
                {/* Left: Header + Text Content */}
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
                      <span className="font-display text-[9px] tracking-[0.24em] uppercase text-primary-navy/45 font-medium">
                        Investment Philosophy
                      </span>
                    </div>

                    <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-primary-navy group-hover/philosophy:translate-x-1 transition-transform duration-500">
                      Active Portfolio <br />
                      <span className="bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent">Management</span>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-6">
                    <p className="font-body text-gray-600 text-[11px] sm:text-xs lg:text-sm leading-relaxed transition-colors duration-500 group-hover/philosophy:text-gray-900">
                      Hass Crest Capital delivers investment solutions that are transparent, asset-backed, and responsibly managed. We employ rigorous investment research, macroeconomic analysis, disciplined asset allocation, and robust risk management to create long-term value.
                    </p>

                    <div className="pt-4 flex items-center gap-3 border-t border-primary-navy/5 group-hover/philosophy:border-accent-gold/20 transition-colors duration-500">
                      <div className="h-7 w-7 rounded-lg bg-primary-navy/5 flex items-center justify-center border border-primary-navy/5">
                        <Compass className="h-3.5 w-3.5 text-accent-gold" />
                      </div>
                      <span className="font-display text-[9px] tracking-[0.1em] uppercase text-primary-navy/40 group-hover/philosophy:text-primary-navy/60">
                        Fiduciary Excellence &middot; Responsible Stewardship
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: 2x2 Grid of Cards */}
                <div className="grid grid-cols-2 gap-3 max-w-sm lg:ml-auto w-full lg:pt-12">
                  {philosophyPillars.slice(0, 4).map((pillar) => (
                    <div
                      key={pillar.label}
                      className="group/pillar flex flex-col items-center justify-center text-center gap-2.5 rounded-xl border border-primary-navy/5 bg-white shadow-sm p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent-gold/30 hover:shadow-md"
                    >
                      <div className="h-8 w-8 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0 group-hover/pillar:scale-110 transition-transform duration-500">
                        <pillar.icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-[10px] sm:text-[11px] font-bold text-primary-navy group-hover/pillar:text-accent-gold transition-colors leading-tight">
                        {pillar.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Clients & Family Offices Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative group/private rounded-[2rem] p-px bg-gradient-to-br from-accent-gold/35 via-white/10 to-primary-navy/35 shadow-[0_24px_70px_-15px_rgba(6,18,32,0.45)] transition-all duration-700 hover:shadow-[0_24px_70px_-10px_rgba(240,193,74,0.25)]">
            <div className="relative overflow-hidden rounded-[1.95rem]">
              {/* Premium Background from CTA */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-primary-navy to-navy-mid" />
              <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.22),transparent_35%,rgba(26,63,99,0.24),transparent_70%,rgba(192,156,103,0.18))]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/[0.14] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.85) 0.6px, transparent 0.6px)',
                  backgroundSize: '20px 20px',
                }}
              />

              <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy-light/10 rounded-full blur-3xl pointer-events-none" />

              <div className="absolute inset-0 ring-1 ring-white/10" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12 p-5 sm:p-7 lg:p-9">
                {/* Left: Modern Image */}
                 <div className="relative group/img overflow-hidden rounded-xl shadow-xl transition-all duration-700 hover:-rotate-1 hover:scale-[1.01] order-1 lg:order-1">
                   <div className="absolute -inset-1 bg-gradient-to-tr from-accent-gold/30 via-transparent to-primary-navy/40 opacity-50 group-hover/img:opacity-100 transition-opacity" />
                   <img
                     src={image1}
                     alt="Discretionary Portfolio Management"
                     className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] object-cover transition-all duration-1000 group-hover/img:scale-110"
                     loading="lazy"
                   />
                   <div className="absolute inset-0 bg-navy-deep/20 group-hover/img:bg-transparent transition-colors duration-700" />
                 </div>

                {/* Right: Text Content */}
                 <div className="flex flex-col gap-3.5 order-2 lg:order-2">
                   <div className="flex items-center gap-2.5">
                     <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
                     <span className="font-display text-[9px] tracking-[0.24em] uppercase text-white/50 font-medium">
                       Private Clients & Family Offices
                     </span>
                   </div>

                   <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover/private:translate-x-1 transition-transform duration-500">
                     Discretionary <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">Portfolio Management</span>
                   </h2>

                   <p className="font-body text-white/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-md transition-colors duration-500 group-hover/private:text-white/85">
                     Hass Crest Capital provides discretionary and customized investment management services tailored to private investors, high-net-worth individuals, family offices, and diaspora investors. By integrating personalized wealth preservation and long-term investment planning solutions, the firm develops specialized investment vehicles tailored to specific client investment objectives.
                   </p>

                   <div className="pt-3 flex items-center gap-3 border-t border-white/10 group-hover/private:border-accent-gold/20 transition-colors duration-500">
                     <div className="h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                       <Briefcase className="h-3.5 w-3.5 text-accent-gold" />
                     </div>
                     <span className="font-display text-[9px] tracking-[0.1em] uppercase text-white/40 group-hover/private:text-white/60">
                       Customized Vehicles &middot; Strategic Preservation
                     </span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Investment Platform Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-navy/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
              <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-navy/45 font-medium">
                The Investment Platform
              </span>
            </div>

            <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight mb-2">
              <span className="text-primary-navy leading-tight">Diversified Multi-Asset</span>
              <span className="block bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent leading-tight">
                Investment Solutions
              </span>
            </h2>

            <p className="font-body text-gray-500 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-xl">
              Each investment product is governed by clearly defined investment policies, risk parameters, and Sharia oversight to ensure institutional-grade performance.
            </p>
          </div>

          <div className="relative group/master">
            {/* Master Card Wrapper with Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 rounded-[2.5rem] opacity-50 group-hover/master:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl overflow-hidden">
              {/* Internal Decorative Blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[minmax(140px,auto)]">
                {investmentProducts.map((product, index) => {
                  const isLarge = index === 3; // Let's make the 4th card the large navy one
                  
                  return (
                    <div 
                      key={product.id}
                      className={`group/item relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-700 
                        ${isLarge 
                          ? 'sm:col-span-2 md:col-span-2 md:row-span-1 bg-navy-deep border-white/10 shadow-2xl p-4 sm:p-6 lg:p-8' 
                          : 'bg-white border-primary-navy/5 p-3 sm:p-4 lg:p-5 hover:shadow-lg hover:-translate-y-1 hover:border-accent-gold/30'
                        }
                        ${index === 1 ? 'sm:col-span-2 md:col-span-2' : ''}
                      `}
                    >
                      {isLarge && (
                        <>
                          {/* Background Accents for Large Card */}
                          <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.15),transparent_35%,rgba(26,63,99,0.2),transparent_70%)]" />
                          <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl" />
                        </>
                      )}

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-transform duration-500 group-hover/item:scale-110
                              ${isLarge ? 'bg-white/10 text-accent-gold' : 'bg-accent-gold/10 text-accent-gold'}
                            `}>
                              <product.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div>
                              <span className={`font-display text-[8px] sm:text-[9px] tracking-widest uppercase font-bold
                                ${isLarge ? 'text-accent-gold/80' : 'text-accent-gold/60'}
                              `}>
                                {product.id}
                              </span>
                              <h3 className={`font-display font-bold transition-colors duration-300
                                ${isLarge ? 'text-base sm:text-lg lg:text-xl text-white' : 'text-xs sm:text-sm lg:text-base text-primary-navy group-hover/item:text-accent-gold'}
                              `}>
                                {product.title}
                              </h3>
                            </div>
                          </div>
                          {!isLarge && <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-navy/10 group-hover/item:text-accent-gold group-hover/item:translate-x-1 transition-all duration-300" />}
                        </div>

                        <p className={`font-body leading-relaxed transition-colors max-w-md
                          ${isLarge 
                            ? 'text-[10px] sm:text-[12px] lg:text-[14px] text-white/70 group-hover/item:text-white/90' 
                            : 'text-[10px] sm:text-[11px] lg:text-xs text-gray-500 group-hover/item:text-gray-700'
                          }
                        `}>
                          {product.description}
                        </p>

                        {isLarge && (
                          <div className="mt-auto pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4">
                            <button className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-accent-gold text-primary-navy font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
                              Learn More
                            </button>
                            <span className="text-white/30 text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">Mandate Driven</span>
                          </div>
                        )}

                        {!isLarge && (
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent group-hover/item:via-accent-gold/20 transition-all duration-700" />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta 
        badge="Direct Access"
        title="Wealth Consultation"
        description="Connect with our wealth advisory team to discuss personalized preservation strategies and long-term planning."
        buttonText="Request Consultation"
        showInput={false}
        linkTo="/contact?type=wealth"
      />
    </main>
  )
}

export default WealthSolutions
