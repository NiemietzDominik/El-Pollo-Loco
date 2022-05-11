class World {
    backgroundMusic = new Audio('audio/backgroundMusic.mp3');
    coinSound = new Audio('audio/coin.mp3');
    bottleSound = new Audio('audio/bottle.mp3');
    character = new Character();
    endscreen = ['img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png'];

    level = level1;

    endboss = this.level.enemies[20];
    miniEndboss = this.level.enemies[19];
    alive = true;
    

    statusbar = new Statusbar();

    hudCoins = [];
    hudBottles = [];
    throwableObjects = [];
    endbossSeeCharacter = false;
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
        this.checkEndbossSeeCharacter();
        this.spawnMiniChickens();
        this.throwBottle();
        this.checkEndbossDead();
        this.checkCollisions();
        this.endbossShrinking();
        this.showEndscreen();
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

    showEndscreen() {
        if (this.character.isDead()) {
            this.addToMap(endscreen);
        }
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.hudBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.hudBottles.splice(-1);
            setInterval(() => {
                if (bottle.isColliding(this.endboss) && !this.endboss.isHurt()) {
                    this.endboss.hit(15);
                }
                if (bottle.isColliding(this.miniEndboss)) {
                    this.miniEndboss.hit(25);
                }
            }, 100);
        }
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                    this.character.hit(0.5);
                    console.log(this.character.energy);
                    this.statusbar.setPercentage(this.character.energy);
                }
                if (!(enemy instanceof Endboss) && !enemy.isDead() && this.character.isColliding(enemy) && this.character.isAboveGround() && !enemy.isAboveGround()) {
                    enemy.instandKill();
                    setTimeout(() => {
                        let index = this.level.enemies.indexOf(enemy);
                        this.level.enemies.splice(index, 1);
                    }, 500);
                }
            })
        }, 1000);
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
                    this.throwBottle(index);
                }
            });
        }, 100);
    }

    checkEndbossSeeCharacter() {
        setInterval(() => {
            if (this.camera_x <= -5300 && !this.endboss.isDead() && !this.character.isDead()) {
                this.endbossSeeCharacter = true;

                if (this.endbossSeeCharacter == true && this.endboss.energy == 100) {
                    this.endbossAttack1();
                } else if (this.endbossSeeCharacter == true && this.endboss.energy <= 80 && this.endboss.energy > 50) {
                    this.endbossAttack2();
                } else if (this.endbossSeeCharacter == true && this.endboss.energy <= 50 && this.endboss.energy > 0) {
                    this.endbossAttack3();
                }
            }
        }, 1000);
    }

    checkEndbossDead() {
        setInterval(() => {
            if (this.miniEndboss.isDead()) {
                this.miniEndboss.speedY = 15;
            }
            if (this.endboss.isDead()) {
                this.endboss.y = 100;
                this.endbossShrinking();
                if (this.endboss.width <= 0) {
                    this.level.enemies.forEach(enemy => {
                        let index = this.level.enemies.indexOf(enemy);
                        this.level.enemies.splice(index, 1);
                    });
                }
            }
        }, 100)
    }


    endbossShrinking() {
        if (this.endboss.height && this.endboss.width > 0) {
            this.endboss.height -= 35;
            this.endboss.width -= 20;
            this.endboss.x += 15;
        }
    }

    endbossAttack1() {
        console.log('attack 1')
        this.spawnMiniChickens(8000, 5, 380);
        this.spawnMiniChickens(7800, 7, 380);
        this.spawnMiniChickens(8000, 8, 380);
    }

    endbossAttack2() {
        console.log('attack 2')
        this.spawnMiniChickens(8030, 6, 380);
        this.spawnMiniChickens(8050, 6, 380);
        this.spawnMiniChickens(7800, 8, 340);
        this.spawnMiniChickens(7800, 8, 250);
    }

    endbossAttack3() {
        console.log('attack 3')
        this.spawnMiniChickens(8030, 7, 280);
        this.spawnMiniChickens(8050, 7, 300);
        this.spawnMiniChickens(8070, 7, 320);
        this.spawnMiniChickens(8090, 7, 340);

        this.spawnMiniChickens(8130, 9, 380);
        this.spawnMiniChickens(8150, 9, 380);
        this.spawnMiniChickens(8170, 9, 380);
        this.spawnMiniChickens(8190, 9, 380);

    }

    spawnMiniChickens(x, speed, y) {
        if (this.endbossSeeCharacter == true) {
            this.level.enemies.push(new MiniChicken(x, speed, y));
        }
    }

    throwBottle(index) {
        this.level.bottle.splice(index, 1);
        let distance = this.hudBottles.length * 5;
        this.hudBottles.push(new CollectedBottles('img/7.Marcadores/Icono/Botella.png', distance + 10, 100, 40, 40));
        this.sound(this.bottleSound, 0.2, 2);
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

    showEndscreen() {
        setInterval(() => {
            if (this.endboss.isDead() || this.character.isDead()) {
                document.getElementById('endScreen').classList.remove('hide');
                document.getElementById('endScreen').classList.add('startScreen');
                document.getElementById('replay').classList.remove('hide');
                document.getElementById('replay').classList.add('replay');
                setTimeout(() => this.level.enemies.length = 0, 1500)

            }

        }, 500);
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


