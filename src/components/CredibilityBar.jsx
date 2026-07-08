import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Landmark } from 'lucide-react'

const items = [
  {
    title: 'Regulated oversight',
    subtext: 'CMA & RBA licensed',
    icon: ShieldCheck,
    gradient: 'from-navy-deep to-navy-mid',
    titleHover: 'group-hover:from-navy-deep group-hover:to-navy-light',
    bgGradient: 'from-primary-navy/20 to-navy-mid/20',
    iconBg: 'bg-gradient-to-br from-primary-navy/10 to-navy-mid/25 border-primary-navy/20',
    iconColor: 'text-primary-navy',
    hoverGlow: 'bg-gradient-to-br from-primary-navy/20 to-navy-mid/30',
    hoverShadow: 'group-hover:shadow-[0_8px_24px_rgba(11,25,44,0.22)]',
    particle: 'bg-navy-mid shadow-[0_0_6px_rgba(15,42,69,0.5)]',
  },
  {
    title: 'Ethical mandate',
    subtext: 'Independent Sharia advisory board',
    icon: Scale,
    gradient: 'from-navy-mid to-accent-gold',
    titleHover: 'group-hover:from-navy-mid group-hover:to-accent-gold',
    bgGradient: 'from-navy-mid/15 to-accent-gold/20',
    iconBg: 'bg-gradient-to-br from-navy-mid/15 to-accent-gold/20 border-accent-gold/25',
    iconColor: 'text-navy-mid',
    hoverGlow: 'bg-gradient-to-br from-navy-mid/25 to-accent-gold/30',
    hoverShadow: 'group-hover:shadow-[0_8px_24px_rgba(240,193,74,0.2)]',
    particle: 'bg-accent-gold shadow-[0_0_6px_rgba(240,193,74,0.5)]',
  },
  {
    title: 'Asset focus',
    subtext: 'Institutional & private wealth',
    icon: Landmark,
    gradient: 'from-accent-amber to-accent-gold-vivid',
    titleHover: 'group-hover:from-accent-amber group-hover:to-accent-gold-vivid',
    bgGradient: 'from-accent-gold/20 to-accent-gold-light/25',
    iconBg: 'bg-gradient-to-br from-accent-gold-light/50 to-accent-gold-vivid/35 border-accent-gold/35',
    iconColor: 'text-primary-navy',
    hoverGlow: 'bg-gradient-to-br from-accent-gold/30 to-accent-gold-light/35',
    hoverShadow: 'group-hover:shadow-[0_8px_24px_rgba(255,213,79,0.28)]',
    particle: 'bg-accent-gold-vivid shadow-[0_0_6px_rgba(255,213,79,0.5)]',
  },
]

function CredibilityBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative z-30 flex justify-center -mt-2 sm:-mt-3 lg:-mt-4 mb-6 sm:mb-12 px-3 sm:px-6 lg:px-8 animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
      <div
        className={`w-full max-w-7xl transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative">
          {/* Ambient glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold-vivid/20 via-accent-amber/10 to-accent-gold-light/20 rounded-[1.4rem] sm:rounded-[2rem] blur-2xl sm:blur-3xl opacity-75" />
          <div className="absolute inset-x-[10%] -top-3 h-12 bg-accent-gold/20 blur-2xl opacity-80" />

          {/* Premium outer shell */}
          <div className="relative rounded-2xl sm:rounded-3xl p-px bg-gradient-to-br from-accent-gold/30 via-white/15 to-primary-navy/25 shadow-[0_18px_60px_-18px_rgba(11,25,44,0.32),0_12px_40px_-22px_rgba(240,193,74,0.24)] overflow-hidden">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(246,248,252,0.86))] backdrop-blur-2xl ring-1 ring-white/40">
              <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(192,156,103,0.18),transparent_30%,rgba(11,25,44,0.08),transparent_68%,rgba(192,156,103,0.16))]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-primary-navy/[0.04]" />
              <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-accent-gold/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-12 h-36 w-36 rounded-full bg-primary-navy/10 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(rgba(11,25,44,0.8) 0.6px, transparent 0.6px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="absolute top-0 left-0 right-0 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-accent-gold-vivid to-transparent opacity-80 shadow-[0_0_8px_rgba(255,213,79,0.5)] sm:shadow-[0_0_12px_rgba(255,213,79,0.6)]" />
              <div className="absolute inset-0 shadow-inner rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/55 to-transparent pointer-events-none" />

              <div className="relative m-1 sm:m-1.5 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3">
                <div className="grid grid-cols-3 gap-1 sm:gap-4">
                  {items.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        className="group relative flex flex-col sm:flex-col items-center justify-center sm:justify-center sm:gap-0 text-center sm:text-center px-2 sm:px-4 py-2 sm:py-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12, duration: 0.7, ease: 'easeOut' }}
                      >
                        {/* Gradient blob (desktop only) */}
                        <div
                          className={`hidden sm:block absolute -inset-4 sm:-inset-6 bg-gradient-to-br ${item.bgGradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl sm:blur-3xl -z-10 scale-105 group-hover:scale-110`}
                        />

                        {/* Floating particles (desktop only) */}
                        <div className="hidden sm:block absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className={`absolute top-1/4 left-1/4 w-1 h-1 ${item.particle} rounded-full animate-particleFloat`} />
                          <div className={`absolute top-3/4 right-1/4 w-1 h-1 ${item.particle} rounded-full animate-particleFloatDelayed`} />
                          <div className={`absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-navy rounded-full animate-particleFloat`} />
                        </div>

                        {/* Icon */}
                        <div className="mb-1.5 sm:mb-3 relative flex-shrink-0">
                          <div
                            className={`${item.iconBg} p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border transition-all duration-700 transform group-hover:scale-110 group-hover:-translate-y-0.5 sm:group-hover:-translate-y-1 ${item.hoverShadow} relative overflow-hidden`}
                          >
                            <div
                              className={`absolute inset-0 ${item.hoverGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl`}
                            />
                            <Icon
                              className={`w-3.5 h-3.5 sm:w-6 sm:h-6 relative z-10 ${item.iconColor}`}
                              strokeWidth={2.25}
                            />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="flex flex-col items-center sm:items-center">
                          {/* Title */}
                          <motion.h4
                            className="font-display text-primary-navy text-[0.7rem] sm:text-sm lg:text-base font-bold tracking-tight mb-0.5 sm:mb-1 capitalize"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
                          >
                            <span className={`group-hover:bg-gradient-to-r ${item.titleHover} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                              {item.title}
                            </span>
                          </motion.h4>

                          {/* Subtext */}
                          <motion.p
                            className="font-body text-slate-500 text-[0.6rem] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed max-w-full sm:max-w-[240px]"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.12, duration: 0.4 }}
                          >
                            {item.subtext}
                          </motion.p>
                        </div>

                        {/* Bottom accent (desktop only) */}
                        <div
                          className={`hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-12 sm:group-hover:w-16 transition-all duration-700 rounded-full shadow-[0_0_10px_rgba(255,213,79,0.5)]`}
                        />

                        {/* Corner accents (desktop only) */}
                        <div className="hidden sm:block absolute top-2 left-2 w-2 h-2 border-t border-l border-accent-gold-vivid/60 rounded-tl opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_6px_rgba(255,213,79,0.4)] transition-opacity duration-700" />
                        <div className="hidden sm:block absolute top-2 right-2 w-2 h-2 border-t border-r border-accent-gold-vivid/60 rounded-tr opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_6px_rgba(255,213,79,0.4)] transition-opacity duration-700" />
                      </motion.div>
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

export default CredibilityBar
