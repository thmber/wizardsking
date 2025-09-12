class Lightning extends DrawableObject{


    x = 0;
    y = 0;
    width = 970; 
    height = 800;
    currentImage = 0;
 
    IMAGES_LIGHTNING = ['img/story-icons/lightning.png']
  
    constructor(x, y){
        super().loadImage('img/story-icons/lightning.png');
        this.x = x;
        this.y = y;

    }
}