class Barrel extends MovableObject{

    height = 50;
    width = 50;
    x;
    y;
    exploded = false;
    collectableShown = false;
    explosionstatus = 0;
    IMAGES = [ 'img/level1/medieval/Platformer/Wooden_Barrel.png',
    'img/level2/Platformer/Wooden_Barrel.png',
    'img/level3/Platformer/Wooden_Barrel.png'
    ] 

    constructor(imagepath, x, y){
        super().loadImage(imagepath);
        this.loadImages(EXPLOSIONS[0]);
        this.loadImages(EXPLOSIONS[1]);
        this.loadImages[this.IMAGES]
        this.animate(imagepath);
        this.y = y;
        this.x = x;    
    }

    animate(){
        let explosion = setInterval(() => {
            if (this.exploded) {
                this.exploded = false;
                this.playAnimationOnce(EXPLOSIONS[this.explosionstatus]);
                barrelCrack.play();
                setTimeout(() => {
                    clearInterval(explosion);
                    if (!this.collectableShown) {
                        this.showRandomCollectable(this.x, this.y);
                        this.collectableShown = true;
                    }
                }, 150);
            }
          }, 80)
    }

    showRandomCollectable (x, y) {
        let rm = Math.floor(Math.random() * 14)
        world.collectables.push(new Collectable(insideBarrel[rm][0],x+5,y,insideBarrel[rm][3],insideBarrel[rm][3],insideBarrel[rm][2],insideBarrel[rm][1]))
      }
}