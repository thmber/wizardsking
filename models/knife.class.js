class Knife extends MovableObject {
  width = 45
  height = 15
  speed = 10
  miles = 0
  otherDirection = false

  constructor (x, y, direction) {
    super().loadImage('img/level3/enemies/Ice-Golem/Sword.png')
    this.x = x
    this.y = y
    this.otherDirection = direction
    this.moveKnifeRight()
  }

  /**
   * knives are thrown by the ice goblin. they only move right. that means the character cannot
   * be hit by a knive if it is standing behind the enemy, i.e. at the right side of it
   */
  moveKnifeRight () {
    setInterval(() => {
      if (!this.gamePaused) {
        if (this.otherDirection) {
          this.x += this.speed
          this.miles += this.speed
        } else {
          this.x -= this.speed
          this.miles += this.speed
        }
      }
    }, 1000 / 30)
  }
}