class Collectable extends MovableObject {
  height = 20
  width = 40
  x
  y
  currentImage = 0
  kind
  IMAGES_TURNING = [
    'img/level1/medieval/Collectable Object/Coin_01.png',
    'img/level1/medieval/Collectable Object/Coin_02.png',
    'img/level1/medieval/Collectable Object/Coin_03.png',
    'img/level1/medieval/Collectable Object/Coin_04.png',
    'img/level1/medieval/Collectable Object/Coin_05.png',
    'img/level1/medieval/Collectable Object/Coin_06.png'
  ]

  constructor (imagepath, x, y, height, width, animate, kind) {
    super().loadImage(imagepath)
    this.y = y
    this.x = x
    this.height = height
    this.width = width
    this.kind = kind
    this.loadImages(this.IMAGES_TURNING)
    if (animate) {
      this.animate()
    }
  }

  /**
   * some of the the collectables are animated
   */
  animate () {
    setInterval(() => {
      this.playAnimation(this.IMAGES_TURNING)
    }, 150)
  }
}