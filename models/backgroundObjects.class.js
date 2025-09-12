class BackgroundObject extends DrawableObject {
  height = 50
  width = 50
  x
  y

  constructor (imagepath, x, y) {
    super().loadImage(imagepath)
    this.y = y
    this.x = x
  }
}