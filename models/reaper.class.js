class Reaper extends MovableObject{

    x;
    y;
    width = 90; 
    height = 90;
    speed = 4;
    currentImage = 0;
    currentLevel = 4;
    currentImageNoRepeat = 0;
    yCorrection = 9;
    isAlive = true;
    otherDirection = false;
    freeze = false;
    freezecount = 0;

    IMAGES_SLASHING = [        
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_000.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_001.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_002.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_003.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_004.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_005.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_006.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_007.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_008.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_009.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_010.png',
        'img/level3/enemies/reaper/0_Reaper_Man_Run Slashing_011.png',
    ]
    IMAGE_FREEZE = ['img/level3/enemies/reaper/0_Reaper_frozen.png']

    constructor(x, y, range){
        super().loadImage('');
        this.x = x;
        this.y = y;
        this.range = range;
        this.loadImages(this.IMAGES_SLASHING);
        this.loadImages(this.IMAGE_FREEZE)
            this.applyGravity();
        this.animate();
        
        
    }

  
    /** the enemy reaper is animated just like the other enemies. the only differences is the speed.
     * the reaper moves faster.
     */
    animate(){
                            
            setInterval(() => {
                if (!this.freeze) {
                this.moveBackandForth();
                }
            }, 1000/30);
          
            setInterval(() => {
                if (!this.freeze) {
                    this.playAnimation(this.IMAGES_SLASHING)
                }
                else{
                    this.playAnimation(this.IMAGE_FREEZE);
                    this.freezecount++
                    if (this.freezecount > 25) {
                        this.freeze = false;
                        this.freezecount = 0;
                    }
                }                    
            }, 70);      
    }
}