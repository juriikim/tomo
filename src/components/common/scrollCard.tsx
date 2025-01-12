'use client'
import { useScrollCard } from '@/hooks/useScrollCard'

export default function ScrollCard() {
  const { containerRef, cardArray, assembleCard } = useScrollCard()

  return (
    <div
      className="relative mt-24 h-[600px] text-center text-lg"
      ref={containerRef}
    >
      {cardArray?.map((card, index) => (
        <div
          key={index}
          className="absolute h-[200px] w-[150px] border-4 border-secondary-foreground bg-white py-10 text-secondary opacity-95 transition-all duration-700"
          style={{
            transform: `translate(calc(${card.x}px - 50%), calc(${card.y}px - 200px)) rotate(${card.rotation}deg)`,
          }}
        >
          친구
        </div>
      ))}
      <div
        onClick={assembleCard}
        className="absolute bottom-0 left-1/2 h-[200px] w-[150px] -translate-x-1/2 cursor-pointer rounded bg-secondary-foreground py-10 shadow-md transition-all hover:rotate-3"
      >
        단어장
        <br /> 보러가기
      </div>
    </div>
  )
}
