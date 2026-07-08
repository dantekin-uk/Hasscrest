import { useEffect, useRef, useState } from 'react'

import partner1 from '../assets/partners/748-1.webp'
import partner2 from '../assets/partners/Group 5.png'
import partner3 from '../assets/partners/SAC-Logo.jpg'
import partner4 from '../assets/partners/hapgroup.jpeg'
import partner5 from '../assets/partners/hass-petroleum.jpg'

const partners = [
  { name: 'Partner 1', src: partner1 },
  { name: 'Partner 2', src: partner2 },
  { name: 'Partner 3', src: partner3 },
  { name: 'Partner 4', src: partner4 },
  { name: 'Partner 5', src: partner5 },
]

function Partners() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`w-full py-4 md:py-6 overflow-hidden relative z-10 bg-gradient-to-b from-bg-gray to-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes shimmer {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(#0B192C 0.5px, transparent 0.5px)'
           }}
      />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4 md:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-[10px] md:text-xs font-display font-bold text-accent-gold uppercase tracking-[0.3em]">
          Our Institutional Network
        </h2>
      </div>

      {/* THE INFINITE SLIDER CONTAINER */}
      <div className="relative flex items-center group">

        {/* GRADIENT MASKS with enhanced blur */}
        <div className="absolute top-0 bottom-0 left-0 z-20 w-32 md:w-64 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 z-20 w-32 md:w-64 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none"></div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent group-hover:via-accent-gold/5 transition-all duration-500 pointer-events-none z-0"></div>

        {/* THE SCROLLING TRACK */}
        <div className="flex animate-marquee whitespace-nowrap relative z-10">
          {/* Duplicate the list for a seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              {partners.map((partner, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center justify-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-500 cursor-pointer group/logo relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/20 to-transparent rounded-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-12 md:h-16 w-auto max-w-[160px] md:max-w-[200px] object-contain transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:brightness-110 drop-shadow-sm group-hover/logo:drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
