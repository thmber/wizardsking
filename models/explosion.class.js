class Explosion extends DrawableObject{

    x = 300;
    y = 100;
    width = 90; 
    height = 90;
    currentImage = 0;
 
    IMAGES_EXPLOSIONS = [[],
        [
            'img/explosions/PNG/Explosion_1/Explosion_1.png',
            'img/explosions/PNG/Explosion_1/Explosion_2.png',
            'img/explosions/PNG/Explosion_1/Explosion_3.png',
            'img/explosions/PNG/Explosion_1/Explosion_4.png',
            'img/explosions/PNG/Explosion_1/Explosion_5.png',
            'img/explosions/PNG/Explosion_1/Explosion_6.png',
            'img/explosions/PNG/Explosion_1/Explosion_7.png',
            'img/explosions/PNG/Explosion_1/Explosion_8.png',
            'img/explosions/PNG/Explosion_1/Explosion_9.png',   
            'img/explosions/PNG/Explosion_1/Explosion_10.png',],

            ['img/explosions/PNG/Explosion_5/Explosion_1.png',
            'img/explosions/PNG/Explosion_5/Explosion_2.png',
            'img/explosions/PNG/Explosion_5/Explosion_3.png',
            'img/explosions/PNG/Explosion_5/Explosion_4.png',
            'img/explosions/PNG/Explosion_5/Explosion_5.png',
            'img/explosions/PNG/Explosion_5/Explosion_6.png',
            'img/explosions/PNG/Explosion_5/Explosion_7.png',
            'img/explosions/PNG/Explosion_5/Explosion_8.png',
            'img/explosions/PNG/Explosion_5/Explosion_9.png',
            'img/explosions/PNG/Explosion_5/Explosion_10.png',],
            [
                'img/explosions/PNG/Explosion_9/Explosion_1.png',
                'img/explosions/PNG/Explosion_9/Explosion_2.png',
                'img/explosions/PNG/Explosion_9/Explosion_3.png',
                'img/explosions/PNG/Explosion_9/Explosion_4.png',
                'img/explosions/PNG/Explosion_9/Explosion_5.png',
                'img/explosions/PNG/Explosion_9/Explosion_6.png',
                'img/explosions/PNG/Explosion_9/Explosion_7.png',
                'img/explosions/PNG/Explosion_9/Explosion_8.png',
                'img/explosions/PNG/Explosion_9/Explosion_9.png',   
                'img/explosions/PNG/Explosion_9/Explosion_10.png',],
    ]
  
    constructor(x, y, kind){
        super().loadImage('');
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGES_EXPLOSIONS[kind]);  
        this.loadImages(this.IMAGES_EXPLOSIONS[kind]);  
        this.loadImages(this.IMAGES_EXPLOSIONS[kind]);  
        this.animate(kind);
    }

    /**depending on the event, a different explosion is triggered. 
     * there are 3 types of explosions
     * one for the barrell, that can be shot
     * one for the enemy if it explodes after being shot by fire wizard
     * one for the enemy, when it is smashed by the ogre (i.e. the wizard or character, if it
     * drank the green potion, that appears in the level)
     * @param {*} kind 
     */
    animate(kind){
        setInterval(() => {    
                    this.playAnimation(this.IMAGES_EXPLOSIONS[kind])
        }, 30);
    }
}