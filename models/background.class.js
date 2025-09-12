
class Background extends MovableObject{
    height = 480;
    width = 850;
    speed = 1;

    constructor(imagepath, x, y){
        super().loadImage(imagepath);
        this.y = y;
        this.x = x;

    }
}