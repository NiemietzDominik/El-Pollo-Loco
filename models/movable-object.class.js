class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    damage = 5;
    lastHit = 0;
    jump_sound = new Audio('audio/jump.mp3');

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 180;
        }
    }

    // character.iscolliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }



    hit() {
        this.energy -= 0.7;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    bottleHit() {
        if (this instanceof Endboss) {
            this.endbossGotHit();
        }
        if (this instanceof MiniEndboss) {
           this.miniEndbossGotHit();
        }
    }

    endbossGotHit() {
        this.endbossEnergy -= 25;
        if (this.endbossEnergy <= 0) {
            this.endbossEnergy = 0;
            console.log('endboss is Dead');
        } else {
            this.lastHit = new Date().getTime();
            console.log('endbossEnergy:', this.endbossEnergy);
        }
    }

    miniEndbossGotHit(){
        this.miniEndbossEnergy -= 25;
        if (this.miniEndbossEnergy <= 0) {
            this.miniEndbossEnergy = 0;
            this.alive = false;
            console.log('miniEndboss is alive =', this.alive,',', 'miniEndbossEnergy:', this.miniEndbossEnergy);
        } else {
            this.lastHit = new Date().getTime();
            console.log('miniEndbossEnergy:', this.miniEndbossEnergy);
        }
    }

    instandKill() {
        this.energy = 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in ms
        timepassed = timepassed / 500; // difference in s
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    endbossDead() {
        return this.endbossEnergy == 0;
    }

    miniEndbossDead() {
        return this.miniEndbossEnergy == 0;
    }


    spawnMiniChickens(x, speed) {
        if (this.endbossSeeCharacter == true) {
            this.level.enemies.push(new MiniChicken(x, speed));
        }
    }



    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
    }


    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    jump() {
        this.jump_sound.play();
        this.jump_sound.volume = 0.02;
        this.speedY = 30;
    }



}