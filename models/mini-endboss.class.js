class MiniEndboss extends Endboss{

    height = 300;
    width = 200;
    y = 200;
    speed = 2;

    energy = 25;
    

    constructor(speed) {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 1630;
        this.animate();
        this.moveLeft(speed);
        this.applyGravity();
        this.jumpAndRun();
        
    }


    jumpAndRun(){
        
        setInterval(() => {
            this.moveLeft();
            if(!this.isAboveGround()){
                this.jump();
            }
        }, 1000 / 60);


    }
  
}