class Brother extends MovableObject {
  x
  y
  width = 110
  height = 80
  speed = 1
  world
  currentImage = 0
  yCorrection = 9
  isAlive = true
  otherDirection = true
  currentLevel = 4

  IMAGES = [
    'img/wizard_ice/2_WALK_000.png',
    'img/wizard_ice/2_WALK_001.png',
    'img/wizard_ice/2_WALK_002.png',
    'img/wizard_ice/2_WALK_003.png',
    'img/wizard_ice/2_WALK_004.png'
  ]

  constructor (x, y, range) {
    super().loadImage('')
    this.x = x
    this.y = y
    this.range = range
    this.loadImages(this.IMAGES)
    this.applyGravity()
    this.animate()
  }

  /**
   * the moveable Object "Brother" only appears at the end of level 3
   * there it is just a reversed version of the character.
   */
  animate () {
    setInterval(() => {
      this.moveBackandForth()
    }, 1000 / 30)

    setInterval(() => {
      this.playAnimation(this.IMAGES)
    }, 70)
  }

  /**
   * as the brother look exactly the same as the character it is animated the same.
   * @param {*} arr
   */
  playAnimation (arr) {
    let i = this.currentImage % arr.length
    let path = arr[i]
    this.img = this.imageCache[path]
    this.currentImage++
  }

  /**
   * the Brother only moves back and forth and does nothing else. if the character shoots him,
   * then the game is lost. The character has to take the chess king, that is located near the brother
   * and if the character has the chess king, it has to meet the brother. then the game is won.
   */
  moveBackandForth () {
    if (this.otherDirection) {
      this.x -= this.speed
      this.miles += this.speed
      if (this.miles > this.range) {
        this.otherDirection = false
        this.miles = 0
      }
    } else {
      this.x += this.speed
      this.miles += this.speed
      if (this.miles > this.range) {
        this.otherDirection = true
        this.miles = 0
      }
    }
  }
}