class World {
  ctx
  canvas
  keyboard
  camera_x = 0
  coinsCollected = 0
  character = new Character()
  lifesRemaining = 5
  currentLevel = 1
  hasKing = false
  hitSoundplayed = false;
  knifeSoundplayed = false;
  endingSoundplayed = false;
  statusbar = [new StatusBar(680, 45, 0, 20, 20)]
  lives = [new Life(680),new Life(650),new Life(620),new Life(590),new Life(560)]
  endScreen = []
  levelEndDoor = []
  explosions = []
  bullets = []
  knives = []
  enemies = []
  lightning = []
  intervalCharacterHitStop = false
  knifeIntervalStop = false
  characterStatusBeforeOgre = 0;
  isOgre = false;
  levelsNames = ['', 'level1', 'level2', 'level3', 'level4']
  statusChanges = ['', 'fire', 'ice', 'ogre'];
  killedBrother = false;
  starXPositions = ['', 4150, 4350, 4270, 4220]
  

  /** this function creates the level
   */
  createLevel () {
    this.enemies = levels[this.currentLevel - 1].enemies
    this.movingFloor = levels[this.currentLevel - 1].movingfloors
    this.backgroundObjects = levels[this.currentLevel - 1].backgroundObjects
    this.background = levels[this.currentLevel - 1].background
    this.decoration = levels[this.currentLevel - 1].decoration
    this.collectables = levels[this.currentLevel - 1].collectables
    this.barrels = levels[this.currentLevel - 1].barrels
  }


  /** this function constructs the world and enables playing
   *
   * @param {*} canvas
   * @param {*} keyboard
   */
  constructor (canvas, keyboard) {
    this.ctx = canvas.getContext('2d')
    this.canvas = canvas
    this.keyboard = keyboard
    this.ctx.font = '16px sans-serif'
    this.createLevel()
    this.setWorld()
    this.createKnives()
    this.draw()
    this.checkCollections()
    this.checkIfEnemyIsHit()
    this.checkIfBarrelsAreHit()
    checkGameStatus()
    this.checkIfCharacterIsHit()
    this.deleteBulletsAndKnives()
    this.checkIfCharacterIsHitByKnives()
  }

  /** this function is used only in level 3, when the enemies are throwing knives
   * if the character is hit, then it dies
   */
  checkIfCharacterIsHitByKnives () {
    setInterval(() => {
      if (!this.knifeIntervalStop) {
        if (this.currentLevel == 4) {
          for (let i = 0; i < this.knives.length; i++) {
            let knife = this.knives[i]
            if (this.character.status < 3 && this.character.x + 80 >= knife.x + 20 
              && this.character.x + 30 <= knife.x + 10 && (this.character.y + this.character.height) >= knife.y 
              && (this.character.y + 20) <= (knife.y + knife.height)) {
              this.knives.splice(i, 1)
              this.character.isAlive = false
              this.knifeIntervalStop = true
              playSoundOnlyOnce(this.knifeSoundplayed, knifeCut);
              setTimeout(() => {this.knifeIntervalStop = false}, 1000)
            }
          }
        }
      }
    }, 60)
  }

  /**
   * this functions checks if the enemy is hie by a bullet.
   * If the brother is killed in level 3, the "oh you killed your brother"-screen appears
   */
  checkIfEnemyIsHit () {
    setInterval(() => {
      for (let i = 0; i < this.enemies.length; i++) {
        let enemy = this.enemies[i]
        for (let j = 0; j < this.bullets.length; j++) {
          let bullet = this.bullets[j]
          if (this.isColliding(enemy, bullet, 20, 20)) {
            if (this.character.status == 1) {
              this.letEnemyExplode(enemy, i, j)
              if (enemy instanceof Brother) {
                  setTimeout(() => {document.getElementById('killed-brother').style.display = 'flex'}, 500);
              }
            }
            if (this.character.status == 2) {
              this.freezeEnemy(enemy, j)}}}}
    }, 60)
  }

  /** this is general function to determine if two obejects are colliding
   * @param {*} objectA
   * @param {*} objectB
   * @param {*} offsetX
   * @param {*} offsetY
   * @returns
   */
  isColliding (objectA, objectB, offsetX, offsetY) {
    return (objectA.x + objectA.width - offsetX >= objectB.x &&  objectA.x <= objectB.x + objectB.width &&
      objectA.y + objectA.height - offsetY >= objectB.y && objectA.y <= objectB.y + objectB.height
    )
  }

  /** this function lets the enemies explode if the wizard is fire
   *
   * @param {*} enemy
   * @param {*} i = the locations of the hit enemy in the array
   * @param {*} j = the location of the bullet, that causes the explosion
   */
  letEnemyExplode (enemy, i, j) {
    enemy.isAlive = false
    this.enemies.splice(i, 1)
    this.bullets.splice(j, 1)
    this.explosions.push(new Explosion(enemy.x, enemy.y, this.character.status))
    fireball.play();
    setTimeout(() => {this.explosions.splice(0, 1)}, 330)
  }

  /**this function lets the enemy freeze
   *
   * @param {*} enemy the specific enemy
   * @param {*} j the locations of the bullet in the array
   */
  freezeEnemy (enemy, j) {
    this.bullets.splice(j, 1)
    freeze.play();
    enemy.freeze = true
  }

  /**
   * this functions checks if a Barrell is hit
   */
  checkIfBarrelsAreHit () {
    setInterval(() => {
        for (let i = 0; i < this.barrels.length; i++) {
          let barrel = this.barrels[i]
          for (let j = 0; j < this.bullets.length; j++) {
            let bullet = this.bullets[j]
            if (this.isColliding(barrel, bullet, 20, 20)) {
              this.barrels[i].exploded = true;
              this.barrels[i].explosionstatus = (this.character.status -1);
              this.bullets.splice(j, 1);
              setTimeout(() => {
                this.barrels.splice(i, 1)
              }, 300);}
          } 
        }
    }, 60)
  }


  /**
   * this interval checks if the character is his by an enemy
   */
  checkIfCharacterIsHit () {
    setInterval(() => {
      if (!this.intervalCharacterHitStop) {
        for (let i = 0; i < this.enemies.length; i++) {
          let enemy = this.enemies[i]
          if (!enemy.otherDirection) { //wenn sie nach links gehen
            if (this.isHit(this.character, enemy, 30, 30, 20)) {
              this.killEnemyIfOgreOtherwiseDie(enemy, i)
            }
          } else {
            if (this.isHit(this.character,enemy, 50, 30, 20)) {
              this.killEnemyIfOgreOtherwiseDie(enemy, i)
            }
          }
        }
      }
    }, 1000 / 30)
  }

  /**this function returns true if the character is hit
   *
   * @param {*} enemy
   * @param {*} characterOffsetX
   * @param {*} enemyOffsetX
   * @returns true if the character is hit.
   */
  isHit (objectA, objectB, offsetX, offsetXB, offsetY) {
    return (objectA.x + objectA.width - offsetX >= objectB.x + offsetXB && objectA.x + offsetX <= objectB.x + offsetX &&
      objectA.y + objectA.height >= objectB.y + offsetX && objectA.y + offsetY <= objectB.y + objectB.height - offsetY
    )
  }

  /**If the Character hits an enemy, then it crushes the enemy, if not it dies.
   *
   * @param {*} enemy
   * @param {*} i
   */
  killEnemyIfOgreOtherwiseDie (enemy, i) {
    if (this.character.status == 3) {
      if (enemy instanceof Brother) {
        setTimeout(() => {document.getElementById('killed-brother').style.display = 'flex'}, 500);
        this.killedBrother = true;
      } else {
        this.ogreKillEnemy(enemy, i)
      }
    } else {
      if (enemy instanceof Brother && this.hasKing == true && this.killedBrother == false) {
          document.getElementById('won').style.display = 'flex';
          playSoundOnlyOnce(this.endingSoundplayed, endingSound);
          this.intervalCharacterHitStop = true;
      } else {
        if (!enemy.freeze && !(enemy instanceof Brother)) {
          playSoundOnlyOnce(this.hitSoundplayed, hit);
          this.intervalCharacterHitStop = true;
          setTimeout(() => {
            this.intervalCharacterHitStop = false;
          }, 600);
          this.character.isAlive = false
        }
      }
    }
  }

  /**if an enemy is killed by the ogre-Wizard, a different sound if played
   *
   * @param {*} enemy
   * @param {*} i the location of the enemy in the array
   */
  ogreKillEnemy (enemy, i) {
    this.enemies.splice(i, 1)
    this.explosions.push(new Explosion(enemy.x, enemy.y, 3))
    smashSound.play();
    setTimeout(() => {this.explosions.splice(0, 1)}, 330)
  }

  /**this function sets an Interval to see if something was collected by the wizard.
   */
  checkCollections () {
    setInterval(() => {
      for (let i = 0; i < this.collectables.length; i++) {
        let item = this.collectables[i]
        if (this.character.x + this.character.width / 2 >= item.x && this.character.x <= item.x + item.width / 2 &&
          this.character.y + this.character.height >= item.y + item.height &&
          this.character.y <= item.y + item.height
        ) {
          this.addItemToCollection(item);
          this.collectables.splice(i, 1)
        }
      }
    }, 30)
  }

  /**
   * this functions creates knives, which only appear from the enemies at level 4
   */
  createKnives () {
    setInterval(() => {
      if (!gamePaused) {
        for (let i = 0; i < this.enemies.length; i++) {
          let enemy = this.enemies[i]
          if (enemy instanceof IceGoblin && !enemy.freeze) {
            if (!enemy.otherDirection) {
              this.knives.push(new Knife(enemy.x, enemy.y + 55, enemy.otherDirection))
            }
          }
        }
      }
    }, 1500)
  }

  /**this function deletes the Bullets and the knives, so they dont float around.
   *
   */
  deleteBulletsAndKnives () {
    setInterval(() => {deleteMovingObjects(this.bullets, 100)}, 200)
    setInterval(() => {deleteMovingObjects(this.knives, 400)}, 200)
    
  }

  /**
   * this is the main function to draw stuff on the canvas
   */
  draw () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.translate(this.camera_x, 0)
    this.addBackgroundToMap()
    this.addFixedObjectsToMap()
    this.addToMap(this.character)
    this.addObjectsToMap(this.endScreen)
    this.ctx.translate(-this.camera_x, 0)
    self = this
    requestAnimationFrame(function () {
      self.draw()
    })
  }

  setWorld () {
    this.character.world = this
  }

  /**in the following functions, various objects are added to the map.
   *
   */
  addBackgroundToMap () {
    this.addArrayToMap([this.background, this.backgroundObjects, this.decoration, this.movingFloor, this.collectables, this.levelEndDoor, this.bullets, this.knives, this.barrels, this.explosions, this.lightning, this.enemies]);
  }

  addFixedObjectsToMap () {
    this.ctx.translate(-this.camera_x, 0)
    this.addArrayToMap([this.statusbar, this.lives])
    this.ctx.strokeText(this.coinsCollected, 660, 60)
    this.ctx.translate(this.camera_x, 0)
  }

  addArrayToMap(array){
    array.forEach(obj =>{this.addObjectsToMap(obj)});
  }

  addObjectsToMap (objects) {
    objects.forEach(obj => {this.addToMap(obj)});
  }

  addToMap (mo) {
    if (mo.otherDirection) {
      this.ctx.save()
      this.ctx.translate(mo.width, 0)
      this.ctx.scale(-1, 1)
      mo.x = mo.x * -1
    }
    mo.draw(this.ctx)
    if (mo.otherDirection) {
      mo.x = mo.x * -1
      this.ctx.restore()
    }
  }

  /**in this function depending on the kind of the collectable or item, it is added to the
   * colleciton. if the character has reached 50 coins, it gets a new life.
   * @param {variable} item
   */
  addItemToCollection (item) {
    this.getLife(item);
    this.drink(item);
    if (item.kind == 'coin') {
      collectCoin();
    }
    if (item.kind == 'king') {
      this.hasKing = true
      showGiveTheKingBackMessage()
      this.statusbar.push(new StatusBar(610, 40, 1, 35, 35))
    } 
  }

/**the character can drink blue(ice-wizard), red(fire-wizrad) and green potion
 * the green potion lets him turn into a green monster (ogre)
 */
  drink(item){
    if (item.kind == 'ice' || item.kind == 'fire' || item.kind == 'ogre') {
      if (!this.isOgre) {
        this.characterStatusBeforeOgre = this.character.status;
        this.character.status = this.statusChanges.indexOf(item.kind)
      }
      if (item.kind == 'ice' || item.kind == 'fire') {
        potionSound.play()
      }
      if (item.kind == 'ogre') {
        this.changeToOgre();
        growl.play();
      }
    }
    if(item.kind == 'star'){
      this.character.y = 0;
      this.character.x = this.starXPositions[this.currentLevel];
      starSound.play();
    }
  }

  /**in the barrell can also be found an additional life
   * @param {*} item 
   */
  getLife(item){
    if (item.kind == 'life') {
      this.lives.push(new Life(680 - this.lifesRemaining * 30))
      this.lifesRemaining++
    }
  }

   /** if the wizard drinks a green potion, it changes to the Ogre
   */
   changeToOgre () {
    this.isOgre = true;
    document.getElementById('ogre-timer').style.display = 'unset'
    this.character.OgreBoost = 10;
    setTimeout(() => {
      document.getElementById('ogre-timer').style.display = 'none';
        if (!this.character.justDied) {
          this.character.status = this.characterStatusBeforeOgre;
        }
        this.character.OgreBoost = 0;
        this.isOgre = false;
    }, 10000)
  }
}