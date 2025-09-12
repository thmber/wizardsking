class DrawableObject {
  img
  imageCache = {}
  x
  y
  height
  width
  currentImage = 0
  gamePaused = false

  loadImage (path) {
    this.img = new Image()
    this.img.src = path
  }

  loadImages (arr) {
    arr.forEach(path => {
      let img = new Image()
      img.src = path
      this.imageCache[path] = img
    })
  }

  draw (ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  drawFrame (ctx) {
    if (this instanceof Character ||
      this instanceof Goblin ||
      this instanceof Bullets
    ) {
      ctx.beginPath()
      ctx.lineWidth = '2'
      ctx.strokeStyle = 'purple'
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.stroke()
    }
  }

  /**
   * some of the collectables are only drawables objects: they cannot move, but they are animated, like the coins
   */
  playAnimation (arr) {
    if (!this.gamePaused) {
      let i = this.currentImage % arr.length
      let path = arr[i]
      this.img = this.imageCache[path]
      this.currentImage++
    }
  }

  /** this function is used for animations, that are only played once like the explosions
    * 
    * @param {*} arr of pictures
    */

  playAnimationOnce(arr){
      let count = 0
      this.currentImage = 0
      let OnceInterval = setInterval(() => {
        this.playAnimation(arr)
        count++
        if (count == arr.length) {
          clearInterval(OnceInterval)
        }
      }, 20)
  }

  /**
   * @param {*} newImage Image of the wizard, jumping or sliding
   */
  changeImage(newImage){
    let image = newImage 
    this.img = this.imageCache[image[this.status]]
  } 
}