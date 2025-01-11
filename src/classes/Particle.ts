export class Particle {
  x: number
  y: number
  w: number
  h: number
  opacity: number
  xSpeed: number
  ySpeed: number
  rotation: number

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.w = 20 + Math.random() * 15
    this.h = 10 + Math.random() * 10
    this.opacity = this.w / 45
    this.xSpeed = 0.8 + Math.random()
    this.ySpeed = 0.5 + Math.random()
    this.rotation = Math.random() * 360
  }

  draw(ctx: CanvasRenderingContext2D, src: CanvasImageSource) {
    if (this.y > window.innerHeight || this.x > window.innerWidth) {
      this.x = -10
      this.y = Math.random() * window.innerHeight * 2 - window.innerHeight
      this.xSpeed = 0.8 + Math.random()
      this.ySpeed = 0.5 + Math.random()
    }
    ctx.save()
    ctx.translate(this.x + this.w / 2, this.y + this.h / 2)
    ctx.rotate((this.rotation * Math.PI) / 180)
    ctx.translate(-(this.x + this.w / 2), -(this.y + this.h / 2))
    ctx.globalAlpha = this.opacity
    ctx.drawImage(src, this.x, this.y, this.w, this.h)
    ctx.restore()
  }

  animate(ctx: CanvasRenderingContext2D, src: CanvasImageSource) {
    this.x += this.xSpeed
    this.y += this.ySpeed
    this.draw(ctx, src)
  }
}
