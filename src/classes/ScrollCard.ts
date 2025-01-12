export class ScrollCard {
  x: number
  y: number
  rotation: number

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.rotation = Math.random() * 360
  }

  draw() {}
}
