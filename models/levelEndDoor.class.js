class LevelEndDoor extends DrawableObject{
    height = 70;
    width = 70;
    x;
    y;
    characterIsAtLevelEnd = false;

    IMAGES_OPENING = [
        'img/levelendDoor/Level-end_door_00.png',
        'img/levelendDoor/Level-end_door_01.png',
        'img/levelendDoor/Level-end_door_02.png',
        'img/levelendDoor/Level-end_door_03.png',
        'img/levelendDoor/Level-end_door_04.png',
        'img/levelendDoor/Level-end_door_05.png',
    ]

    constructor(x, y){
        super().loadImage('');
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGES_OPENING);  
        this.animateDoor();
        
    }
    
    /**
     * when the character has reached a certain point in the level, the level-end-door appears 
     * it is only animated once.
     */
        animateDoor(){
            let interval = setInterval(() => {
                this.playAnimation(this.IMAGES_OPENING);
            }, 120);
            setTimeout(() => {
                clearInterval(interval);              
            }, 720);
           
        }
}