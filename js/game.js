let canvas
let world
let keyboard = new Keyboard()
let backgroundAudio = new Audio('audio/mystery.mp3')
let lightningStrike = new Audio('audio/thunder.mp3')
lightningStrike.volume = 0.1
backgroundAudio.volume = 0.5;
let freeze = new Audio('audio/freeze.mp3')
let fireball = new Audio('audio/fireball.mp3')
let barrelCrack = new Audio('audio/barrelcrack.mp3')
barrelCrack.volume = 0.2;
let levelWon = new Audio('audio/level-won.mp3')
let hit = new Audio('audio/hit.mp3')
let lost = new Audio('audio/lost.mp3')
let fellOff = new Audio('./audio/fell-off.mp3')
let potionSound = new Audio('audio/potion.mp3')
let smashSound = new Audio('audio/smash.mp3')
let knifeCut = new Audio('audio/knife.mp3')
let beginninglight = new Audio('./audio/shimmering-object.mp3')
let doorOpening = new Audio('./audio/door.mp3')
let pageTurning = new Audio('./audio/page.mp3')
let squishSound = new Audio('./audio/squish.mp3')
let candleSound = new Audio('./audio/candle.mp3')
let growl = new Audio('./audio/ogre.mp3')
let endingSound = new Audio('./audio/ending.mp3')
let starSound = new Audio('./audio/starsound.mp3');
let drinkSounds = []
let gamePaused = false
let fullScreenMode = false
let hasBeenAtGame = false
const levels = [level1, level2, level3, level4]
let musicVolume
let soundVolume
let endScreenPosition = ['', -86, -65,-260];
let isInInteriorRoom = true
const soundElements = []
let isTouchScreen = false
soundElements.push(lightningStrike,freeze,fireball,barrelCrack,levelWon,hit,lost,smashSound,knifeCut,
                  beginninglight,doorOpening,pageTurning,squishSound,candleSound,fellOff)
overlaysSkippedTouchscreen = ['turn-device-message','start-screen','loading-screen','canvas-overlay-exterior'];

/**
 * this function is used to initialize the world
 */
function init () {
  canvas = document.getElementById('canvas')
  world = new World(canvas, keyboard)
  stopAnimations()
}

/**
 * this function is used to toggle fullscreen if pressed
 *
 */
function fullScreen () {
  if (!fullScreenMode) {
    document.getElementById('fullscreen').requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

/**
 * this function shows the touch-screen Messagen to change into Full Screen if a Touch Screen is used
 */
function checkDevices () {
  if (isTouchScreen || innerWidth < innerHeight) {
    document.getElementById('turn-device-message').style.display = 'flex'
  } else {
    loadingScreen()
  }
}

/**
 * this function starts the game in a simpler way if touch screen is used
 */
function startGameFromTouchScreen () {
  for (let i = 0; i < overlaysSkippedTouchscreen.length; i++) {
    const overlay = overlaysSkippedTouchscreen[i];
    back(overlaysSkippedTouchscreen[i])
  }
    fullScreen()
    body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/bg8.jpg)'
    body.style.backgroundSize = 'cover'
    goInside()
}

/**
 * this function closes the game if the button is pressed
 *
 */
function closeGame () {
  show('canvas-overlay-interior')
  stopAnimations()
  world.enemies = []
  world.knives = []
  isInInteriorRoom = true
}

/** this functions pauses the game
 *
 * @param {variable} gamePaused
 */
function pauseGame () {
  let currentLevelPauseImage = world.currentLevel
  document.getElementById('pauseimage').src = `./img/pauseimage/${currentLevelPauseImage}.png`
  if (!gamePaused) {
    stopAnimations()
    document.getElementById('pause-screen').style.display = 'flex'
  } else {
    reenableAnimations()
    document.getElementById('pause-screen').style.display = 'none'
  }
}

/** this function stops the animations of enemies and knives (in level3)
 *
 * @param {variable} enemies
 * @param {variable} knives
 */
function stopAnimations () {
  for (let i = 0; i < world.enemies.length; i++) {
    let enemy = world.enemies[i]
    enemy.gamePaused = true
  }
  if (world.currentLevel == 3) {
    for (let i = 0; i < world.knives.length; i++) {
      let knife = world.knives[i]
      knife.gamePaused = true
    }
  }
  world.character.intervalStop2 = true
  world.character.intervalStop1 = true
  gamePaused = true
}

/** this function reenables the animations of enemies and knives (in level3)
 *
 * @param {variable} enemies
 * @param {variable} knives
 */
function reenableAnimations () {
  for (let i = 0; i < world.enemies.length; i++) {
    let enemy = world.enemies[i]
    enemy.gamePaused = false
  }
  if (world.currentLevel == 3) {
    for (let i = 0; i < world.knives.length; i++) {
      let knife = world.knives[i]
      knife.gamePaused = false
    }
  }
  world.character.intervalStop2 = false
  world.character.intervalStop1 = false
  gamePaused = false
}

/** this function checks if the game has already been started, then starts a news game
 *
 * @param {variable} hasBeenAtGame
 */
function newGame () {
  isInInteriorRoom = false
  if (!hasBeenAtGame) {
    world.endScreen.push(new EndScreen(-450, 0, 1, 1320, 780))
    setTimeout(() => {
      document.getElementById('canvas-overlay-interior').style.display = 'none'
      removeEndScreen()
    }, 150)
    reenableAnimations()
    hasBeenAtGame = true
  } else {
    playAgain('canvas-overlay-interior')
    reenableAnimations()
  }
}

/** this functions starts the game after it was lost.
 *
 */
function playAgain (id) {
  world.enemies = []
  world.knives = []
  init()
  reenableAnimations()
  world.character.setAllVariablesBack()
  restore(0)
  document.getElementById(`${id}`).style.display = 'none'
}

/** this removes the black end screen after it is shown at the end of a level
 *
 */
function removeEndScreen () {
  setTimeout(() => {
    world.endScreen = []
  }, 900)
}

/** this function is toggled when the door on the exterior image is clicked
 *
 */
function goInside () {
  doorOpening.play()
  lightningStrike.volume = 1
  enableHoverNoise()
  setTimeout(() => {
    document.getElementById('canvas-overlay-exterior').style.display = 'none'
    document.getElementById('arrowtodoor').style.display = 'none'
  }, 400)
  setTimeout(() => {
    backgroundAudio.play()
  }, 1000)
}

/** this function is a general function to show a layer of the canvas
 *
 */
function show (id) {
  document.getElementById(`${id}`).style.display = 'flex'
}

/** this function is a general function to show a layer of the canvas again, after it was removed
 *
 */
function back (id) {
  document.getElementById(`${id}`).style.display = 'none'
}

/** this function shows the hole story when an arrow is clicked.
 */
function showStory () {
  for (let i = 1; i < 7; i++) {
    document.getElementById(`story-line${i}`).style.opacity = '1'
  }
  document.getElementById('story-arrow').style.opacity = '1'
}

/** this function can hide all storylines if necessary
 *
 */
function hideStorylines () {
  for (let i = 1; i < 7; i++) {
    let storyline = document.getElementById(`story-line${i}`)
    storyline.style.opacity = '0'
  }
}

/** this function restores the world if a level is started at the beginning
 * in case the caracter died
 * @param {variable} level
 */
function restore (level) {
  restoreEnemies(level)
  restoreCollectables(level)
  restoreBarrels(level)
}

/** this function restores the enemies (some could have been killed)
 *
 * @param {variable} enemies
 */
function restoreEnemies (level) {
  world.enemies = []
  for (let i = 0; i < enemies_restored[level].length; i++) {
    let enemyData = enemies_restored[level][i];
    world.enemies.push(new enemyData[0](enemyData[1], enemyData[2], enemyData[3])) 
  }
}

/** this function restores the collectables (some could have been collected)
 *
 * @param {variable} collectables
 */
function restoreCollectables (level) {
  world.collectables = []
  for (let i = 0; i < collectables_restored[level].length; i++) {
    let collection = collectables_restored[level][i]
    world.collectables.push(collection)
  }
}

/** this function restores the barrels (some could have been destroyed)
 *
 * @param {variable} level
 */
function restoreBarrels (level) {
  world.barrels = []
  for (let i = 0; i < barrels_res[level].length; i++) {
    let barrelData = barrels_res[level][i];
    world.barrels.push(new Barrel(barrelData[0], barrelData[1], barrelData[2]));
  }
}


/** this function restores the Hearts at the top of the canvas, when a game is repeated.
 *
 * @param {variable} lives
 */
function restoreLives () {
  world.lives = []
  for (let i = 0; i < lives_res.length; i++) {
      heart = lives_res[i];
      world.lives.push( new Life(heart))
  }
}

  /**this function is to add coins to the collection.
   */
  function collectCoin () {
    world.coinsCollected++
    if (world.coinsCollected == 50) {
      world.coinsCollected = 0
      world.lives.push(new Life(680 - world.lifesRemaining * 30))
      world.lifesRemaining++
    }
  }

 /**this general function deletes moving objects
   */
 function deleteMovingObjects (mo, distance) {
  for (let i = 0; i < mo.length; i++) {
    let object = mo[i]
    if (object.miles > distance) {
      mo.splice(i, 1)
    }
  }
 }

 /**
   * this function checks, if the character is at the end of level 3, then a lightening is played
   */
 function checkGameStatus () {
  setInterval(() => {
    if (!world.character.isAtBossFight) {
      if (world.currentLevel == 4 && world.character.x > 3340) {
        world.background.push(new Background('img/level3/Background/Background_01_night.png',2550,0))
        world.background.push(new Background('img/level3/Background/Background_01_night.png',3400,0))
        world.lightning.push(new Lightning(3150, -100))
        lightningStrike.play();
        setTimeout(() => {world.lightning = []}, 20)
        world.character.isAtBossFight = true;
      }
    }
  }, 120)
}

  /** if the character has picked up the chess king, which is located at the end of the game
   * there is a message shown, to give it back to the brother
   */
  function showGiveTheKingBackMessage () {
    document.getElementById('brother-message').style.display = 'flex'
    setTimeout(() => {document.getElementById('brother-message').style.display = 'none'}, 2000)
  }


 /**
   * this function removes the Lightning, that appears at the end of level 3
   */
 function removeLightning () {
  if (world.character.isAtBossFight == true) {
    world.background.splice(12, 1)
    world.background.splice(11, 1)
    world.character.isAtBossFight = false
  }
}

/** this function changes to full-screen mode if the button is pressed.
 *
 * @param {variable} fullscreenMode
 */
window.addEventListener('fullscreenchange', function () {
  if (!fullScreenMode) {
    fullScreenMode = true
    document.getElementById('show-full-screen').src = 'img/screen-controls/exit-full-screen.png'
  } else {
    fullScreenMode = false
    document.getElementById('show-full-screen').src = 'img/screen-controls/fullscreen.png'
  }
})