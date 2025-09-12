class Minotaur extends MovableObject{

    x = 300;
    y = 100;
    width = 90; 
    height = 90;
    speed = 2;
    currentImage = 0;
    currentLevel = 3;
    currentImageNoRepeat = 0;
    yCorrection = 10;
    isAlive = true;
    otherDirection = false;
    freeze = false;
    freezecount = 0;

    IMAGES_SLASHING = [        
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_000.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_001.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_002.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_003.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_004.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_005.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_006.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_007.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_008.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_009.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_010.png',
        'img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Run Slashing_011.png',       
    ]
    IMAGE_FREEZE = ['img/level2/Enemies/Minotaur_1/PNG Sequences/Run Slashing/0_Minotaur_Frozen.png']

    constructor(x, y, range){
        super().loadImage('');
        this.x = x;
        this.y = y;
        this.range = range;
        this.loadImages(this.IMAGES_SLASHING);
        this.loadImages(this.IMAGE_FREEZE);
        this.applyGravity();
        this.animate();

    }

    /**
     * minotaurs move and behave like the goblin or golem, they just appear in level 2.
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