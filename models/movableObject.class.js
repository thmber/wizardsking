class MovableObject extends DrawableObject{
  
    otherDirection = false;
    speedY = 0;
    speed = 1;
    acceleration = 3;
    floor= 366;
    miles = 0;
    range = 70;
    gamePaused = false;
    levelsNames = ['', 'level1', 'level2', 'level3', 'level4'];


    /**
     * this function lets all moveables Objects, character or enemies fall.
     */
    applyGravity(){
        setInterval(() => {
            if (this.y < this.floor || this.speedY > 0) {
                if ((this.floor-this.y) < -this.speedY) {
                    this.y = this.floor - this.yCorrection;
                }
                else{
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                }
            }             
            this.getFloor();
        }, 1000/25);
    }


    /**
     * this function determines, if an element is on the floor or not. For that the Floor-Data is used, that is
     * specified in floordata.js
     */
    getFloor(){
        let groundY = floorX[this.currentLevelinString()].find(grou => (this.xcenterOfMoveableObject())< grou.until);  
        let groundYRightLayer = groundY.ground.find(layer => layer >= this.y);  
        this.floor = groundYRightLayer;
         if (groundYRightLayer == undefined) {
            this.floor = 681;
        }
    }

    /**
     * 
     * @returns the middle on the x-axis of the character or enemy
     */
    xcenterOfMoveableObject(){
        return (this.x + (this.width/2));
    }

    /**
     * this function is used to get the string value in the array LevelsNames
     */
    currentLevelinString(){
        return (this.levelsNames[this.currentLevel]);
    }

    /**
     * 
     * @returns true if the character is above the floor.
     */
    isAboveGround(){
        return this.y < this.floor;
    }

    /**
     * this function addes the predetermind speed of the character to let it move
     */
    moveRight(){
        this.x += this.speed;
    }

    /**
     * this function addes speed to the character if it moves to the left
     */
    moveLeft(){
        this.x -= this.speed;
    }

    /**
     * this function is used to let the enemies move back and forth in a predetermined range
     */
    moveBackandForth(){
        
                if (!this.gamePaused) {
                    if (this.otherDirection) {
                        this.x += this.speed;
                        this.miles += this.speed;
                        if (this.miles > this.range) {
                            this.otherDirection = false
                            this.miles = 0;
                        }
                    }
                    else{
                        this.x -= this.speed;
                        this.miles += this.speed;
                        if (this.miles > this.range) {
                            this.otherDirection = true;
                            this.miles = 0;
                        }
                    }
                }
    }
}