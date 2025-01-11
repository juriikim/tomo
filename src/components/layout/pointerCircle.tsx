'use client'
import { useEffect, useState } from 'react'
type PointerCircleProps = {
  width?: number
  height?: number
  color?: string
}

export default function PointerCircle({
  width = 10,
  height = 10,
  color = 'white',
}: PointerCircleProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div
      className={`absolute h-${height} w-${width} pointer-events-none rounded-full bg-${color}`}
      style={{
        left: `${mousePosition.x - 15}px`,
        top: `${mousePosition.y - 15}px`,
      }}
    ></div>
  )
}
