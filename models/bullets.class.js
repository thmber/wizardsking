class Bullets extends MovableObject{
    width = 20;
    height = 20;  
    speed = 16;
    miles = 0;
    otherDirection = false;


IMAGES_BULLETS = [['img/bullets/Magicbullet1.png'],
                ['img/bullets/firebullet.png'],
                ['img/bullets/icebullet.png']
                ]

    constructor(x, y, direction, kind){
        super().loadImage(this.IMAGES_BULLETS[kind]);
        this.x = x;
        this.y = y;
        this.otherDirection = direction;
        this.moveRight();
    }

    /**
     * the bullets can move to the right or left direction
     */
    moveRight(){
       setInterval(() => {
            if (this.otherDirection) {
                this.x -= this.speed;
                this.miles += this.speed;

            } else {
                this.x += this.speed;
                this.miles+= this.speed;
            }
       }, 1000/30);
    }
}