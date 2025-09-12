
/** the following functions determine the touchbuttons
 * 
 * @param {variable} keyboard
 */
function touchRight(){
    keyboard.RIGHT = true;
}

function touchRightEnd(){
    keyboard.RIGHT = false;
}

function touchLeft(){
    keyboard.LEFT = true;
}

function touchLeftEnd(){
    keyboard.LEFT = false;
}

function touchUp(){
    keyboard.UP = true;
}

function touchUpEnd(){
    keyboard.UP = false;
}

function touchShoot(){
    keyboard.SPACE = true;
}

function touchShootEnd(){
    keyboard.SPACE = false;
}


/**
 * this function enables the pressed Keys
 */
window.addEventListener('keyup', (e) =>{
    if (e.code == "ArrowRight" | e.code == "KeyD") {
        keyboard.RIGHT = false;
    }
    if (e.code == "ArrowLeft" | e.code == "KeyA") {
        keyboard.LEFT = false;
    }
    if (e.code == "ArrowUp" | e.code == "KeyW") {
        keyboard.UP = false;
    }
    if (e.code == "Space") {
        keyboard.SPACE = false;
    }
})


/** this function shows the touchbuttons in event of a touch-device
 * 
 */
window.addEventListener('touchstart', (e) =>{
    isTouchScreen = true;
    document.getElementById('touch-right').style.display = "flex";
    document.getElementById('touch-left').style.display = "flex";
    document.getElementById('touch-up').style.display = "flex";
    document.getElementById('touch-shoot').style.display = "flex";
    document.getElementById('show-full-screen').style.display = "none";

})


/** this function uses the arrows-keys to move the character
 * ASDW can also be used.
 * 
 */
window.addEventListener('keydown', (e) =>{
    if (e.code == "ArrowRight" | e.code == "KeyD") {
        keyboard.RIGHT = true;
    }
    if (e.code == "ArrowLeft" | e.code == "KeyA") {
        keyboard.LEFT = true;
    }
    if (e.code == "ArrowUp" | e.code == "KeyW") {
        keyboard.UP = true;
    }
    if (e.code == "Space") {
        keyboard.SPACE = true;
    }
})
