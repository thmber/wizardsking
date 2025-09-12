class EndScreen extends DrawableObject {
  height = 780
  width = 1020
  x
  y
  characterIsAtLevelEnd = false
  currentImageOnce = 0

  IMAGES_START_BLACK = [
    [
      'img/levelendDoor/End-Screen_05.png',
      'img/levelendDoor/End-Screen_06.png',
      'img/levelendDoor/End-Screen_07.png',
      'img/levelendDoor/End-Screen_08.png',
      'img/levelendDoor/End-Screen_09.png',
      'img/levelendDoor/End-Screen_10.png'
    ],
    [
      'img/levelendDoor/End-Screen_10.png',
      'img/levelendDoor/End-Screen_09.png',
      'img/levelendDoor/End-Screen_08.png',
      'img/levelendDoor/End-Screen_07.png',
      'img/levelendDoor/End-Screen_06.png',
      'img/levelendDoor/End-Screen_05.png'
    ]
  ]

  constructor (x, y, startOrEnd, width, height) {
    super().loadImage('')
    this.x = x
    this.y = y
    this.height = height
    this.width = width
    this.loadImages(this.IMAGES_START_BLACK[startOrEnd])
    this.screenGoBlack(startOrEnd)
  }

  /** At the Start and at the end there is a black screen, that opens or closes shown.
   *
   * @param {*} startOrEnd
   */
  screenGoBlack (startOrEnd) {
    let i = 0
    let interval = setInterval(() => {
      this.playAnimationJustOnce(this.IMAGES_START_BLACK[startOrEnd], i)
      i++
      if (i > 5) {
        clearInterval(interval)
      }
    }, 120)
  }

  /** this animation of the end screen is only played once, then it ends.
   *
   * @param {*} arr
   * @param {*} i
   */
  playAnimationJustOnce (arr, i) {
    let path = arr[i]
    this.img = this.imageCache[path]
  }
}