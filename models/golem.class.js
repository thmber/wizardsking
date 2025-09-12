class Golem extends MovableObject {
  x
  y
  width = 90
  height = 90
  speed = 5
  world
  currentImage = 0
  yCorrection = 9
  isAlive = true
  otherDirection = false
  currentLevel = 1
  freeze = false
  freezecount = 0

  IMAGES_SLASHING = [
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_000.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_001.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_002.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_003.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_004.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_005.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_006.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_008.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_009.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_010.png',
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Run Slashing_011.png'
  ]
  IMAGE_FREEZE = [
    'img/level1/medieval/Enemies/Golem/Golem_3/PNG/PNG Sequences/Run Slashing/0_Golem_Freeze.png'
  ]

  constructor (x, y, range) {
    super().loadImage('')
    this.x = x
    this.y = y
    this.range = range
    this.loadImages(this.IMAGES_SLASHING)
    this.loadImages(this.IMAGE_FREEZE)
    this.applyGravity()
    this.animate()
  }

  /**just like the goblin, the glom is an enemy that can be frozen and is animated.
   * it moves back and forth in a certain range.
   *
   */
  animate () {
    setInterval(() => {
      if (!this.freeze) {
        this.moveBackandForth()
      }
    }, 1000 / 30)

    setInterval(() => {
      if (!this.freeze) {
        this.playAnimation(this.IMAGES_SLASHING)
      } else {
        this.playAnimation(this.IMAGE_FREEZE)
        this.freezecount++
        if (this.freezecount > 25) {
          this.freeze = false
          this.freezecount = 0
        }
      }
    }, 70)
  }
}