class Character extends MovableObject {
  y = 220
  x = 150
  yCorrection = 0
  height = 70
  width = 120
  isAlive = true
  speed = 8
  shooting = false
  hasBeenAtLevelEnd = false
  isAtLevelEnd = false
  isAtBossFight = false
  intervalStop1 = false
  intervalStop2 = false
  status = 0
  currentImage = 0
  currentLevel = 1
  OgreBoost = 0
  justDied = false;
  levelEndDoorLocationsForLevel = ['', 242, 276, 92]
  movingFloorData = [
    { beginning: 9, end: 10 },
    ,
    { beginning: 19, end: 20 }
  ]
  levelStartingPointY = ['', 280, 200, 100, 100];

ALL_WIZARD_IMAGES = [WIZARD_ATTACKS, WIZARD_JUMPS, WIZARD_JUMPS, WIZARD_SLIDES, WIZARD_SHOWS_BACK]

  constructor () {
    super().loadImage('')
    this.loadCompleteImages(WIZARD_WALKS);
    this.loadCompleteImages(WIZARD_DIES);
    this.loadCompleteImages(this.ALL_WIZARD_IMAGES);
    this.applyGravity();
    this.moveCharacter();
    this.animateCharacter();
  }

  loadCompleteImages (images) {
    for (let i = 0; i < images.length; i++) {
      let arr = images[i]
      this.loadImages(arr)
    }
  }

  /** this function enables walking of the character, between beginning and endpoint
   * @param {*} beginningPoint 
   * @param {*} endPoint 
   */
  letCharacterWalk(beginningPoint, endPoint){
    if (this.world.keyboard.LEFT && this.x > beginningPoint) {
      this.moveLeft();
      this.otherDirection = true
    }
    if (this.world.keyboard.RIGHT && this.x < endPoint) {
      this.moveRight();
      this.otherDirection = false;
    }
  }

  /**
  * this function enables jumping and shooting of the
  */
  letCharacterJumpAndShoot(){
    if (this.world.keyboard.SPACE && this.status > 0 && this.status < 3) {
      this.shooting = true
      this.shoot()
    }
    if (this.world.keyboard.UP && !this.isAboveGround()) {
      this.jump()
    }
  }

  /**
   * this function stops the background, so the character can move to the real end of the screen to the left
   */
  stopBackgroundAtBeginningAndEnd () {
    if (this.x >= 150 && this.x <= 4200) {
      this.world.camera_x = -this.x + 150
    } else {
      if (this.x >= 4050) {
        this.world.camera_x = -4050
      } else {
        this.world.camera_x = 0
      }
    }
  }


  /**
   * if the character walks beyond a point in a level, the levelend-door appears.
   * this function checks, if the character is already beyond this point
   */
  showLevelEndDoorIfNear () {
    if (this.x > 4150 && !this.hasBeenAtLevelEnd) {
      this.world.levelEndDoor.push(new LevelEndDoor(4395,this.levelEndDoorLocationsForLevel[this.currentLevel]))
      this.hasBeenAtLevelEnd = true
    }
  }

  /**this function lets the character slide at the end of level 3
   */
  letCharacterSlide () {
    this.x += 21
    this.world.camera_x = -this.x + 150
  }

  /**this function moves the character: as long as it has not fallen off.
   * it is also checked if the character is at the slide in level 3, there it cannot be moved
   */
  moveCharacter () {
    setInterval(() => {
      if (!this.intervalStop2) {
        if (this.isAlive) {
          if (this.y<400) {
            if (!(this.x > 2980 && this.x < 3330 && this.currentLevel == 4)) {
              this.moveCharacterAccordingToInput()
              this.useMovingFloor()
            } else {
              this.letCharacterSlide()
            }
          } else {
            this.intervalStop2 = true
              this.letCharacterFallOff()
          }
        }
      }
    }, 1000 / 30)
  }




  /**
   * here the character is made able to move and shoot
   */
  moveCharacterAccordingToInput () {
    this.letCharacterWalk(-30, 4370);
    this.letCharacterJumpAndShoot();
    this.stopBackgroundAtBeginningAndEnd();
    this.showLevelEndDoorIfNear();
  }

  /**
   * if the character has lost all lives, the game over screen is played.
   */
  gameOver () {
    document.getElementById('game-over').style.display = 'flex'
    setTimeout(() => {lost.play()}, 200)
  }

  /**
   * if the character falls beyond a certain point, it looses a life and the fell-off sound is played
   */
  letCharacterFallOff () {
    if (this.world.lives.length < 1) {
      this.gameOver()
    } else {
      fellOff.play()
      this.reduceLife()
      this.startLevelFromBeginning()
      setTimeout(() => {
        this.world.intervalCharacterHitStop = false;
      }, 500);
    }
  }

  /**
   * this function reduces the number of lives that appear in form of hearts at the top of the screen
   */
  reduceLife () {
    this.world.lives.splice(this.world.lives.length - 1, 1)
    this.world.lifesRemaining--
    this.justDied = true;
    setTimeout(() => {
      this.justDied = false;
    }, 10000);
  }

  /**
   * this function positions the moving floor in level 1 and 2
   */
  useMovingFloor () {
    if (this.currentLevel == 1 || this.currentLevel == 3) {
      floorX[this.currLevelString()][this.BeginningXinFloorArray()].until = this.world.movingFloor[0].x;
      floorX[this.currLevelString()][this.EndXinFloorArray()].until = this.world.movingFloor[0].x + 100;
      if (this.characterIsOnMovingFloor()) {
        this.moveCharacterOnMovingFloor()
      }
    }
  }

  /**
   * @returns the x-value of the begining of the moving floor, that is specified in the FloorData FloorX
   */
  BeginningXinFloorArray () {
    return this.movingFloorData[this.currentLevel - 1].beginning
  }

  /**
   * @returns the x-value of the end of the moving floor, that is specified in the FloorData FloorX
   */
  EndXinFloorArray () {
    return this.movingFloorData[this.currentLevel - 1].end
  }

  /**
   * @returns the current Level in String, to access the array of FloorData = FloorX
   */
  currLevelString () {
    return this.levelsNames[this.currentLevel]
  }

  /**
   * @returns true, when the character is on the moving floor, character.x is the higher as the beginng of movingfloor
   * And character x is lower than the end of movingfloor.x
   */
  characterIsOnMovingFloor () {
    return (
      this.characterIsRightOfMovingFloorBeginning() &&
      this.characterIsLeftOfMovingFloorEnd() &&
      !this.isAboveGround()
    )
  }

  /**
   * @returns true if the character is at least at the beginning of the moving floor
   */
  characterIsRightOfMovingFloorBeginning () {
    return this.x + this.width / 2 >= this.world.movingFloor[0].x
  }

  /**
   * @returns true if the character not further than the end of the moving floor
   */
  characterIsLeftOfMovingFloorEnd () {
    return this.x + this.width / 2 <= this.world.movingFloor[0].x + 100
  }

  /**
   * this function moves the character on moving floor even when the character is not moving by himself
   */
  moveCharacterOnMovingFloor () {
    if (this.floorIsMovingBackwards()) {
      this.x -= this.world.movingFloor[0].speed
    } else {
      this.x += this.world.movingFloor[0].speed}
  }

  /*this function checks if the moving floor is moving backwards
   */
  floorIsMovingBackwards () {
    return this.world.movingFloor[0].goBack
  }

  /**
   * when the character dies, there is a little timeout, so the variables can set back.
   */
  startLevelFromBeginning () {
    setTimeout(() => {this.setAllVariablesBack()}, 1000)
  }

  /**
   * this function stops the intervals and deletes knives and enemies
   */
  setAllVariablesBack () {
    this.x = 150
    this.status = 0
    this.world.hitSoundplayed = false
    this.world.knifeSoundplayed = false
    restore(this.currentLevel - 1)
    removeLightning()
    this.y = this.levelStartingPointY[this.currentLevel]
    this.isAlive = true
    this.intervalStop1 = false
    this.intervalStop2 = false
    document.getElementById('ogre-timer').style.display = 'none';
    this.OgreBoost = 0;
    world.characterStatusBeforeOgre = 0;
    this.world.isOgre = false;
  }

  /**
   * this function animates the character.
   */
  animateCharacter () {
    setInterval(() => {
      if (!this.intervalStop1) {
        if (this.isAlive) {
          if (this.shooting) {
            this.changeImage(WIZARD_ATTACKS)
            this.height = 80;
          } else {
            if (this.x < 4370) {
              this.animateCharacterAccordingToInput()
            } else {
              this.endLevelAndBeginNewLevel()}}
        } else {
          this.intervalStop1 = true
          this.die()}}
    }, 120)
  }

  /**
   * this function ends the current Level and starts a new one.
   */
  endLevelAndBeginNewLevel () {
    if (this.currentLevel < 4) {
      this.endLevel()
      this.startInNewLevel()
    }
  }

  /**
   * this function changes the character according to the input of the player
   */
  animateCharacterAccordingToInput () {
    if (this.x > 2980 && this.x < 3330 && this.currentLevel == 4) {
      this.changeImage(WIZARD_SLIDES)
    } else if (this.isAboveGround()) {
      this.changeImage(WIZARD_JUMPS)
    } else {
      this.height = 70
      this.img = this.imageCache[WIZARD_WALKS[this.status][0]]
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(WIZARD_WALKS[this.status])
      }
    }
  }

  /**
   * this function animates the end of the leve. Then a black End screen with a whole in it appears.
   */
  endLevel () {
    this.img = this.imageCache[WIZARD_SHOWS_BACK[this.status]]
    this.world.endScreen.push(new EndScreen(3895, endScreenPosition[world.currentLevel], 0, 1020, 780))
    this.intervalStop1 = true
    levelWon.play()
  }

  /**
   * this function is used to start a new level.
   */
  startInNewLevel () {
    setTimeout(() => {
      this.img = this.imageCache[WIZARD_WALKS[this.status][0]]
      this.x = 150
      this.y = this.levelStartingPointY[this.currentLevel]
      this.hasBeenAtLevelEnd = false
      this.currentLevel++
      this.world.currentLevel++
      this.world.createLevel()
      restore(this.currentLevel - 1)
      this.world.endScreen = []
      this.world.levelEndDoor = []
      this.intervalStop1 = false
    }, 1000)
  }

  /**
   * this function lets the character die and starts the level from the beginning.
   */
  die () {
    if (this.world.lives.length < 1) {
      this.gameOver()
    } else {
      this.reduceLife()
      this.playAnimationOnce(WIZARD_DIES[this.status])
      this.startLevelFromBeginning();
      setTimeout(() => {
        this.world.intervalCharacterHitStop = false;
      }, 500);
    }
  }

  /**
   * if the character drinks green potion, it turns into a monster(ogre), crushes enemies and jumps higher
   */
  jump () {
    this.speedY = (22+this.OgreBoost)
  }

  /**
   * this function creates the magic bullets, depending on the status of the wizard.
   */
  shoot () {
    if (this.otherDirection) {
      this.world.bullets.push(new Bullets(this.x, this.y + 30, this.otherDirection, this.status))
    } else {
      this.world.bullets.push(new Bullets(this.x + 90, this.y + 30, this.otherDirection, this.status))
    }
    this.world.keyboard.SPACE = false
    setTimeout(() => {this.shooting = false}, 120)
  }
}