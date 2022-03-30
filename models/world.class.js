class World {
    backgroundMusic = new Audio('audio/backgroundMusic.mp3');
    character = new Character();
    statusbar = new Statusbar();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.backgroundMusic.play();
        this.backgroundMusic.volume = 0.05;
        this.backgroundMusic.playbackRate = 1.5;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
   
    }

    setWorld() {
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects(){
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusbar.setPercentage(this.character.energy);
                }
            })
        }, 1000);
    }

    


 



    draw() {
        this.ctx.clearRect(100, 100, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusbar);
        this.ctx.translate(this.camera_x, 0); // forwards

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx); ---> Draw a Rectangle for every Object in Game


        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }

    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.camera_x = this.camera_x
        this.ctx.restore();
    }
}


