'use client'
import Image from 'next/image'
import hosina1 from '@/asset/hosina1.jpg'
import hosina2 from '@/asset/hosina2.jpg'
import hosina3 from '@/asset/hosina3.jpg'
import hosina4 from '@/asset/hosina4.jpg'
import hosina5 from '@/asset/hosina5.jpg'
import { useState } from 'react'

export default function CardSwiper() {
  const [cardList, setCardList] = useState([
    hosina1,
    hosina2,
    hosina3,
    hosina4,
    hosina5,
  ])

  const [position, setPosition] = useState({ x: 0, y: 0, deg: 0 })

  return (
    <div className="relative m-auto h-[300px] w-[180px]">
      {cardList.map((card, index) => (
        <div
          key={index}
          className="absolute h-full w-full overflow-hidden rounded-lg"
          style={
            index === cardList.length - 1
              ? {
                  transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                  rotate: `${position.deg}deg`,
                  cursor: 'grab',
                  userSelect: 'none',
                }
              : undefined
          }
        >
          <Image alt="" src={card} fill draggable={false} />
        </div>
      ))}
    </div>
  )
}
