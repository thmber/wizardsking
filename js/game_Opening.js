/**
 * this function starts the loading screen
 *
 */
function loadingScreen () {
    back('start-screen')
    show('green-light')
    beginninglight.play()
    setTimeout(() => (document.getElementById('loading-screen').style.opacity = 0),1500)
    setTimeout(() =>(document.getElementById('title-letters-container').style.display ='none'),1250)
    setTimeout(() => (document.getElementById('loading-screen').style.display = 'none'),5500)
    setTimeout(() => {
      strikeLighteningDarkenBackground()
      makeExteriordarkerHideLightening()
    }, 4000)
    setTimeout(() => {
      document.getElementById('arrowtodoor').style.opacity = 1
      document.getElementById('arrowtodoor').style.filter = 'brightness(100%)'
    }, 6000)
  }
  
  /**
   * this function strikes the Lightening and Darkens the outer Background of the exterior
   */
  function strikeLighteningDarkenBackground () {
    document.getElementById('story-lightning').style.display = 'unset'
    body.style.background =
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/bg8.jpg)'
    body.style.backgroundSize = 'cover'
    lightningStrike.play()
  }
  
  /**
   * this function hides the lightening picture after miliseconds and darkens the exterior picture of the wizard house
   *
   */
  function makeExteriordarkerHideLightening () {
    setTimeout(() => {
      document.getElementById('story-lightning').style.display = 'none'
      document.getElementById('canvas-overlay-exterior').style.filter =
        'brightness(28%)'
    }, 60)
  }
  
  