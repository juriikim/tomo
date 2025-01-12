'use client'
import { useScrollCard } from '@/hooks/useScrollCard'

export default function ScrollCard() {
  const { containerRef, cardArray, scrollProgress } = useScrollCard()
  // console.log(scrollProgress)
  return (
    <div className="h-[1000px]" ref={containerRef}>
      <div className="relative">
        {cardArray?.map((card, index) => (
          <div
            key={index}
            className="absolute h-20 w-20 rounded bg-white"
            style={{
              transform: `translate(${card.x * (1 - scrollProgress)}%, ${card.y * (1 - scrollProgress)}%)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
