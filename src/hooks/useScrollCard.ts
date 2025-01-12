import { ScrollCard } from '@/classes/ScrollCard'
import { useEffect, useRef, useState } from 'react'

export type ScrollCardType = {
  x: number
  y: number
  rotation: number

  draw: () => void
}

export const useScrollCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [cardArray, setCardArray] = useState<ScrollCardType[]>()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return
    const cardArr = Array.from(
      { length: 10 },
      () =>
        new ScrollCard(window.innerWidth, window.innerHeight) as ScrollCardType
    )
    setCardArray(cardArr)

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(
        0,
        Math.min(1, 1 - rect.top / (window.innerHeight / 2))
      )
      setScrollProgress(scrollProgress)
      console.log('h ', window.innerHeight)
      console.log('t ', rect.top)
      console.log('progress ', scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    // window.addEventListener('re', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { containerRef, cardArray, scrollProgress }
}
