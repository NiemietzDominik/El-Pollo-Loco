class ThrowableObject extends MovableObject {
 
    throw_sound = new Audio('audio/throw.mp3')

    constructor(x, y){
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw(){
        this.throw_sound.play();
        this.throw_sound.volume = 0.65;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}