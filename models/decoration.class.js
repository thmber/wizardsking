class Decoration extends DrawableObject {
  height
  width
  x
  y

  constructor (imagepath, x, y, width, height) {
    super().loadImage(imagepath)
    this.y = y
    this.x = x
    this.width = width
    this.height = height
  }
}