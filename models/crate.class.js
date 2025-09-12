class Crate extends DrawableObject {
    x
    y
    width = 50
    height = 50
    currentImage = 0
    currentLevel = 2
    isFalling = true
  
    IMAGES_CRATE = [
        'img/marketlevel/Environment/Wooden_Crate.png',
    ]
   
    constructor (x, y) {
      super().loadImage('img/marketlevel/Environment/Wooden_Crate.png')
      this.x = x
      this.y = y
      this.loadImages(this.IMAGES_CRATE)
      this.crateFall();
    }
  
    crateFall(){
        setInterval(() => {
            if (this.isFalling == true) {
                this.y = this.y + 25;
                if (this.y >=380) {
                    this.isFalling = false;
                }
            }
            else{
                this.y = this.y - 5;
                if (this.y < 50) {
                    this.isFalling = true;
                }
            } 
        }, 20);
    }
  }