class StatusBar extends DrawableObject {
  x = 10
  y = 10
  height = 30
  width = 30
  img

  IMAGES = [
    'img/level1/medieval/Collectable Object/Coin_01.png',
    'img/chess-king.png',
    'img/bullets/Magicbullet1.png',
    'img/bullets/firebullet.png',
    'img/bullets/icebullet.png'
  ]

  constructor (x, y, kind, height, width) {
    super().loadImage(this.IMAGES[kind])
    this.x = x
    this.y = y
    this.height = height
    this.width = width
  }
}
