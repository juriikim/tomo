import { Card } from '@/classes/Card'
import { useEffect, useRef, useState } from 'react'

export type CardType = {
  x: number
  y: number
  rotation: number
}

export const useCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [cardArray, setCardArray] = useState<CardType[]>([])

  const delay = (ms: number): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), ms)
    })
  }

  const assembleCard = async () => {
    const copy: CardType[] = cardArray.map((card) => {
      card.x = (containerRef.current?.clientWidth || 1) / 2
      card.y = (containerRef.current?.clientHeight || 1) / 2 - 100
      return card
    })
    setCardArray(copy)
    await delay(500)
    rotateCard()
    await delay(500)
  }

  const rotateCard = () => {
    let rotate = -30
    const copy: CardType[] = cardArray.map((card) => {
      rotate += 2
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
        new Card(
          containerRef.current?.clientWidth || 100,
          containerRef.current?.clientHeight || 100
        ) as CardType
    )
    setCardArray(cardArr)

    const handleReset = () => {
      const cardArr = Array.from(
        { length: 20 },
        () =>
          new Card(
            containerRef.current?.clientWidth || 100,
            containerRef.current?.clientHeight || 100
          ) as CardType
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
