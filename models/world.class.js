class World {
    backgroundMusic = new Audio('audio/backgroundMusic.mp3');
    coinSound = new Audio('audio/coin.mp3');
    bottleSound = new Audio('audio/bottle.mp3');
    character = new Character();
    chicken = new Chicken();
    statusbar = new Statusbar([
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ], 0, 0, 260, 60);

    hudCoins = [];
    hudBottles = [];

    throwableObjects = [];

    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;

    constructor(canvas, keyboard) {
        this.playBackgroundMusic();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCollectingCoins();
        this.checkCollectingBottles();

    }

    setWorld() {
        this.character.world = this;
    }

    playBackgroundMusic() {
        this.sound(this.backgroundMusic, 0.05, 1.5);
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.hudBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.hudBottles.splice(0, 1);
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

    checkJumpOnHead() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && this.isAboveGround()) {
                    this.chicken.instantKill(); 
                }
            })
        }, 200);
    }

    checkCollectingCoins() {
        setInterval(() => {
            this.level.coins.forEach((coin, index) => {
                if (this.character.isColliding(coin)) {
                    this.level.coins.splice(index, 1);
                    let distance = this.hudCoins.length * 15;
                    this.hudCoins.push(new CollectedCoins('img/8.Coin/Moneda1.png', distance - 20, 30, 100, 100));
                    this.sound(this.coinSound, 0.2, 2)
                }
            });
        }, 100);
    }

    checkCollectingBottles() {
        setInterval(() => {
            this.level.bottle.forEach((bottle, index) => {
                if (this.character.isColliding(bottle)) {
                    this.level.bottle.splice(index, 1);
                    let distance = this.hudBottles.length * 5;
                    this.hudBottles.push(new CollectedBottles('img/7.Marcadores/Icono/Botella.png', distance + 10, 100, 40, 40));
                    this.sound(this.bottleSound, 0.2, 2);
                    console.log(this.hudBottles);
                }
            });
        }, 100);
    }




    draw() {
        this.ctx.clearRect(100, 100, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusbar);
        this.addObjectsToMap(this.hudCoins);
        this.addObjectsToMap(this.hudBottles);
        this.ctx.translate(this.camera_x, 0); // forwards


        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
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

    sound(volSound, vol, playRate) {
        volSound.play();
        volSound.volume = vol;
        volSound.playbackRate = playRate;
    }
}


