'use client'
import { useCard } from '@/hooks/useCard'
import { useRouter } from 'next/navigation'

export default function Card() {
  const { containerRef, cardArray, assembleCard } = useCard()
  const router = useRouter()

  return (
    <div
      className="relative mt-60 h-[400px] w-full text-center text-lg"
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
        onClick={async () => {
          await assembleCard()
          router.push('/words')
        }}
        className="relative top-52 z-40 m-auto w-fit cursor-pointer border-2 border-muted-foreground bg-primary-foreground px-10 py-4 shadow-drop shadow-muted-foreground brightness-105 transition-all before:absolute before:right-2 before:top-2 before:h-3 before:w-3 before:bg-white after:absolute after:right-3 after:top-3 after:h-3 after:w-3 after:bg-primary-foreground hover:translate-y-2 hover:shadow-none"
      >
        단어장
        <br /> 보러가기
      </div>
    </div>
  )
}
