import React from 'react'
import { motion } from 'framer-motion'
import { Shield, TrendingUp, BarChart3, PieChart, Globe, ChevronRight, Building2, Landmark, Handshake, Users, ShieldCheck, Scale } from 'lucide-react'
import Cta from '../components/Cta'
import image10 from '../assets/image10.jpeg'
import image11 from '../assets/image11.jpeg'

function PrivateMarkets() {
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
                  Private <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">markets.</span>
                </h1>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
              </div>
              <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Managing alternative investments across Private Equity, Venture Capital, Infrastructure, and Real Estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Image (Modernized) */}
            <div className="flex flex-col gap-3.5 order-2 lg:order-1">
              <div className="relative group">
                {/* Premium Gradient Border Frame */}
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-accent-gold/40 via-white/50 to-primary-navy/30 rounded-[2.1rem] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Decorative Accent - Top Right */}
                <div className="absolute top-4 right-4 z-20 h-12 w-12 border-t-2 border-r-2 border-accent-gold/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                
                {/* Decorative Accent - Bottom Left */}
                <div className="absolute bottom-4 left-4 z-20 h-12 w-12 border-b-2 border-l-2 border-accent-gold/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

                <div className="relative rounded-[2rem] overflow-hidden bg-primary-navy shadow-2xl">
                  <img
                    src={image10}
                    alt="The Approach"
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

            {/* Right: Header + Content */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
                  <span className="font-display text-[9px] tracking-[0.24em] uppercase text-primary-navy/45 font-medium">
                   THE APPROACH
                  </span>
                </div>
                <h2 className="font-heading text-lg sm:text-xl font-extrabold tracking-tight">
                  <span className="block text-primary-navy leading-tight">Asset-Backed.</span>
                  <span className="block bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent leading-tight -mt-0.5">
                    Responsibly Managed.
                  </span>
                </h2>
              </div>

              {/* Paragraph: The Strategy (The Box) */}
              <div className="border-l-4 border-primary-navy bg-gradient-to-br from-primary-navy/5 to-primary-navy/2 p-4 sm:p-5 rounded-lg transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-navy/8 hover:to-primary-navy/4 hover:shadow-md">
                <p className="font-body text-gray-800 text-sm sm:text-base leading-relaxed">
                  Hass Crest Capital develops specialized investment vehicles tailored to client investment objectives. By integrating detailed financial, operational, legal, ESG, and risk assessments, the firm ensures all alternative investments are ethical, transparent, and asset-backed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Infrastructure Style Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative group/infrastructure-master">
            {/* Master Card Wrapper with Premium Shadow/Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/30 via-white/10 to-primary-navy/20 rounded-[2.5rem] opacity-60 group-hover/infrastructure-master:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-primary-navy rounded-[2.5rem] p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl">
              {/* Premium Background Effects */}
              <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.12),transparent_35%,rgba(26,63,99,0.15),transparent_70%,rgba(192,156,103,0.1))]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center relative z-10">
                {/* Left: Content Area (Taking more space) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
                      <span className="font-display text-[9px] tracking-[0.24em] uppercase text-white/50 font-medium">
                        Growth Capital
                      </span>
                    </div>
                    <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-5 leading-tight">
                      Private Equity & <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">Venture Capital.</span>
                    </h2>
                    <p className="font-body text-white/60 text-[11px] sm:text-xs lg:text-[13px] leading-relaxed max-w-lg">
                      Managing investments in private equity and venture capital funds to create sustainable wealth for institutional and corporate investors.
                    </p>
                  </div>

                  {/* High-Density Blocks Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    {/* Block 01 */}
                    <div className="group/block relative overflow-hidden rounded-lg sm:rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 lg:p-5 transition-all duration-500 hover:bg-white/10 hover:border-accent-gold/30 hover:-translate-y-1">
                      <div className="relative z-10">
                        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-2 sm:mb-3.5 group-hover/block:scale-110 transition-transform">
                          <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <h3 className="font-display text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-white mb-1.5 sm:mb-2 tracking-wider">
                          PE & VENTURE CAPITAL
                        </h3>
                        <p className="font-body text-white/50 text-[9px] sm:text-[10px] lg:text-[11px] leading-relaxed">
                          Sustainable wealth creation through high-conviction fund management.
                        </p>
                      </div>
                    </div>

                    {/* Block 02 */}
                    <div className="group/block relative overflow-hidden rounded-lg sm:rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 lg:p-5 transition-all duration-500 hover:bg-white/10 hover:border-accent-gold/30 hover:-translate-y-1">
                      <div className="relative z-10">
                        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-2 sm:mb-3.5 group-hover/block:scale-110 transition-transform">
                          <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <h3 className="font-display text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-white mb-1.5 sm:mb-2 tracking-wider">
                          REAL ESTATE & INFRA
                        </h3>
                        <p className="font-body text-white/50 text-[9px] sm:text-[10px] lg:text-[11px] leading-relaxed">
                          Managing REITs and direct investments for economic development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Modern Visual Area (More Compact) */}
                <div className="lg:col-span-5 relative group/visual animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="absolute -inset-4 bg-accent-gold/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover/visual:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-square max-w-[280px] sm:max-w-[340px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl bg-navy-deep shadow-2xl transition-all duration-700 group-hover/visual:scale-[1.02] group-hover/visual:rotate-1">
                    <img
                      src={image11}
                      alt="Private Markets Infrastructure"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/visual:scale-110"
                    />
                    
                    {/* Subtle Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Content Badge */}
                    <div className="absolute top-4 right-4 p-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 transform -translate-y-2 opacity-0 group-hover/visual:translate-y-0 group-hover/visual:opacity-100 transition-all duration-500">
                      <p className="font-display text-[8px] font-bold text-accent-gold uppercase tracking-widest">
                        Mandate Focused
                      </p>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-display text-[8px] font-bold text-accent-gold/60 uppercase tracking-[0.2em]">Asset Class</span>
                        <span className="font-display text-base font-extrabold text-white">Alternatives.</span>
                      </div>
                      <div className="h-9 w-9 rounded-full bg-accent-gold flex items-center justify-center text-primary-navy shadow-lg shadow-accent-gold/20 transform translate-y-2 opacity-0 group-hover/visual:translate-y-0 group-hover/visual:opacity-100 transition-all duration-500">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Structuring Section (Sukuk) */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative group/sukuk rounded-[2.5rem] p-px bg-gradient-to-br from-accent-gold/20 via-white/40 to-primary-navy/10 shadow-xl overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {/* Master Glassmorphism Background */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
            
            {/* Decorative Blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-16 p-6 sm:p-8 lg:p-10">
              {/* Left: Content Area */}
              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
                    <span className="font-display text-[9px] tracking-[0.24em] uppercase text-primary-navy/45 font-medium">
                      03 // Advisory & Structuring
                    </span>
                  </div>

                  <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-primary-navy group-hover/sukuk:translate-x-1 transition-transform duration-500">
                    Innovative Sukuk <span className="bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent">Structuring.</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="font-body text-gray-600 text-[11px] sm:text-xs lg:text-sm leading-relaxed transition-colors duration-500 group-hover/sukuk:text-gray-900">
                    The firm specializes in developing innovative Sukuk structures for infrastructure, corporate financing, real estate, and public sector investments. Supported by independent Sharia advisory oversight, we provide advisory services on Sharia-compliant financial products and investment structures.
                  </p>

                  <div className="pt-4 flex items-center gap-3 border-t border-primary-navy/5 group-hover/sukuk:border-accent-gold/20 transition-colors duration-500">
                    <div className="h-7 w-7 rounded-lg bg-primary-navy/5 flex items-center justify-center border border-primary-navy/5">
                      <ShieldCheck className="h-3.5 w-3.5 text-accent-gold" />
                    </div>
                    <span className="font-display text-[9px] tracking-[0.1em] uppercase text-primary-navy/40 group-hover/sukuk:text-primary-navy/60">
                      Sharia Advisory Oversight &middot; Ethical Structuring
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Target Audience Cards */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:pt-12">
                {[
                  { label: "Development Finance Institutions", icon: Landmark },
                  { label: "Institutional Investors", icon: Users },
                  { label: "Corporate Organizations", icon: Building2 },
                  { label: "Public Sector Entities", icon: Globe }
                ].map((audience) => (
                  <div
                    key={audience.label}
                    className="group/audience flex flex-col items-center justify-center text-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl border border-primary-navy/5 bg-white shadow-sm p-2.5 sm:p-3 lg:p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent-gold/30 hover:shadow-md"
                  >
                    <div className="h-7 w-7 sm:h-8 sm:h-9 sm:w-9 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0 group-hover/audience:scale-110 transition-transform duration-500">
                      <audience.icon className="h-3.5 w-3.5 sm:h-4 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <h3 className="font-display text-[8px] sm:text-[9px] lg:text-[10px] sm:text-[11px] font-bold text-primary-navy group-hover/audience:text-accent-gold transition-colors leading-tight uppercase tracking-wider">
                      {audience.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta 
        badge="Alternative Access"
        title="Institutional Private Market Solutions."
        description="Partner with Hass Crest Capital to access high-conviction alternative investment opportunities across emerging markets."
        buttonText="Request Consultation"
        showInput={false}
        linkTo="/contact?type=private-markets"
      />
    </main>
  )
}

export default PrivateMarkets
