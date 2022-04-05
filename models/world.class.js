class World {
    backgroundMusic = new Audio('audio/backgroundMusic.mp3');
    coinSound = new Audio('audio/coin.mp3');
    character = new Character();
    statusbar = new Statusbar([
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ], 40, 0, 260, 60);


    coinbar = new CollectedCoins('img/8.Coin/Moneda1.png');

    coinInventar = [this.coinbar];


    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    throwableObjects = [];
    coins = 0;



    constructor(canvas, keyboard, coinInventar) {
        this.playBackgroundMusic();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.coinInventar = coinInventar;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCollectingObjects();

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
        if (this.keyboard.D) {
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

    checkCollectingObjects() {
        setInterval(() => {
            this.level.coins.forEach((coin, index) => {
                if (this.character.isColliding(coin)) {
                    this.level.coins.splice(index, 1);
                    this.sound(this.coinSound, 0.2, 2)
                    this.coins++;
                    this.coinInventar.push(this.coinbar);
                    console.log(this.coins);

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
        this.addToMap(this.coinbar)
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

    sound(volSound, vol, playRate) {
        volSound.play();
        volSound.volume = vol;
        volSound.playbackRate = playRate;
    }
}


