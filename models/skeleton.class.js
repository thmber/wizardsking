class Skeleton extends MovableObject {
    x
    y
    width = 90
    height = 90
    speed = 1
    currentImage = 0
    currentLevel = 2
    yCorrection = 9
    isAlive = true
    otherDirection = false
    freeze = false
    freezecount = 0
  
    IMAGES_SLASHING = [
        'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_000.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_001.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_002.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_003.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_004.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_005.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_006.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_007.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_008.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_009.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_010.png',
      'img/marketlevel/Enemies/skeleton/0_Skeleton_Warrior_Run Slashing_011.png',
    ]
    IMAGE_FREEZE = [
    'img/marketlevel/Enemies/skeleton/Skeleton_frozen.png'

    ]
  
    constructor (x, y, range) {
      super().loadImage('')
      this.x = x
      this.y = y
      this.range = range
      this.loadImages(this.IMAGES_SLASHING)
      this.loadImages(this.IMAGE_FREEZE)
      this.applyGravity()
      this.animate();
    }
  
    /**
     * the goblin is an enemy, that is animated an moves and can be frozen.
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