
/**
 * This function enables hovering Noise (4 noises) in the interior.
 */

function enableHoverNoise() {
    playPotionsSound();
    document.getElementById('interior-book').addEventListener('mouseover', playPageSound);
    function playPageSound() {
        pageTurning.play();
    }
    document.getElementById('interior-candles').addEventListener('mouseover', playCandleSound);
    function playCandleSound() {
        candleSound.play();
    }
    document.getElementById('interior-candles').addEventListener('mouseout', pauseCandleSound);
    function pauseCandleSound() {
        candleSound.pause();
    }
}


/**
 * plays the Sound if hovering the potions in the interior room
 */
function playPotionsSound() {
    document.getElementById('potion1').addEventListener('mouseover', playBottleSound);
    document.getElementById('potion2').addEventListener('mouseover', playBottleSound);
    document.getElementById('potion3').addEventListener('mouseover', playBottleSound);
    document.getElementById('potion4').addEventListener('mouseover', playBottleSound);
    function playBottleSound() {
        squishSound.play();
    }
}

/**this function changes the Volume, depending if up or down is pressed
 * 
 * @param {variable} upOrDown 
 */

function changeMusicVolume(upOrDown) {
    if (backgroundAudio.volume > 0 && upOrDown == "down") {
        musicVolume = (backgroundAudio.volume - 0.1)
        backgroundAudio.volume = musicVolume.toFixed(1);
        positionRuler('ruler-music', backgroundAudio);
    }
    if (backgroundAudio.volume < 1 && upOrDown == "up") {
        musicVolume = (backgroundAudio.volume + 0.1)
        backgroundAudio.volume = musicVolume.toFixed(1);
        positionRuler('ruler-music', backgroundAudio);
    }
}


/** this function changes the ruler in the volume-settings overlay.
 * 
 * 
 * @param {variable} id 
 * @param {variable} soundOrMusic 
 */
function positionRuler(id, soundOrMusic) {
    let position = (soundOrMusic.volume * 100)
    document.getElementById(id).style.transform = `translateX(${position}%)`;
}


/**
 * this functions shows the volume-settings. It checks if it is in Interior, so the animations are not reenabled by accident
 */
function showSettings() {
    if (!isInInteriorRoom) {
        stopAnimations();
    }
    show('overlay-settings');
    positionRuler('ruler-music', backgroundAudio);
    positionRuler('ruler-sound', freeze);
}

/** this functions goes back from Setings to game or interior
 * 
 */
function backFromSettings() {
    if (!isInInteriorRoom) {
        reenableAnimations();
    }
    back('overlay-settings');
}

/**this function changes the sound volume. All soundfiles except Backgroundmusic are changed simultaneously
 * 
 * @param {*} upOrDown 
 */
function changeSoundElementsVolume(upOrDown) {
    if (freeze.volume > 0 && upOrDown == "down") {
        for (let i = 0; i < soundElements.length; i++) {
            let soundBit = soundElements[i];
            soundVolume = (soundBit.volume - 0.1)
            soundBit.volume = soundVolume.toFixed(1);
        }
        positionRuler('ruler-sound', freeze);
    }
    if (freeze.volume < 1 && upOrDown == "up") {
        for (let i = 0; i < soundElements.length; i++) {
            let soundBit = soundElements[i];
            soundVolume = (soundBit.volume + 0.1)
            soundBit.volume = soundVolume.toFixed(1);
        }
        positionRuler('ruler-sound', freeze);
    }
}

/** this function plays the sound of something and makes sure it is not repeated directly afterwards
   */
function playSoundOnlyOnce(SoundplayedOrNot, soundElement){
    if (!SoundplayedOrNot) {
      soundElement.play();
      SoundplayedOrNot = true;
    }
  }
