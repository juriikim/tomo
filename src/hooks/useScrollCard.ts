import { ScrollCard } from '@/classes/ScrollCard'
import { useEffect, useRef, useState } from 'react'

export type ScrollCardType = {
  x: number
  y: number
  rotation: number
}

export const useScrollCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [cardArray, setCardArray] = useState<ScrollCardType[]>([])

  const assembleCard = () => {
    const copy: ScrollCardType[] = cardArray.map((card) => {
      card.x = (containerRef.current?.clientWidth || 1) / 2
      card.y = containerRef.current?.clientHeight || 1
      return card
    })
    setCardArray(copy)
    setTimeout(() => rotateCard(), 500)
  }

  const rotateCard = () => {
    let rotate = -30

    const copy: ScrollCardType[] = cardArray.map((card) => {
      rotate += 2
      card.x = (containerRef.current?.clientWidth || 1) / 2
      card.y = containerRef.current?.clientHeight || 1
      card.rotation = rotate
      return card
    })
    setCardArray(copy)
  }
  useEffect(() => {
    if (!containerRef.current) return

    const cardArr = Array.from(
      { length: 20 },
      () =>
        new ScrollCard(
          containerRef.current?.clientWidth || 100,
          containerRef.current?.clientHeight || 100
        ) as ScrollCardType
    )
    setCardArray(cardArr)

    const handleReset = () => {
      const cardArr = Array.from(
        { length: 20 },
        () =>
          new ScrollCard(
            containerRef.current?.clientWidth || 100,
            containerRef.current?.clientHeight || 100
          ) as ScrollCardType
      )
      setCardArray(cardArr)
    }
    window.addEventListener('resize', handleReset)
    return () => {
      window.addEventListener('resize', handleReset)
    }
  }, [])

  return { containerRef, cardArray, assembleCard }
}
