class Life extends DrawableObject {
  x = 680
  y = 10
  height = 25
  width = 25

  constructor (x) {
    super().loadImage('img/level1/medieval/Collectable Object/Life.png')
    this.x = x
  }
}