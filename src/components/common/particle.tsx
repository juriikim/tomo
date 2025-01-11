'use client'
import { useParticleCanvas } from '@/hooks/useParticleCanvas'

export default function Particle() {
  const canvasRef = useParticleCanvas()

  return (
    <canvas ref={canvasRef} className="absolute left-0 top-0 z-40"></canvas>
  )
}
