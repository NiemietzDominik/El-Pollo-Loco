class Cloud extends MovableObject {
    y = 100;
    width = 500;
    height = 250;
    x = 100;


    constructor(y, speed) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.y = y;
        this.x = Math.random() * 500;
        this.speed = speed;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}