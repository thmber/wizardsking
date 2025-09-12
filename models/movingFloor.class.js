class MovingFloor extends MovableObject{
    x ;
    y;
    width = 100;
    height = 50;
    miles = 0;
    distance = 150;
    goBack = false;
    speed = 3;

    constructor(imagepath, x, y, distance){
        super().loadImage(imagepath);
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.moveBackAndForth();

    }
    /**
     * the moving Floor moves infinitely back and forth
     */
    moveBackAndForth(){
        setInterval(() => {
            if (this.goBack == false) {
                this.x += this.speed; 
                this.miles += this.speed;
                if (this.miles >= this.distance) {
                    this.goBack = true;
                }
            }
            else{
                this.x -= this.speed; 
                this.miles -= this.speed;
                if (this.miles <= 0) {
                    this.goBack = false;
                }
            }    
        }, 30); 
    }  
}