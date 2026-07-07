import { Landmark, ShieldCheck, Eye, Rocket, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Cta from '../components/Cta'
import officeImage from '../assets/image.jpg'
import infrastructureImage from '../assets/image8.jpeg'

function Firm() {
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
                  The <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">firm.</span>
                </h1>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
              </div>
              <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl animate-fadeInUp delay-100">
                Established to provide professional, Sharia-compliant fund management and investment advisory services across East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mission & Vision Section */}
      <section className="relative z-30 -mt-3 sm:-mt-4 lg:-mt-5 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6 pointer-events-auto">
            {/* Mission Card - Left (Deep Navy) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl p-px bg-gradient-to-br from-accent-gold/30 via-primary-navy/20 to-navy-deep/40 shadow-[0_20px_60px_-15px_rgba(6,18,32,0.5)] -translate-y-1 sm:hover:-translate-y-0"
            >
              <div className="relative h-full overflow-hidden rounded-[1rem] sm:rounded-[1.4rem] md:rounded-[1.9rem] bg-primary-navy p-3 sm:p-4 md:p-6 border border-white/10">
                {/* Background effects from CTA/Infra */}
                <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.15),transparent_35%,rgba(26,63,99,0.2),transparent_70%,rgba(192,156,103,0.12))]" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2">
                    <div className="inline-flex h-6 w-6 sm:h-7 sm:w-8 items-center justify-center rounded-xl bg-accent-gold/20 text-accent-gold ring-1 ring-accent-gold/30 shadow-[0_0_15px_rgba(240,193,74,0.2)]">
                      <Rocket className="h-3 w-3 sm:h-3.5 sm:w-4" />
                    </div>
                    <h3 className="font-display text-[10px] sm:text-xs md:text-base font-bold text-white tracking-tight">
                      Mission
                    </h3>
                  </div>
                  
                  <p className="font-body text-white/70 text-[9px] sm:text-[10px] md:text-[12px] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    To provide world-class investment management services through disciplined portfolio management, prudent risk management, innovative financial products, and uncompromising commitment to integrity, transparency, and client success.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card - Right (Off-White) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl p-px bg-gradient-to-br from-white/40 via-white/20 to-accent-gold/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] -translate-y-1 sm:hover:-translate-y-0"
            >
              <div className="relative h-full overflow-hidden rounded-[1rem] sm:rounded-[1.4rem] md:rounded-[1.9rem] bg-white/80 backdrop-blur-xl p-3 sm:p-4 md:p-6 border border-white/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2">
                    <div className="inline-flex h-6 w-6 sm:h-7 sm:w-8 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold ring-1 ring-accent-gold/20">
                      <Eye className="h-3 w-3 sm:h-3.5 sm:w-4" />
                    </div>
                    <h3 className="font-display text-[10px] sm:text-xs md:text-base font-bold text-primary-navy tracking-tight">
                      Vision
                    </h3>
                  </div>
                  
                  <p className="font-body text-gray-600 text-[9px] sm:text-[10px] md:text-[12px] leading-relaxed">
                    To become the leading Sharia-compliant investment and fund management institution in Kenya and East Africa, delivering sustainable wealth creation through ethical and innovative investment solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Vision Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Image + Box */}
            <div className="flex flex-col gap-3.5 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="relative group">
                {/* Premium Gradient Border Frame */}
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-accent-gold/40 via-white/50 to-primary-navy/30 rounded-[2.1rem] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Decorative Accent - Top Right */}
                <div className="absolute top-4 right-4 z-20 h-12 w-12 border-t-2 border-r-2 border-accent-gold/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                
                {/* Decorative Accent - Bottom Left */}
                <div className="absolute bottom-4 left-4 z-20 h-12 w-12 border-b-2 border-l-2 border-accent-gold/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

                <div className="relative rounded-[2rem] overflow-hidden bg-primary-navy shadow-2xl">
                  <img
                    src={officeImage}
                    alt="Hass Crest Capital Office"
                    className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover object-center transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>

              {/* Modern Box with CTA Background */}
              <div className="relative rounded-full p-px bg-gradient-to-br from-accent-gold/35 via-white/10 to-primary-navy/35 shadow-[0_28px_80px_-22px_rgba(6,18,32,0.45)] w-fit transition-all duration-500 hover:shadow-[0_28px_80px_-12px_rgba(240,193,74,0.35)] hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-primary-navy to-navy-mid" />
                  <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.22),transparent_35%,rgba(26,63,99,0.24),transparent_70%,rgba(192,156,103,0.18))]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/[0.14] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />

                  <div className="absolute inset-0 ring-1 ring-white/10" />

                  <div className="relative px-5 py-2">
                    <p className="font-body text-white/90 text-[12px] sm:text-[13px] leading-relaxed whitespace-nowrap">
                      Anchored in absolute structural integrity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Header + Two Paragraphs */}
            <div className="flex flex-col gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {/* Header */}
              <div>
                <h2 className="font-heading text-lg sm:text-xl font-extrabold tracking-tight">
                  <span className="block text-primary-navy leading-tight">Innovative Solutions</span>
                  <span className="block bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent leading-tight -mt-0.5">
                  For Sustainable Wealth Creation
                  </span>
                </h2>
              </div>

              {/* Paragraph 1 */}
              <div className="border-l-4 border-primary-navy bg-gradient-to-br from-primary-navy/5 to-primary-navy/2 p-4 sm:p-5 rounded-lg transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-navy/8 hover:to-primary-navy/4 hover:shadow-md">
                <p className="font-body text-gray-800 text-xs sm:text-sm leading-relaxed">
               The financial services industry is undergoing profound transformation. Today&apos;s investment environment demands more than financial returns.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="transition-all duration-500 hover:translate-x-1">
                <p className="font-body text-gray-800 text-sm sm:text-base leading-relaxed">
                   Hass Crest Capital Limited is an emerging investment management company established to provide innovative, professionally managed, and Sharia-compliant investment solutions. By combining international investment management best practices with Islamic finance principles, the Company seeks to deliver sustainable long-term value while maintaining the highest standards of governance, transparency, and fiduciary responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Infrastructure Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative group/infra rounded-[2rem] p-px bg-gradient-to-br from-accent-gold/35 via-white/10 to-primary-navy/35 shadow-[0_24px_70px_-15px_rgba(6,18,32,0.45)] transition-all duration-700 hover:shadow-[0_24px_70px_-10px_rgba(240,193,74,0.25)]">
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
                {/* Left: Text Content */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-px w-8 bg-gradient-to-r from-accent-gold to-transparent shrink-0" />
                    <span className="font-display text-[9px] tracking-[0.24em] uppercase text-white/50 font-medium">
                      Operational Excellence
                    </span>
                  </div>

                  <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover/infra:translate-x-1 transition-transform duration-500">
                    Institutional <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">Infrastructure</span>
                  </h2>

                  <p className="font-body text-white/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-md transition-colors duration-500 group-hover/infra:text-white/85">
                    Hass Crest Capital utilizes Microsoft Dynamics 365 Business Central as its core enterprise resource planning platform, integrating customer relationship management, financial management, audit management, reporting, workflow automation, document management, and information security into a centralized operating environment.
                  </p>

                  <div className="pt-3 flex items-center gap-3 border-t border-white/10 group-hover/infra:border-accent-gold/20 transition-colors duration-500">
                    <div className="h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <ShieldCheck className="h-3.5 w-3.5 text-accent-gold" />
                    </div>
                    <span className="font-display text-[9px] tracking-[0.1em] uppercase text-white/40 group-hover/infra:text-white/60">
                      Verified Compliance &middot; Information Security
                    </span>
                  </div>
                </div>

                {/* Right: Modern Image */}
                <div className="relative group/img overflow-hidden rounded-xl shadow-xl transition-all duration-700 hover:-rotate-1 hover:scale-[1.01]">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-accent-gold/30 via-transparent to-primary-navy/40 opacity-50 group-hover/img:opacity-100 transition-opacity" />
                  <img
                    src={infrastructureImage}
                    alt="Cybersecurity & Infrastructure"
                    className="relative w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover transition-all duration-1000 group-hover/img:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-deep/20 group-hover/img:bg-transparent transition-colors duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section with Bento Grid */}
      <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-navy/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-7 max-w-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
              <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-navy/45 font-medium">
                The Framework
              </span>
            </div>

            <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight mb-1">
              <span className="text-primary-navy leading-tight">Engineered with</span>
              <span className="block bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent leading-tight">
                Fiduciary Precision
              </span>
            </h2>

            <p className="font-body text-gray-500 text-[11px] sm:text-xs leading-relaxed">
              A strong governance framework ensuring accountability, prudent decision-making, and effective oversight.
            </p>
          </div>

          <div className="relative group/master">
            {/* Master Card Wrapper with Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-gold/20 via-primary-navy/5 to-accent-gold/20 rounded-[2.5rem] opacity-50 group-hover/master:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-3 sm:p-4 lg:p-6 border border-white/20 shadow-xl overflow-hidden">
              {/* Internal Decorative Blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 sm:gap-2.5 lg:gap-3 lg:min-h-[320px]">
                {/* Card 01: Sharia Advisory */}
                <div className="group col-span-1 row-span-1 lg:col-start-1 lg:row-start-1 relative overflow-hidden rounded-xl sm:rounded-2xl border border-accent-gold/30 bg-white p-2.5 sm:p-3 lg:p-5 shadow-sm transition-all duration-300 -translate-y-1 sm:hover:-translate-y-1 sm:border-primary-navy/5 sm:shadow-lg sm:hover:shadow-lg">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2 lg:mb-3">
                    <div className="inline-flex h-7 w-7 sm:h-8 sm:w-9 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
                      <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-[10px] sm:text-xs lg:text-base font-bold text-accent-gold mb-1 sm:mb-1.5 lg:mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-navy group-hover:to-accent-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 sm:text-primary-navy sm:group-hover:bg-gradient-to-r sm:group-hover:from-primary-navy sm:group-hover:to-accent-gold sm:group-hover:bg-clip-text sm:group-hover:text-transparent">
                    Sharia Advisory
                  </h3>
                  <p className="font-body text-[9px] sm:text-[10px] lg:text-xs text-gray-600 leading-relaxed">
                    Independent oversight ensures all investments remain compliant with approved Islamic finance principles throughout their lifecycle.
                  </p>
                </div>

                {/* Card 02: Risk Management (Deep Navy) */}
                <div className="group col-span-1 row-span-1 lg:col-start-1 lg:row-start-2 relative overflow-hidden rounded-xl sm:rounded-2xl border border-accent-gold/30 bg-primary-navy p-2.5 sm:p-3 lg:p-5 shadow-xl transition-all duration-300 -translate-y-1 sm:hover:-translate-y-1 sm:border-primary-navy/10 sm:shadow-2xl sm:shadow-primary-navy/20 sm:hover:shadow-2xl sm:hover:shadow-primary-navy/20">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2 lg:mb-3">
                      <div className="inline-flex h-7 w-7 sm:h-8 sm:w-9 items-center justify-center rounded-xl bg-accent-gold/20 text-accent-gold ring-1 ring-accent-gold/30 shadow-[0_0_15px_rgba(240,193,74,0.2)]">
                        <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-[10px] sm:text-xs lg:text-base font-bold text-accent-gold mb-1 sm:mb-1.5 lg:mb-2 group-hover:text-accent-gold transition-colors duration-300 sm:text-white sm:group-hover:text-accent-gold">
                      Risk Management
                    </h3>
                    <p className="font-body text-[9px] sm:text-[10px] lg:text-xs text-white/70 leading-relaxed">
                      An enterprise-wide framework integrates continuous monitoring of compliance with regulatory requirements, reporting obligations, and industry standards to protect investor capital.
                    </p>
                  </div>
                </div>

                {/* Card 03: Strategic Oversight */}
                <div className="group col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 relative overflow-hidden rounded-xl sm:rounded-2xl border border-accent-gold/30 bg-gradient-to-br from-white via-white to-accent-gold/[0.08] p-2.5 sm:p-3 lg:p-5 shadow-sm transition-all duration-300 -translate-y-1 sm:hover:-translate-y-1 sm:border-primary-navy/5 sm:shadow-lg sm:hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 rounded-full bg-accent-gold/10 blur-3xl pointer-events-none" />
                  <div className="relative h-full flex flex-col justify-between gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-7 w-7 sm:h-8 sm:w-9 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
                        <Landmark className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                    </div>

                    <div className="max-w-lg">
                      <h3 className="font-display text-[11px] sm:text-sm lg:text-lg font-bold tracking-tight text-accent-gold mb-1 sm:mb-1.5 lg:mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-navy group-hover:to-accent-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 sm:text-primary-navy sm:group-hover:bg-gradient-to-r sm:group-hover:from-primary-navy sm:group-hover:to-accent-gold sm:group-hover:bg-clip-text sm:group-hover:text-transparent">
                        Strategic Oversight
                      </h3>
                      <p className="font-body text-[9px] sm:text-[10px] lg:text-xs text-gray-600 leading-relaxed">
                        Governed by an experienced Board of Directors responsible for strategic oversight, fiduciary accountability, and corporate governance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-2.5 pt-0.5 sm:pt-1">
                      <div className="rounded-lg sm:rounded-xl border border-primary-navy/5 bg-white/80 px-2 py-1.5 sm:px-2.5 sm:py-2 lg:px-3 lg:py-2.5 shadow-sm group-hover:border-accent-gold/20 transition-all">
                        <p className="font-display text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.16em] text-primary-navy/35 uppercase mb-0.5 sm:mb-1">Board</p>
                        <p className="font-body text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 leading-relaxed">Strategic oversight and fiduciary accountability.</p>
                      </div>
                      <div className="rounded-lg sm:rounded-xl border border-primary-navy/5 bg-white/80 px-2 py-1.5 sm:px-2.5 sm:py-2 lg:px-3 lg:py-2.5 shadow-sm group-hover:border-accent-gold/20 transition-all">
                        <p className="font-display text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.16em] text-primary-navy/35 uppercase mb-0.5 sm:mb-1">Committees</p>
                        <p className="font-body text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 leading-relaxed">Supported by specialized functions including the Audit and Risk Committee, Investment Committee, and Remuneration and HR Committee</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta 
        badge="Direct Access"
        title="Institutional Consultation"
        description="Connect with our advisory team to discuss specific mandates, governance frameworks, or regional investment strategies."
        buttonText="Request Consultation"
        showInput={false}
        linkTo="/contact?type=firm"
      />
    </main>
  )
}

export default Firm
