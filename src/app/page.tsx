'use client'
import PageLayout from '@/components/layout/pageLayout'
import PointerCircle from '@/components/layout/pointerCircle'
import { useEffect, useRef } from 'react'
import particleSvg from '@/asset/particle.svg'

type ParticleType = {
  x: number
  y: number
  draw: (ctx: CanvasRenderingContext2D, src: CanvasImageSource) => void
  animate: (ctx: CanvasRenderingContext2D, src: CanvasImageSource) => void
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  class Particle {
    x: number
    y: number
    w: number
    h: number
    opacity: number
    xSpeed: number
    ySpeed: number

    constructor(w: number, h: number) {
      this.x = Math.random() * w
      this.y = Math.random() * h
      this.w = 30 + Math.random() * 15
      this.h = 20 + Math.random() * 10
      this.opacity = this.w / 45
      this.xSpeed = 0.8 + Math.random()
      this.ySpeed = 0.5 + Math.random()
    }

    draw(ctx: CanvasRenderingContext2D, src: CanvasImageSource) {
      if (this.y > window.innerHeight || this.x > window.innerWidth) {
        this.x = -10
        this.y = Math.random() * window.innerHeight * 2 - window.innerHeight
        this.xSpeed = 0.8 + Math.random()
        this.ySpeed = 0.5 + Math.random()
      }
      ctx.globalAlpha = this.opacity
      ctx.drawImage(src, this.x, this.y, this.w, this.h)
    }

    animate(ctx: CanvasRenderingContext2D, src: CanvasImageSource) {
      this.x += this.xSpeed
      this.y += this.ySpeed
      this.draw(ctx, src)
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return
    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = window.innerHeight
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const particleImage = new Image()
    particleImage.src = particleSvg.src
    particleImage.onload = () => render()
    const particleArray = Array.from(
      { length: 150 },
      () => new Particle(window.innerWidth, window.innerHeight) as ParticleType
    )

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particleArray.forEach((particle) => particle.animate(ctx, particleImage))
      requestAnimationFrame(render)
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageLayout className="cursor-default text-2xl">
      <p>일본어 공부를 재밌게 !</p>
      <p>tomo와 함께 일본어 단어를 쉽게 배워요.</p>
      <PointerCircle />
      <canvas ref={canvasRef} className="absolute left-0 top-0 z-50"></canvas>
    </PageLayout>
  )
}
