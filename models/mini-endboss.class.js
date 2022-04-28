class MiniEndboss extends Endboss {

    height = 300;
    width = 200;
    y = 200;
    speed = 2;
   
    

    constructor(speed) {
        super();
        this.x = 1630;
        this.animate();
        this.energy = 25;
        this.moveLeft(speed);
        this.applyGravity();
        this.jumpAndRun();
    }

    jumpAndRun() {
        setInterval(() => {
            this.moveLeft();
            if (!this.isAboveGround()) {
                this.jump();
            }
        }, 1000 / 60);
    }

}