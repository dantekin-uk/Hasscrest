import { useState, useEffect } from 'react'

export function useScrollState() {
  const [isPastHero, setIsPastHero] = useState(false)
  const [showTopper, setShowTopper] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopper(window.scrollY <= 0)

      const scrolled = window.scrollY > 2
      setIsPastHero(scrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isPastHero, showTopper }
}
