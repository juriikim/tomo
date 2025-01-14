'use client'
import Image from 'next/image'
import hosina1 from '@/asset/hosina1.jpg'
import hosina2 from '@/asset/hosina2.jpg'
import hosina3 from '@/asset/hosina3.jpg'
import hosina4 from '@/asset/hosina4.jpg'
import hosina5 from '@/asset/hosina5.jpg'
import { useRef, useState } from 'react'

export default function CardSwiper() {
  const [cardList, setCardList] = useState([
    hosina1,
    hosina2,
    hosina3,
    hosina4,
    hosina5,
  ])
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    deg: 0,
    transition: 0,
  })
  const startPosition = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  console.log(!isDragging.current)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true
    startPosition.current.x = e.clientX
    startPosition.current.y = e.clientY
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    setPosition({
      x: e.clientX - startPosition.current.x,
      y: e.clientY - startPosition.current.y,
      deg: (e.clientX / innerWidth) * 10,
      transition: 0,
    })
  }

  const handlePointerUp = () => {
    if (!isDragging.current) return

    isDragging.current = false
    if (Math.abs(position.x) < 90) {
      setPosition({ x: 0, y: 0, deg: 0, transition: 1000 })
    } else {
      const flyX = (position.x / Math.abs(position.x)) * innerWidth * 1.1
      const flyY = (position.y / position.x) * flyX
      setPosition({
        x: flyX,
        y: flyY,
        deg: (flyX / innerWidth) * 10,
        transition: innerWidth / 0.5,
      })
      setTimeout(() => {
        setCardList(cardList.slice(0, cardList.length - 1))
        setPosition({ x: 0, y: 0, deg: 0, transition: 0 })
      }, 500)
    }
  }

  return (
    <div
      className="relative h-screen w-screen"
      onPointerMove={(e) => handlePointerMove(e)}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="m-auto h-[300px] w-[180px]">
        {cardList.map((card, index) => (
          <div
            key={index}
            className={`absolute h-[300px] w-[180px] overflow-hidden rounded-lg`}
            style={
              index === cardList.length - 1
                ? {
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: `all ${position.transition}ms`,
                    rotate: `${position.deg}deg`,
                    userSelect: 'none',
                  }
                : undefined
            }
            onPointerDown={(e) => handlePointerDown(e)}
          >
            <Image alt="" src={card} fill draggable={false} />
          </div>
        ))}
      </div>
    </div>
  )
}
