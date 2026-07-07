import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import sukukImage from '../assets/image4.jpg'
import alternativeImage from '../assets/image12.jpeg'
import image14 from '../assets/image14.jpeg'

const featured = {
  title: 'Precision Mutual Funds',
  text: 'Highly liquid capital. Designing and managing collective investment schemes, including Sharia-Compliant Money Market Funds and Equity Funds, to generate sustainable risk-adjusted returns.',
  image: image14,
  alt: 'Precision Mutual Funds',
}

const smallCards = [
  {
    title: 'Sukuk & Fixed Yield',
    text: 'Developing innovative Sukuk structures for infrastructure, corporate financing, real estate, and public sector investments.',
    image: sukukImage,
    alt: 'Sukuk & Fixed Yield',
  },
  {
    title: 'Alternative Assets',
    text: 'High-growth private markets. Managing investments in Private Equity, Venture Capital, Infrastructure, and Real Estate.',
    image: alternativeImage,
    alt: 'Alternative Assets',
  },
]

function FeaturedCard({ strategy }) {
  return (
    <div className="group relative h-full min-h-[180px] sm:min-h-[200px] lg:min-h-0 overflow-hidden rounded-xl sm:rounded-2xl -translate-y-1 sm:hover:-translate-y-0 sm:shadow-lg">
      <img
        src={strategy.image}
        alt={strategy.alt}
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03] sm:scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/45 to-primary-navy/5" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-navy/95 via-primary-navy/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 lg:p-5">
        <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold text-accent-gold mb-1 tracking-tight sm:group-hover:text-accent-gold-light transition-colors duration-300">
          {strategy.title}
        </h3>

        <p className="font-body text-white/65 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-lg mb-2 sm:mb-3">
          {strategy.text}
        </p>

        <Link
          to="/wealth-solutions"
          className="inline-flex items-center gap-1.5 font-display text-white/90 text-[10px] sm:text-[11px] lg:text-xs font-medium tracking-[0.06em] px-3 py-1.5 sm:px-3.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary-navy transition-all duration-300 group/btn"
        >
          Explore
          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
}

function SmallCard({ strategy }) {
  return (
    <div className="group relative h-full min-h-[180px] sm:min-h-[200px] lg:min-h-0 overflow-hidden rounded-xl sm:rounded-2xl -translate-y-1 sm:hover:-translate-y-0 sm:shadow-lg">
      <img
        src={strategy.image}
        alt={strategy.alt}
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.05] sm:scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-2.5 sm:p-3 lg:p-4">
        <h3 className="font-display text-[10px] sm:text-xs lg:text-base font-bold text-accent-gold tracking-tight sm:group-hover:text-accent-gold-light transition-colors duration-300 mb-1">
          {strategy.title}
        </h3>

        <p className="font-body text-white/70 text-[9px] sm:text-[10px] lg:text-xs leading-relaxed">
          {strategy.text}
        </p>
      </div>
    </div>
  )
}

function Strategies() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-navy/[0.03] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/[0.04] rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6 sm:mb-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-accent-gold to-primary-navy/15 shrink-0" />
            <span className="font-display text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-navy/45 font-medium">
              Investment Solutions
            </span>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight mb-1.5">
            <span className="text-primary-navy">Investment </span>
            <span className="bg-gradient-to-r from-navy-mid via-accent-gold to-accent-gold-vivid bg-clip-text text-transparent">
              Platforms
            </span>
          </h2>

          <p className="font-body text-gray-500 text-xs sm:text-sm leading-relaxed">
            Structured investment capabilities designed for liquidity, disciplined income generation, and access to high-growth private market opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 sm:gap-2.5 lg:gap-3 lg:min-h-[300px]">
          <div className="col-span-2 lg:col-span-2 lg:row-span-2">
            <FeaturedCard strategy={featured} />
          </div>

          <SmallCard strategy={smallCards[0]} />
          <SmallCard strategy={smallCards[1]} />
        </div>
      </div>
    </section>
  )
}

export default Strategies
