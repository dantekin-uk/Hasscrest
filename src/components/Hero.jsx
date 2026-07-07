import { ArrowRight, Building2, TrendingUp, Landmark, Home, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import image13 from '../assets/image13.jpeg'
import image7 from '../assets/image7.jpeg'
import image9 from '../assets/image9.jpeg'
import image10 from '../assets/image10.jpeg'
import image11 from '../assets/image11.jpeg'

const carouselCards = [
  {
    title: 'Private Equity',
    description: 'Strategic investments in private companies',
    image: image7,
    icon: Building2
  },
  {
    title: 'Venture Capital',
    description: 'Early-stage growth opportunities',
    image: image9,
    icon: TrendingUp
  },
  {
    title: 'Infrastructure',
    description: 'Essential development projects',
    image: image10,
    icon: Landmark
  },
  {
    title: 'Real Estate',
    description: 'Property investment solutions',
    image: image11,
    icon: Home
  },
  {
    title: 'Private Markets',
    description: 'Alternative asset strategies',
    image: image13,
    icon: Briefcase
  }
]

const PillarBackground = () => (
  <div className="absolute inset-0 bg-[#0A1128] overflow-hidden">
    {/* Premium Background Image Layer */}
    <div className="absolute inset-0 z-0">
      <img
        src={image13}
        alt="Investment Management"
        className="w-full h-full object-cover object-center scale-105 animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
        style={{ filter: 'contrast(1.3) brightness(1.05) saturate(1.15)' }}
      />
    </div>

    {/* Sophisticated Gradient Overlays for Rich Elegance */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/40 via-primary-navy/25 to-navy-deep/35 z-10" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/70 via-primary-navy/20 to-transparent z-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/30 via-transparent to-navy-deep/50 z-10" />

    {/* Premium Accent Glows */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 z-5 animate-pulse" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 z-5" />

    {/* Subtle Elegant Texture */}
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10"
         style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
  </div>
)

function MovingCards() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselCards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute bottom-6 right-3 sm:right-4 lg:right-8 z-30 w-[140px] sm:w-[180px] lg:w-[200px] hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 80, scale: 0.8, rotateY: 10 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, x: -80, scale: 0.8, rotateY: -10 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative bg-gradient-to-br from-white/12 via-white/8 to-white/4 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 lg:p-3.5 border border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/15 via-transparent to-primary-navy/25" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
          
          <div className="relative flex items-center gap-2 sm:gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-xl ring-1.5 ring-white/15">
              <img
                src={carouselCards[currentIndex].image}
                alt={carouselCards[currentIndex].title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/70 via-primary-navy/20 to-transparent" />
              
              {/* Icon overlay */}
              <div className="absolute bottom-1 sm:bottom-1.5 right-1 sm:right-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-gold/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                {(() => {
                  const Icon = carouselCards[currentIndex].icon
                  return <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-navy" strokeWidth={2.5} />
                })()}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-accent-gold mb-0.5 sm:mb-1 truncate tracking-wide">
                {carouselCards[currentIndex].title}
              </h4>
              <p className="font-body text-[7px] sm:text-[8px] lg:text-[9px] text-white/75 leading-relaxed line-clamp-2">
                {carouselCards[currentIndex].description}
              </p>
            </div>
          </div>
          
          {/* Progress indicator with glow */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-light shadow-[0_0_8px_rgba(240,193,74,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#0A1128] rounded-b-[1.2rem] sm:rounded-b-[1.5rem] lg:rounded-b-[2rem] shadow-2xl overflow-hidden mx-1 sm:mx-1 h-[480px] sm:h-[520px] lg:h-[560px] isolate"
    >
      {/* 3D Pillar Background */}
      <PillarBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col pt-[7.25rem] sm:pt-[8.25rem]">
        <div className="flex-1 min-h-0" />

        {/* Content */}
        <div className="relative flex-shrink-0 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-3xl lg:max-w-4xl text-left">
            <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-4 leading-[1.1] text-balance animate-fadeInUp">
              Redefining <span className="bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light bg-clip-text text-transparent">Investment Management.</span>
            </h1>
            
            <p className="font-body text-white/75 text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-2xl mb-8 animate-fadeInUp delay-100">
              An emerging institution delivering innovative, professionally managed, and Sharia-compliant investment solutions across East Africa.
            </p>

            <div className="animate-fadeInUp delay-200">
              <Link
                to="/private-markets"
                className="group inline-flex items-center gap-2 sm:gap-2.5 font-display text-primary-navy text-[10px] sm:text-[11px] font-bold tracking-[0.1em] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-accent-gold via-accent-gold-vivid to-accent-gold-light hover:brightness-105 shadow-[0_0_24px_rgba(240,193,74,0.35)] hover:shadow-[0_0_36px_rgba(255,213,79,0.5)] hover:-translate-y-0.5 transition-all duration-300 uppercase"
              >
                Discover Our Mandates
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MovingCards />
    </section>
  )
}

export default Hero
