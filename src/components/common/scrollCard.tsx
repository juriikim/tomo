'use client'
import { useScrollCard } from '@/hooks/useScrollCard'

export default function ScrollCard() {
  const { containerRef, cardArray, assembleCard } = useScrollCard()

  return (
    <div
      className="relative mt-60 h-[400px] text-center text-lg"
      ref={containerRef}
    >
      {cardArray?.map((card, index) => (
        <div
          key={index}
          className="absolute h-[200px] w-[150px] bg-white py-10 text-secondary opacity-95 shadow-md transition-all duration-700"
          style={{
            transform: `translate(calc(${card.x}px - 50%), calc(${card.y}px - 200px)) rotate(${card.rotation}deg)`,
          }}
        >
          <p>体系</p>
          <p>[たいけい]</p>
          <p className="mt-4 text-sm">체계</p>
        </div>
      ))}
      <div
        onClick={assembleCard}
        className="shadow-right absolute bottom-0 left-1/2 h-[200px] w-[150px] -translate-x-1/2 cursor-pointer rounded border-l-4 border-muted-foreground bg-secondary-foreground py-10 shadow-gray-200 transition-all hover:rotate-3"
      >
        단어장
        <br /> 보러가기
      </div>
    </div>
  )
}
