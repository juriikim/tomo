import { Particle } from '@/classes/Particle'
import { useEffect, useRef } from 'react'
import particleSvg from '@/asset/particle.svg'

type ParticleType = {
  x: number
  y: number
  draw: (ctx: CanvasRenderingContext2D, src: CanvasImageSource) => void
  animate: (ctx: CanvasRenderingContext2D, src: CanvasImageSource) => void
}

type useParticleCanvasProps = {
  imageSrc?: string
  count?: number
}

export const useParticleCanvas = ({
  imageSrc = particleSvg.src,
  count = 100,
}: useParticleCanvasProps = {}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = document.documentElement.scrollHeight
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const particleImage = new Image()
    particleImage.src = imageSrc
    particleImage.onload = () => render()
    const particleArray = Array.from(
      { length: count },
      () =>
        new Particle(
          window.innerWidth,
          document.documentElement.scrollHeight
        ) as ParticleType
    )

    const render = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        document.documentElement.scrollHeight
      )

      particleArray.forEach((particle) => particle.animate(ctx, particleImage))
      requestAnimationFrame(render)
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = document.documentElement.scrollHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [count, imageSrc])

  return canvasRef
}
